const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
    title: Sequelize.STRING,
    price: Sequelize.DECIMAL(2),
    description: Sequelize.STRING,
    category: Sequelize.ENUM('shirt','jacket','watches','bags'),
    image: Sequelize.STRING
  });


module.exports = {
  db: sequelize,
  Item
};
