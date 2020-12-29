const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.String,
      allowNull: false,
    },
    email: {
      type: Sequelize.String,
      unique: true,
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.String,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
