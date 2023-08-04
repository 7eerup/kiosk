'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    id: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    name: DataTypes.STRING,
    option_id: DataTypes.BIGINT,
    price: DataTypes.BIGINT,
    type: DataTypes.ENUM,
    amount: DataTypes.BIGINT
  }, {
    sequelize,
    tableName: 'items',
    modelName: 'Item',
  });
  return Item;
};