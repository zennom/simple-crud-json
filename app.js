const express = require("express");
const app = express();
app.use(express.json());

const produtos =[{ nome:"Celular", preco: 1500, id:1 }]

//CREATE
app.post('/produtos', (req, res) => {
    const { nome, preco, id } = req.body;
    produtos.push({ nome, preco, id});
    res.json(produtos);
});

//READ
app.get('/produtos', (req,res) =>{
    res.json(produtos);
});

//UPDATE
app.put("/produtos/:index", (req, res) => {
    const { index } = req.params;
    const { nome, preco, id } = req.body;
    produtos[index] = ({ nome, preco, id});
    
    res.json(produtos)
});

//DELETE
app.delete('/produtos/:index', (req, res) => {
    const { index } = req.params;
    produtos.splice(index, 1);
    
    return res.json({ message: "Delete complete" });
});



// SERVIDOR RODANDO
app.listen(3000,() =>
    console.log("Server running...")
);