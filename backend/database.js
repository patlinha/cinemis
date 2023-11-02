const databaseConfig = require('config').database.dbConfig;
const Sequelize = require('sequelize');

class DatabaseConnection {

    constructor() {
        this._database = new Sequelize(databaseConfig.dbName, databaseConfig.user, databaseConfig.password, {
            host: databaseConfig.host,
            dialect: 'mysql',
            pool: {max: databaseConfig.connectionLimit},
            operatorsAliases: false
        });
    }

    get databaseConnection() {
        return this._database;
    }
}

module.exports = new DatabaseConnection();
