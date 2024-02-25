import { Router } from "express";

const alunoController = require("../controller/alunoController");
const router = Router();

router.post("/novoAluno", alunoController.novoAluno);

router.get("/", (req, res) => {
  res.send("opa");
});

export default router;
