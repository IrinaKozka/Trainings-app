import express from "express";
import cors from "cors";

import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp("postgres://postgres:postgres@localhost:5432/postgres");

import bcrypt from "bcrypt";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});



app.post("/users", (req, res) => {
  let body = req.body;

  console.log("POST /users:", body);

  //hashowanie z solą

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(body.password, salt, function (err, hash) {
      body.password = hash;

      db.query(
        "insert into users (first_name, last_name, email, password) values($1, $2, $3, $4) returning *",

        [body.firstName, body.lastName, body.email, body.password]
      )
        .then((dbResponse) => {
          console.log("DBResponse:", dbResponse);

          res.send(dbResponse);
        })

        .catch((error) => {
          console.log("ERROR:", error);

          res.sendStatus(500);
        });
    });
  });
});

app.post("/email", (req, res) => {
  let password = req.body.password;

  let email = req.body.email;

  db.one("select password from users where email = $1", [email])

    .then((dbResponse) => {
      console.log("Data:");

      bcrypt.compare(password, dbResponse.password, function (err, result) {
        if (result) {
          console.log("OK");

          res.sendStatus(200);
        } else {
          console.log("Wrong!");

          res.sendStatus(401);
        }
      });
    })
    .catch((error) => {
      console.log("ERROR: ", error);

      res.sendStatus(500);
    });
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;

  const parseId = parseInt(id);
  if (isNaN(parseId)) return res.status(500).send({ error: "Incorrect id!" });

  const obj = courses.find((el) => el.id === parseId);

  if (!obj) return res.status(403).send({ error: "Not foun!" });

  res.send(obj);
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users")
    .then((dbResponse) => {
      res.send(dbResponse);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.sendStatus(500);
    });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  db.one("SELECT * FROM users WHERE id = $1", [userId])
    .then((dbResponse) => {
      res.send(dbResponse);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.sendStatus(500);
    });
});


app.post("/courses", (req, res) => {
  let body = req.body;

  console.log("POST /courses:", body);

      db.query(
        "insert into courses (title, image_url, date, language, location, start_time, finish_time, difficulty_level, trainer_id) values($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",

        [body.title, body.image_url, body.date, body.language, body.location, body.start_time, body.finish_time, body.difficulty_level, body.trainer_id]
      )
        .then((dbResponse) => {
          console.log("DBResponse:", dbResponse);

          res.send(dbResponse);
        })

        .catch((error) => {
          console.log("ERROR:", error);

          res.sendStatus(500);
        });
    });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
