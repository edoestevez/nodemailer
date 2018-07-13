const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/contactos', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'), () => {
  console.log('Servidor corriendo')
});