'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_order_customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item_order_customer.init({
    id: DataTypes.BIGINT,
    item_id: DataTypes.BIGINT,
    order_customer_id: DataTypes.BIGINT,
    amount: DataTypes.BIGINT,
    option: DataTypes.JSON,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    tableName: 'item_order_customers',
    modelName: 'Item_order_customer',
  });
  return Item_order_customer;
};