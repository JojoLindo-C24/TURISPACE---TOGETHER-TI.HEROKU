import db from "./db.js";
import express, { raw } from "express";
import cors from "cors";
import Sequelize from 'sequelize';
import {EnvEmail} from '../email.js'

const app = express();
const { Op, col, fn } = Sequelize;
app.use(cors());
app.use(express.json());
    

function Enviar(numero, email){
EnvEmail(
    email,
    "Recuperação de Senha",
    `
      <h3> Recuperação de Senha </h3>
      <p> Você solicitou a recuperação de senha da sua conta. </p>
      <p> Entre com o código <b>${numero}</b> para prosseguir com a recuperação.
      `
  );

}
app.listen(process.env.PORT, (r) =>
  console.log(`API subiu na porta ${process.env.PORT}`)
);