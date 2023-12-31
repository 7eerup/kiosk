'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Option.init({
    id: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    extra_price: DataTypes.BIGINT,
    shot_price: DataTypes.BIGINT,
    hot: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'options',
    modelName: 'Option',
  });
  return Option;
};