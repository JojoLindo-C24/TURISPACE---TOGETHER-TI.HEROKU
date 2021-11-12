import db from './db.js';
import express from 'express';
import cors from 'cors';

const app = express();
    app.use(cors());
    app.use(express.json());

//     app.post('/cadastro', async (req, resp) => {
//     try {
//         let cadastro = req.body;

//         let t = await db.infoc_tht_cadastro.findOne(
//             { 
//                 where: { ds_email: cadastro.email, ds_senha: cadastro.senha, nr_celular: cadastro.celular, nm_nome: cadastro.nome }
//             })
//         if (t != null)
//         return resp.send({ erro: 'Alguma dessas informações já está sendo utilizada' });

//         let h = await db.infoc_tht_cadastro.create({
//             ds_email: cadastro.email,
//             ds_senha: cadastro.senha,
//             nr_celular: cadastro.celular,
//             nm_nome: cadastro.nome
//         })
//         resp.send(h);
//     } catch (e) {
//             resp.send({ erro: 'Ocorru um erro!'})
//     }
// })

// app.post('/login', async (req, resp) => {
//     let login = req.body;

//     let t = await db.infoc_tht_cadastro.findOne(
//         {
//             where: {
//                 ds_email: login.email,
//                 ds_senha: login.senha
//             }
//         })

//     if (t == null)
//         return resp.send({ erro: 'Crendenciais Inválidas' });

//     resp.send(200);
// });