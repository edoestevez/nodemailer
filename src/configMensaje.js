const nodemailer = require('nodemailer');

module.exports = (contacto) => {
  var transporter = nodemailer.createTransport({
    host: 'eris.ignitionserver.net',
    port: 26,
    secure: false, // verdadero para 465, falso para otros puertos
    auth: {
      user: 'condolencias_e@funeralesraulflores.com', // email
      pass: 'ECapilla01@' // constraseña
    }
  });

  const mailOptions = {
        from: `"Mensaje De Prueba" <condolencias_e@funeralesraulflores.com>`, // De quien va enviado
        to: 'condolencias_e@funeralesraulflores.com', // Para
        subject: 'Mensaje De La Pagina web FRF', // Asunto
        text: 'Pagina web', // Campo no obligatorio
        html: ` 
            <strong>Nombre:</strong> ${contacto.nombre} <br/>
            <strong>E-mail:</strong> ${contacto.email}  <br/>
            <strong>Mensaje:</strong> ${contacto.mensaje} 
        ` // html body
  };

  transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});
  
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
