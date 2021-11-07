import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = express();
    app.use(cors());
    app.use(express.json());

    
    app.get('/usuario', async (req, resp) => {
        try {
            let usuario = await 
                db.infoc_tht_usuario.findAll({order: [['id_usuario', 'desc' ]] })
            resp.send(usuario);
        } catch(e){
            resp.send(e.toString())
        }
    });

    app.post('/usuario', async (req, resp) => {
        try {
            let { cartao, usuario, email, cpf, nascimento, senha } = req.body;
            
            let r = await db.infoc_tht_usuario.create({
                id_cartao: cartao,
                nm_usuario: usuario,
                ds_email: email,
                nr_cpf: cpf,
                dt_nascimento: nascimento,
                ds_senha: senha
            });
            resp.send(r);
    
        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    });


    app.get('/chat', async (req, resp) => {
        try {
            let chat = await 
                db.infoc_tct_chat.findAll()
            resp.send(chat);
        } catch(e){
            resp.send(e.toString())
        }
    });
    app.post('/cartao', async (req, resp) => {
        try {
            let { cartao, nome, validade, cvv, parcela } = req.body;
            
            let r = await db.infoc_tht_cartao.create({
                nr_cartao: cartao,
                nm_cartao: nome,
                nr_validade: validade,
                nr_cvv: cvv,
                nr_parcela: parcela
            });
            resp.send(r);
    
        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    });

    

    app.listen(process.env.PORT,
                x => console.log(`Server up at port ${process.env.PORT}`))