const Sequelize = require('sequelize');
// Free Tiny Turtle Plan on Elephant SQL
// FOR TESTING PURPOSES ONLY
// NEVER HARDCODE CREDENTAILS IN ENV
module.exports = new Sequelize('rfjcdbre', 'rfjcdbre', 'RPXKN1I-CJXZtPxJ9o5M9sj3meGXqbBD', {
  host: 'pellefant.db.elephantsql.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});