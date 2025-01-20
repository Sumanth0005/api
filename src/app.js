const express = require('express');
const userRoutes = require('./routes/userRoutes');
const techstackRoutes = require("./routes/techstackRoutes");
const app = express();

app.use(express.json());
//routes
app.use('/v1/users', userRoutes);
app.use("/v1/techstack", techstackRoutes);
module.exports = app;
