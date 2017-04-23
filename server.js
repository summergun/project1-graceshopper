const path = require('path');
const db = require('./server/db');
const app = require('express')();
//const routes = require('./routes');

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

app.use('/', require('./routes'));

db.seed();