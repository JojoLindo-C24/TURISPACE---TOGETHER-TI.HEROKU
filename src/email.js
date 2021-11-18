
import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'turispacesp@gmail.com', 
    pass: 'incorreta',
  },
});


async function enviarEmail(para, assunto, mensagem) {
  const r = await sender.sendMail({
    from: '"RECUPERAÇÃO DE SENHA" <turuipacesp@gemail.com>',
    to: para, 
    subject: assunto,
    html: mensagem
  })
  return r;
}


export default enviarEmail;