const cors = require('cors');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const techstackRoutes = require("./routes/techstackRoutes");
const badgeRoutes = require('./routes/badgeRoutes');
const otpRoutes = require('./routes/otpRoutes');

const app = express();


app.use(express.json());
app.use(cors());
//routes
app.use('/v1/users', userRoutes);
app.use("/v1/techstack", techstackRoutes);
app.use('/v1/badges', badgeRoutes);
app.use('/v1/otp', otpRoutes);


module.exports = app;
