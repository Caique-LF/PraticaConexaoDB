const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/:id', async(req, res)=>{
    const {id} = req.params

   try {

        const query = 'select * from empresas where id = $1 '
        const params = [id]

        const resultado = await pool.query(query, params)

        return res.json(resultado.rows)

   } catch (error) {
      return res.status(400).json(error.message)
   }
})

app.listen(3000)