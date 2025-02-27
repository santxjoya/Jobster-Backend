const User = require('../models/UserModel');
const {body, validatonResult}=require('express-validator');

const createUser = [
  body('use_name').trim().notEmpty().withMessage('El nombre es requerido.')
    .isLength({min: 2, max: 255}).withMessage('El nombre debe tener entre 2 a 255 caracteres')
    .matches(/^[a-zA-ZÁÉÍÓÚÑ\s]+$/).withMessage('El nombre solo puede contener letras.'),
  body('per_mail').trim().notEmpty().withMessage('El correo electrónico es requerido.')
    .isEmail().withMessage('El correo electrónico no es válido.').normalizeEmail(),
  async(req, res)=>{
    const errors = validatonResult(req);
    if (!errors.isEmpty()){
      const allErrors = errors.array().map(error => error.msg);
      return res.status(400).json({errors: allErrors});
    }
    try{
      const user = await User.create(req.body);
      res.status(201).json(user)
    }catch{
      res.status(400).json({ error: error.message });
    }
  }
];
const getAllUsers = [

];
const getUserById = [

];
const updateUser = [

];
const updateOneFieldUser = [

];
const deleteUser = [

];
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updateOneFieldUser,
  deleteUser
};
