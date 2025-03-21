const {DataTypes} = require('sequelize');
const sequelize = require('../config/db_connection')

const User = sequelize.define('User', {
  use_id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,

  },
  use_name:{
    type: DataTypes.STRING(55),
    allowNull:false,

  },
  use_mail:{
    type: DataTypes.STRING(255),
    allowNull:false,

  }
},{
  tableName:'users',
  timestamps:false
})
module.exports = User;
