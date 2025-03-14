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
const getAllUsers = async (req,res) => {
  try {
    let { page } = req.query;

    page = parseInt(page) || 1;

    const count = await User.count();

    const totalPages = 10;
    const limit = Math.ceil(count / totalPages);
    const offset = (page - 1) * limit;

    const users = await User.findAll({
        limit,
        offset
    });

    res.status(200).json({
        totalItems: count,
        totalPages,
        currentPage: page,
        pageSize: limit,
        data: users
    });
} catch (error) {
    res.status(500).json({ error: error.message });
}

};
const getUserById = async (req, res) => {
  try{
    const user = await User.findByPk(req.params.id);
    if(!user){
      return res.status(404).json({message:'usuario no encontrado'});
    }
    res.status(200).json(user)
  }catch(error){
    res.status(500).json({error: error.message});
  }
};
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
