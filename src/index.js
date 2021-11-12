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
    
    app.post('/cadastro', async (req, resp) => {
        try {
            let cadastro = req.body;
    
            let t = await db.infoc_tht_cadastro.findOne(
                { 
                    where: { ds_email: cadastro.email, ds_senha: cadastro.senha, nr_celular: cadastro.celular, nm_nome: cadastro.nome }
                })
            if (t != null)
            return resp.send({ erro: 'Alguma dessas informações já está sendo utilizada' });
    
            let h = await db.infoc_tht_cadastro.create({
                ds_email: cadastro.email,
                ds_senha: cadastro.senha,
                nr_celular: cadastro.celular,
                nm_nome: cadastro.nome
            })
            resp.send(h);
        } catch (e) {
                resp.send({ erro: 'Ocorreu um erro!'})
        }
    })



//LOGIN

    app.post('/login', async (req, resp) => {
        //  
        let login = req.body;

        let t = await db.infoc_tht_cadastro.findOne(
            {
                where: {
                    ds_email: login.email,
                    ds_senha: login.senha
                }
            })

        if (t == null)
            return resp.send({ erro: 'Crendenciais Inválidas' });

        resp.send(200);
        // } catch (e) {
        //     resp.send({ erro: 'Ocorreu um erro!'})
        // }
    });


 //INSERIR LUGARES
    app.post('/inserirLugares', async (req, resp) => {
        try {
            let insert = req.body;

        // let t = await db.infoc_tht_lugares.findOne(
        //     { 
        //         where: {  }
        //     })
        // if (t != null)
        // return resp.send({ erro: 'Alguma dessas informações já está sendo utilizada' });

            let h = await db.infoc_tht_lugares.create({
                nm_lugar: insert.nome,
                ds_avaliacao: insert.avaliacao,
                ds_endereco: insert.endereco,
                ds_imagem: insert.imagem,
                ds_informacao: insert.informacao,
                ds_horario_fds: insert.horarioFds,
                ds_horario_dds: insert.horarioDds,
                ds_categoria: insert.categoria
            })
            resp.send(h);
        } catch (e) {
            resp.send({ erro: 'Ocorreu um erro' })
        }

    })


 //LUGARES
    app.get('', async (req, resp) => {
        
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