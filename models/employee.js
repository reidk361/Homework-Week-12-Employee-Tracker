const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./department');
const Role = require('./role');

class Employee extends Model {}

Employee.init(
    {
      id: {
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING(30)
      },
      last_name: {
        type: DataTypes.STRING(30)
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: 'role',
        referencesKey: 'id'
      },  
      manager_id: {
        type: DataTypes.INTEGER,
        references: 'employee',
        referencesKey: 'id'
      }, 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'employee'
    }
);

Employee.hasMany(Role);

module.exports = Employee;