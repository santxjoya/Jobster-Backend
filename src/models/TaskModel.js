const {DataTypes} = require('sequelize');
const sequelize = require('../config/db_connection')
const User = require('./UserModel')

const Task = sequelize.define('Task', {
  tas_id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,

  },
  tas_tittle:{
    type: DataTypes.STRING(255),
    allowNull:false

  },
  tas_description:{
    type: DataTypes.STRING(255),
  },
  tas_status:{
    type: DataTypes.TINYINT,

  },
  tas_duedate:{
    type: DataTypes.DATE,
  },
  use_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'use_id',
    },
  }

},{
  tableName:'tasks',
  timestamps:false
})
Task.belongsTo(User, { foreignKey: 'use_id' });
module.exports = Task;
