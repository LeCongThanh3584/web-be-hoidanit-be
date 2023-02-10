// const express = require('express');
import express from 'express';
import configViewEngine from './config/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 2601;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});