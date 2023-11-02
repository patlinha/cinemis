const DatabaseConnection = require('../database');
const Sequelize = require('sequelize');


const User = DatabaseConnection.databaseConnection.define('user', {
        id: {
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        username: {
            type: Sequelize.STRING, allowNull: false
        },
        password: {
            type: Sequelize.STRING, allowNull: false
        }
    },
    {
        tableName: 'user',
        timestamps: false
    }
);

const Filme = DatabaseConnection.databaseConnection.define('filme', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.TEXT
        },
        idade: {
            type: Sequelize.INTEGER
        },
        ano: {
            type: Sequelize.INTEGER
        },
        direcao: {
            type: Sequelize.TEXT
        },
        pais: {
            type: Sequelize.TEXT
        },
        legenda: {
            type: Sequelize.TEXT
        },
        cor: {
            type: Sequelize.TEXT
        },
        curadoria: {
            type: Sequelize.TEXT
        },
        ciclo: {
            type: Sequelize.TEXT
        },
        sala: {
            type: Sequelize.TEXT
        },
        time: {
            type: Sequelize.DATE, allowNull: false
        },
    },
    {
        tableName: 'filme',
        timestamps: false
    }
);

const Models = {};
Models.User = User;
Models.Filme = Filme;

module.exports = Models;