'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_item.init({
    id: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    item_id: DataTypes.BIGINT,
    amount: DataTypes.BIGINT,
    state: DataTypes.BIGINT
  }, {
    sequelize,
    tableName: 'order_items',
    modelName: 'Order_item',
  });
  return Order_item;
};