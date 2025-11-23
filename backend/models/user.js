module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            allowNull: false,
            // autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.INTEGER,
            unique: true
        }
    }, {
        tableName: 'users', // Optional: explicitly set table name
        timestamps: true, // Optional: adds createdAt and updatedAt fields
    }
    );

    return user;
};