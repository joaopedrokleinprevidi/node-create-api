import express from "express";
import router from "./routes/router.js";

const app = express();
app.use(router);
app.use(express.json()); //configurando express para receber JSON e retornar JSON

app.listen("8080", () => {
  console.log("Servidor rodando na porta http://localhost:8080");
});

// crud - create - read - update - delete
