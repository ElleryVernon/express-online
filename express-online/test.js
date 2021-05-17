const express = require('express');

const app = express();
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const port = 3000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
	res.send(200, 'express start');
})

app.use('/admin', admin);
app.use('/contacts', contacts);


app.listen(port, () => {
	console.log(`server running on hostname: '${hostname}'\nserver litening on port: '${port}'`);
})