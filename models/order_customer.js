'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_customer.init({
    id: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'order_customers',
    modelName: 'Order_customer',
  });
  return Order_customer;
};