const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Employee = require('./Employee');
const Role = require('./role');

class Department extends Model {}

Department.init(
    {
      id: {
        type: DataTypes.INTEGER
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