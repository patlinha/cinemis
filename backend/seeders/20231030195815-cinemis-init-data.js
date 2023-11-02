'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'Patricia',
        password: 'password1',
      },
      {
        id: 2,
        username: 'Daniel',
        password: 'password2',
      },
      // Add more user objects as needed
    ], {});

    await queryInterface.bulkInsert('filme', [
      {
        id: 1,
        nome: "A PASSAGEIRA",
        idade: 16,
        ano: 1963,
        direcao: "Andrzej Munk",
        pais: "Polonia",
        legenda: "PT",
        cor: "PB",
        curadoria: "Hamilton Rosa Jr.",
        ciclo: "Pérolas do Cinema",
        sala: "13A",
        time: "2023-10-30 19:30:00"
      },
      {
        id: 2,
        nome: "A PASSAGEIRA 2",
        idade: 16,
        ano: 1963,
        direcao: "Andrzej Munk",
        pais: "Polonia",
        legenda: "PT",
        cor: "PB",
        curadoria: "Hamilton Rosa Jr.",
        ciclo: "Pérolas do Cinema",
        sala: "13A",
        time: "2023-10-29 19:30:00"
      },
      {
        id: 3,
        nome: "A PASSAGEIRA 3",
        idade: 12,
        ano: 2015,
        direcao: "Andrzej Munk",
        pais: "Polonia",
        legenda: "PT",
        cor: "PB",
        curadoria: "Hamilton Rosa Jr.",
        ciclo: "Pérolas do Cinema",
        sala: "13A",
        time: "2024-10-30 19:30:00"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('filme', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
