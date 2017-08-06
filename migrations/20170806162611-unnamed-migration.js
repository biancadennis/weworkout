'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return(queryInterface.createTable('users', {
      id: {
        type:          Sequelize.INTEGER,
        primaryKey:    true,
        autoIncrement: true,
        allowNull:     false
      },
      location: {
        type:          Sequelize.STRING,
        allowNull:     false
      },
      email: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      fitnesslevel: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      goals: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      username: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      password: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      name: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type:      Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type:      Sequelize.DATE,
        allowNull: false
      }
    }));
  },

  down: function(queryInterface, Sequelize) {
    return(queryInterface.dropTable('users'));
  }
};