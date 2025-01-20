const express = require('express');
const userRoutes = require('./routes/userRoutes');
const techstackRoutes = require("./routes/techstackRoutes");
const badgeRoutes = require('./routes/badgeRoutes');


const app = express();

app.use(express.json());
//routes
app.use('/v1/users', userRoutes);
app.use("/v1/techstack", techstackRoutes);
app.use('/v1/badges', badgeRoutes);
module.exports = app;
