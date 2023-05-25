const express = require('express')
const app = express();
const authRoutes =  require("./auth.routes");
const bannerRoutes = require('./banner.routes');
const brandRoutes = require('./brand.routes');

// /api/v1/
app.use("/auth", authRoutes);   // /api/v1/auth
app.use("/banner", bannerRoutes);
app.use("/brand", brandRoutes);

module.exports = app