const Sequelize = require('sequelize');
// const user = require('./user');
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


// const labTests = db.define('labTests', {
//     itemId: {
//         type: sequelize.STRING,
//         allowNull: false,
//         primaryKey: true,
//         field: 'itemId'
//     },
//     itemName: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'itemName'
//     },
//     type: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'type'
//     },
//     description: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'description'
//     },
//     fasting: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'fasting'
//     },
//     title: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'title'
//     },
//     meta: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'meta'
//     },
//     url: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'url',
//         unique: true
//     },
//     alias: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'alias'
//     },
//     testCount: {
//         type: sequelize.INTEGER,
//         allowNull: true,
//         field: 'testCount'
//     },
//     category: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'category'
//     },
//     precautions: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'precautions'
//     },
//     isActive: {
//         type: sequelize.BOOLEAN,
//         allowNull: true,
//         field: 'isActive'
//     },
//     testOverview: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'testOverview'
//     },
//     testPreparation: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'testPreparation'
//     },
//     testSample: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'testSample'
//     },
//     whenToGetTested: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'whenToGetTested'
//     },
//     testResultInterpretation: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'testResultInterpretation'
//     },
//     commonQuestions: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'commonQuestions'
//     },
//     expertAdvice: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'expertAdvice'
//     },
//     review: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'review'
//     },
//     relatedTests: {
//         type: sequelize.JSONB,
//         allowNull: true,
//         field: 'relatedTests'
//     },
//     child: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'child'
//     },
//     videoUrl: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'videoUrl'
//     },
//     imageUrl: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'imageUrl'
//     },
//     offlinePrices: {
//         type: sequelize.JSONB,
//         allowNull: true,
//         field: 'offlinePrices'
//     },
//     relCanonicalUrl: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'relCanonicalUrl'
//     },
//     disclaimer: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'disclaimer'
//     },
//     lang: {
//         type: sequelize.TEXT,
//         allowNull: true,
//         field: 'lang'
//     },
//     hId: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'hId'
//     },
//     thyroId: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'thyroId'
//     },
//     nirId: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'nirId'
//     },
//     Labadv_id: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'Labadv_id'
//     },
//     neu_id: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'neu_id'
//     },
//     mpid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'mpid'
//     },
//     srlid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'srlid'
//     },
//     tcovid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'tcovid'
//     },
//     surbanid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'surbanid'
//     },
//     lalid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'lalid'
//     },
//     visionid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'visionid'
//     },
//     humainid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'humainid'
//     },
//     lalnewid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'lalnewid'
//     },
//     i2hid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'i2hid'
//     },
//     medilabsid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'medilabsid'
//     },
//     izenid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'izenid'
//     },
//     bmsid: {
//         type: sequelize.STRING,
//         allowNull: true,
//         field: 'bmsid'
//     }
// });
const user = db.define('user', {
    id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    },
    mobile: {
        type: Sequelize.STRING,
        unique: true
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
}
);
// db.sync({
//     // force: true
//     alter : true
// })
module.exports = {
    db,
    // labTests,
    user
}
