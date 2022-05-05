'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('enderecos', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },
       cep: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       logradouro: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       numero: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      municipio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       update_at: {
         type: Sequelize.DATE,
         allowNull: false,
       }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enderecos');
  }
};