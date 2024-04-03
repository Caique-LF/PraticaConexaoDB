const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{


   try {

        const resultado = await pool.query('select * from empresas')

        return res.json(resultado.rows)
   } catch (error) {
      return res.status(400).json(error.message)
   }
})

app.listen(3000)