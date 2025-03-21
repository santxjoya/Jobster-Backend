const express = require('express');
const sequelize = require('./src/config/db_connection');
const userRouter = require('./src/routes/users');
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('Hola mi server en express')
});

app.get('/nueva ruta', (req,res)=>{
  res.send('Hola mi server en express')
});

app.use('/api',userRouter)

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error al sincronizar la base de datos', err);
});
