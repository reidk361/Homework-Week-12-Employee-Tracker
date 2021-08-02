const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Employee = require('./employee');
const Role = require('./role');

class Department extends Model {}

Department.init(
    {
      id: {
        type: DataTypes.INTEGER,
        auto_increment: true,
        primary_key: true
      },
      name: {
        type: DataTypes.STRING(30)
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'department'
    }
);

module.exports = Department;