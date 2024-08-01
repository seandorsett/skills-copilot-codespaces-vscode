// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Importing comments data
const comments = require('./data/comments');