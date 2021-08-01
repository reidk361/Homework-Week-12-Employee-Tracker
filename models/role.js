const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./department');

class Role extends Model {}

Role.init(
    {
      id: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING(30)
      },
      salary: {
        type: DataTypes.DECIMAL,
      },  
      department_id: {
        type: DataTypes.INTEGER,
        references: 'department',
        referencesKey: 'id'
      }, 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'role'
    }
);

Role.hasMany(Department);

module.exports = Role;