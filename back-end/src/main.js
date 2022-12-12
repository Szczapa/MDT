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
  user: "root",
  password: "",
  database: "mdt",
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
  userToAdd.token = token();
  const queryResult = await conn.query(
    `INSERT INTO user (firstname, lastname, username, password,grade,token) value (?,?,?,?,?,?)`,
    [
      userToAdd.firstName,
      userToAdd.lastName,
      userToAdd.userName,
      userToAdd.password,
      userToAdd.grade,
      userToAdd.token,
    ]
  );
  console.log(queryResult);
  // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  res.end();
  conn.end();
});

var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function () {
  return rand() + rand(); // to make it longer
};

app.delete("/workforce/:id", async (req, res) => {
  console.log("TRIGGER");
  const id = req.params.id;
  const conn = await pool.getConnection();
  const queryResult = await conn.query(`DELETE FROM user WHERE id = ?`, [id]);
  res.end();
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

app.listen(3000);
