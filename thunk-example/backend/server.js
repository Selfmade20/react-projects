const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

// Creating my environmental var for .env 
require('dotenv').config();

// Creating server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connecting to the Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
}
);

// Using this files in my backend
const computerRouter = require('./routes/computers');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

app.use('/computers', computerRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// Start my server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
