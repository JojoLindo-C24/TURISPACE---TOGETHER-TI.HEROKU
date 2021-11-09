// ----------------FATLAM as TABELAS:
// pacote;
// compra:
//  arrumar a LUGAR-------------------------



import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = express();
    app.use(cors());
    app.use(express.json());




//CADASTRO
    app.get('/cadastro', async (req, resp) => {
        try {
            let cadastro = await
                db.infoc_tht_cadastro.findAll({ order: [['id_cadastro', 'desc' ]] });
            resp.send(cadastro);
        } catch(e){
            resp.send(e.toString())
        }
    });

    app.post ('/cadastro', async(req, resp) =>{
        try{
            let {email, senha, celular, nome} =req.body;

            let cadastro = await db.infoc_tht_cadastro.create({
                ds_email: email,
                ds_senha: senha,
                nr_celular: celular,
                nm_nome: nome
            });
            resp.send(cadastro);


            // {
            //     "email":"Julia@gmail.com",
            //     "senha": "00893245",
            //     "celular":"1190693917",
            //     "nome": "Julia"
            // }


        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    })



//LOGIN
    app.get('/login', async (req, resp) => {
        try {
            let login = await
                db.infoc_tht_login.findAll({ order: [['id_login', 'desc' ]] });
            resp.send(login);
        } catch(e){
            resp.send(e.toString())
        }
    });


    app.post ('/login', async(req, resp) =>{
        try{
            let {cadastro, email, senha} =req.body;

            let login = await db.infoc_tht_login.create({
                id_cadastro:cadastro,
                ds_email: email,
                ds_senha: senha
            });
            resp.send(login);
            // {
            //     "cadastro": "3",
            //     "email": "Julia@gmail.com",
            //     "senha": "Julia"
            // }

        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    })



 //USUARIO
    app.get('/usuario', async (req, resp) => {
        try {
            let usuario = await
                db.infoc_tht_usuario.findAll({ order: [['id_usuario', 'desc' ]] });
            resp.send(usuario);
        } catch(e){
            resp.send(e.toString())
        }
    });

    app.post('/usuario', async (req, resp) => {
        try {
            let { cartao, login,  usuario, email, celular, nascimento, senha } = req.body;

            let r = await db.infoc_tht_usuario.create({
                id_cartao: cartao,
                id_login:login,
                nm_usuario: usuario,
                ds_email: email,
                nr_celular: celular,
                dt_nascimento: nascimento,
                ds_senha: senha
            });
            resp.send(r);

            // {
            //     "cartao" : "",
            //     "login": "",
            //     " usuario": "",
            //      "email": "",
            //      "celular": "",
            //      "nascimento": "",
            //      "senha": ""
            //  }


        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    });



//CHAT

    app.get('/chat', async (req, resp) => {
        try {
            let chat = await
                db.infoc_tht_chat.findAll({ order: [['id_chat', 'desc' ]] });

            resp.send(chat);
        } catch(e){
            resp.send(e.toString())
        }
    });
    app.post ('/chat', async(req, resp) =>{
        try{
            let { nome, mensagem, data} =req.body;

            let r = await db.infoc_tht_chat.create({
                nm_nome: nome,
                ds_mensagem: mensagem,
                dt_mensagem: data
            });
            resp.send(r);

        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    })



 //LUGAR 
        app.get('/lugar', async (req, resp) => {
            try {
                let lugar = await
                    db.infoc_tht_lugar.findAll({ order: [['id_lugar', 'desc' ]] });

                resp.send(lugar);
            } catch(e){
                resp.send(e.toString())
            }
        });


        app.post('/lugar', async (req, resp) => {
            try {
                let { lugar, avaliacao, endereco, img, informacao, data, horario } = req.body;

                let r = await db.infoc_tht_lugar.create({
                    nm_lugar:lugar,
	                ds_avaliacao: avaliacao,
	                ds_endereco: endereco,
	                ds_imagem:img,
	                ds_informacao: informacao,
	                ds_dias: data,
	                dt_horario: horario
                });
                resp.send(r);

            //     {
            //         "lugar": "Shopping Jk Iguatemi",
            //         "avaliacao": "4.5",
            //         "endereco": "Av. Pres. Juscelino Kubitschek, 2041 - Vila Olímpia, São Paulo - SP, 04543-011",
            //         "img": "+",
            //         "informacao":	"Shopping sofisticado com lojas de varejo sofisticadas e famosas, diversos restaurantes e um cinema.",
            //         "data": "SEG Á SAB",
            //         "horario": ""
            //    }



            } catch (e) {
                resp.send({ erro: e.toString() });
            }
        });


//CARTÃO
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