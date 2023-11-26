const { Sequelize } = require("sequelize");
require('dotenv').config();

const sq = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    retry : {
      match : [ Sequelize.ConnectionError,
        Sequelize.ConnectionTimedOutError,
        Sequelize.TimeoutError,
        /Deadlock/i,
        'SQLITE_BUSY',
        'ER_FK_CANNOT_OPEN_PARENT'
      ],
      max :5
    },
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 300,
      min: 0,
      idle: 200000,
      acquire: 1000000,
    },
    timezone: '+07:00'
  })

module.exports = sq