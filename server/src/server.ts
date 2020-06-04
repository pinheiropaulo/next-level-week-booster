import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Paulo", "Ricardo", "Augusto"]);
});

app.listen(3333);
