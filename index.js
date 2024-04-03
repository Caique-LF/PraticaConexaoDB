const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/:id', async(req, res)=>{
   
   try {

        // const query = `
        // select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as Funcionario
        // from empresas e 
        // join filiais f on e.id = f.empresa_id
        // join pessoas p on e.id = p.empresa_id;
        // `

        // const query = `
        // select e.id as empresaId, f.id as filialId, e.nome, f.pais
        // from empresas e 
        // left join filiais f on e.id = f.empresa_id;
        // `

        // const query = `
        // select e.id as empresaId, f.id as filialId, e.nome, f.pais
        // from empresas e 
        // right join filiais f on e.id = f.empresa_id;
        // `

        const query = `
        select e.id as empresaId, f.id as filialId, e.nome, f.pais
        from empresas e 
        full join filiais f on e.id = f.empresa_id;
        `

        const resultado = await pool.query(query)

        return res.json(resultado.rows)

   } catch (error) {
      return res.status(400).json(error.message)
   }
})

app.listen(3000)