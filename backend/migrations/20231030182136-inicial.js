'use strict';

const {TEXT, DATE} = require("sequelize/lib/data-types");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('user', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.TEXT
        },
        password: {
          type: Sequelize.TEXT
        },
      }, {transaction: transaction});

      await queryInterface.createTable('filme', {
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
      }, {transaction: transaction});

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('user');
      await queryInterface.dropTable('filme');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
