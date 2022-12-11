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
});

app.post("/workforce", async (req, res) => {
  const workforce = req.body;
  const conn = await pool.getConnection();
  const queryResult = await conn.query(
    `INSERT INTO user (firstname, lastname, username, password) value (?, ?,?,?)`,
    [dish.firstname, dish.lastname, dish.username, dish.password]
  );
  console.log(queryResult); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  res.end();
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

// app.delete("/dish/:name", (req, res) => {
//   const name = req.params.name;
//   const index = dishes.findIndex((p) => p.name === name);
//   if (index != -1) {
//     dishes.splice(index, 1);
//   } else {
//     res.status(400);
//   }
//   res.end();
// });

app.listen(3000);
