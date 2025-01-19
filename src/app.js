const express = require('express');
const userRoutes = require('./routes/userRoutes');
const badgeRoutes = require('./routes/badgeRoutes');

const app = express();

app.use(express.json());
app.use('/v1/users', userRoutes);
app.use('/v1/badges', badgeRoutes);
module.exports = app;
