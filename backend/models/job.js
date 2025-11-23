module.exports = (sequelize, DataTypes) => {
    const job = sequelize.define('user', {
        id: {
            allowNull: false,
            // autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'users', // Optional: explicitly set table name
        timestamps: true, // Optional: adds createdAt and updatedAt fields
    }
    );

    return job;
};