const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
  res.send('Hola mi server en express')
});

app.get('/nueva ruta', (req,res)=>{
  res.send('Hola mi server en express')
});

app.get('/task', (req,res)=>{
  res.json({
    name: 'task 1',
    date: '18/02/2025'
  })
});

app.listen(port,()=>{
  console.log("Escuchando en el puerto: " + port)
})
