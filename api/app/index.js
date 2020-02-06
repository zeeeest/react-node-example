const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/route');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen('4000');
