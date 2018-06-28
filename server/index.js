const express = require('express');
const bodyParser = require('body-parser');
const mC = require('./menu_controller');
const cC = require('./customer-controller');

const app = express();

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../public/build'));

app.get('/api/menu', mC.read);
app.post('/api/menu', mC.create);
app.put('/api/menu/:id', mC.update);
app.delete('/api/menu/:id',mC.delete);

const port= 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`)});