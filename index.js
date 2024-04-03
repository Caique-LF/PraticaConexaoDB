const express = require('express');
const {Client} = require('pg');

const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{
   const client = new Client({
     host : 'localhost',
     port : 5432,
     user : 'postgres',
     password : '123456',
     database : 'aula_conexao_node_pg'
   })

   try {
        await client.connect()

        const resultado = await client.query('select * from empresas')

        await client.end()

        return res.json(resultado)
   } catch (error) {
      return res.status(400).json(error.message)
   }
})

app.listen(3000)