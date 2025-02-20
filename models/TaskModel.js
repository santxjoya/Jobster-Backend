const {DataTypes} = require('sequelize');
const sequelize = require('../config/db_connection')

const Task = sequelize.define('Task', {
  tas_id:{
    type: DataTypes.INTEGER,
    allowNull:false
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
  tablename:'tasks',
  timestamps:false
})
module.exports = Task;
