const { db } = require('./indes');
const sequelize = require('sequelize');
// const user = db.define('user', {
//     id: {
//         allowNull: false,
//         // autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING,
//         unique: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING
//     },
//     mobile: {
//         type: Sequelize.INTEGER,
//         unique: true
//     },
//     createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//     },
//     updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//     }
// }
// );

module.exports = {
    // user
    sequelize
};