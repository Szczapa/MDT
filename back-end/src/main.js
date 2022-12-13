// import standard JS (imports EcmaScript)
// Pour info: EcmaScript est un standard pour langages de programmation
// JavaScript est un langage de programmation qui utilise le standard EcmaScript
// ActionScript (utilisé pour Flash) implémente aussi EcmaScript

// Ajouter dans le package.json "type": "module" car node ne supporte pas les modules ES nativement
import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

// Connexion à la BDD
const pool = mariadb.createPool({
  host: "localhost", //  mettre url de connexion ici
  // host: "mysql-projetmdt.alwaysdata.net", //  mettre url de connexion ici
  user: "root",
  // user: "projetmdt ",
  password: "",
  // password: "**projet_mdt**",
  database: "mdt",
  // database: "projetmdt_mdt",
  port: 3306,
  connectionLimit: 5,
});

const app = express();

app.use(bodyParser.json());

app.use("/", express.static("public"));

app.get("/workforce", async (req, res) => {
  const conn = await pool.getConnection();
  const workforce = await conn.query("SELECT * FROM user");
  res.json(workforce);
  conn.end();
});

app.post("/register", async (req, res) => {
  const userToAdd = req.body;
  if (
    !userToAdd.firstName.match(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    ) ||
    !userToAdd.lastName.match(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    ) ||
    !userToAdd.userName.match(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    )
  ) {
    console.log("caractère interdit");
    // return;
  }
  if (!userToAdd.password.match(/^[^@&"()!$€£`+=\/;?#]+$/)) {
    console.log("caractère interdit");
    // return;
  }
  if (
    userToAdd.grade != "Cadet" &&
    userToAdd.grade != "Officier 1" &&
    userToAdd.grade != "Officier 2" &&
    userToAdd.grade != "Officier 3" &&
    userToAdd.grade != "Sergent" &&
    userToAdd.grade != "Sergent-chef" &&
    userToAdd.grade != "Lieutenant" &&
    userToAdd.grade != "Capitaine" &&
    userToAdd.grade != "Commandant/(e)"
  ) {
    console.log("grade non autorisé");
    // return;
  }

  const conn = await pool.getConnection();

  const checkResult = await conn.query(
    `SELECT * FROM user WHERE firstname = ? And lastname = ? And username = ?`,
    [userToAdd.firstName, userToAdd.lastName, userToAdd.userName]
  );
  console.log(checkResult.length);
  if (checkResult.length > 0) {
    console.log("user already exist");
    return;
  }

  const queryResult = await conn.query(
    `INSERT INTO user (firstname, lastname, username, password,grade) value (?,?,?,?,?)`,
    [
      userToAdd.firstName,
      userToAdd.lastName,
      userToAdd.userName,
      userToAdd.password,
      userToAdd.grade,
    ]
  );
  console.log(queryResult);
  // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  res.end();
  conn.end();
});

app.delete("/workforce/:id", async (req, res) => {
  const tokenResult = await checkToken(req);
  if (tokenResult.error == true) {
    res.status(401);
    res.json({ error: true });
    return;
  }
  const User = tokenResult.user;
  if (User.grade != "Commandant/(e)" && User.grade != "Capitaine") {
    res.status(401);
    res.json({ error: true });
    return;
  }

  if (User.id == req.params.id) {
    res.status(401);
    res.json({
      error: true,
      errorMessage: "Impossible de vous auto supprimer",
    });
    return;
  }

  const id = req.params.id;
  const conn = await pool.getConnection();
  const queryResult = await conn.query(`DELETE FROM user WHERE id = ?`, [id]);
  res.json({ error: false });
  conn.end();
});

app.get("/workforce/:id", async (req, res) => {
  const tokenResult = await checkToken(req);
  if (tokenResult.error == true) {
    res.status(401);
    res.json({ error: true });
    return;
  }
  const User = tokenResult.user;
  if (User.grade != "Commandant/(e)" && User.grade != "Capitaine") {
    res.status(401);
    res.json({ error: true });
    return;
  }

  const id = req.params.id;
  const conn = await pool.getConnection();
  const queryResult = await conn.query(`Select *  FROM user WHERE id = ?`, [
    id,
  ]);
  res.json({ error: false, user: queryResult[0] });
  conn.end();
});

// // Modifier le prix d'un plat (le json contient le nom et le nouveau prix)
// app.put("/dish", (req, res) => {
//   const dish = req.body;
//   const index = dishes.findIndex((p) => p.name === dish.name);
//   if (index != -1) {
//     dishes[index] = dish;
//   } else {
//     res.status(400);
//   }
//   res.end();
// });

/* Gestion des Rapport */
app.post("/report", async (req, res) => {
  const reportToAdd = req.body;
  const conn = await pool.getConnection();

  const queryResult = await conn.query(
    `INSERT INTO report (title, content) value (?,?)`,
    [reportToAdd.title, reportToAdd.report]
  );

  console.log(queryResult);
  // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  res.end();
  conn.end();
});

app.get("/reports", async (req, res) => {
  const conn = await pool.getConnection();
  const reports = await conn.query("SELECT * FROM report");
  res.json(reports);
  conn.end();
});

/*LOGIN & DROIT */
app.post("/login", async (req, res) => {
  const userToLogin = req.body;
  const conn = await pool.getConnection();

  const checkResult = await conn.query(
    `SELECT id FROM user WHERE username = ? And password = ?`,
    [userToLogin.userName, userToLogin.password]
  );
  console.log(checkResult.length);
  if (checkResult.length > 0) {
    let newtoken = token();
    const queryResult = await conn.query(
      "UPDATE user SET token = ? WHERE id = ?",
      [newtoken, checkResult[0].id]
    );

    res.json({ token: newtoken });
    return;
  } else {
    console.log("user doesn't exist");
    res.json(checkResult);
    return;
  }
});

/*Gestion des TOKKEN & CHECK DROIT */

var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function () {
  return rand() + rand(); // to make it longer
};

app.get("/checkToken", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const conn = await pool.getConnection();
  const checkResult = await conn.query("SELECT * FROM user WHERE token = ?", [
    token,
  ]);
  conn.end();
  if (checkResult.length > 0) {
    res.json({ error: false });
    return;
  } else {
    console.log("error");
    res.json({ error: true });
    return;
  }
});

app.get("/checkGrade", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const conn = await pool.getConnection();
  const checkResult = await conn.query("SELECT * FROM user WHERE token = ?", [
    token,
  ]);
  conn.end();
  if (
    (checkResult.length > 0 && checkResult[0].grade == "Commandant/(e))") ||
    checkResult[0].grade == "Capitaine"
  ) {
    res.json({ error: false });
    return;
  } else {
    console.log("error");
    res.json({ error: true });
    return;
  }
});

async function checkToken(req) {
  const token = req.headers.autorization?.split(" ")[1];

  const conn = await pool.getConnection();
  const checkResult = await conn.query("SELECT * FROM user WHERE token = ?", [
    token,
  ]);
  conn.end();
  if (checkResult.length > 0) {
    return { error: false, user: checkResult[0] };
  } else {
    return { error: true };
  }
}
app.listen(3000);
