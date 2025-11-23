const Sequelize = require('sequelize');
const db = new Sequelize('recruitorin', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
const user = require('./user')(db, Sequelize.DataTypes);
module.exports = {
    db,
    // labTests,
    user
}

