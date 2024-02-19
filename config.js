const Sequelize = require('sequelize');
const config = new Sequelize("capstone", "root", "5299", {dialect:'mariadb'});

module.exports = config;