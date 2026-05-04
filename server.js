const express = require("express");

const app = express();

app.get("/", (req, res)=>{
res.send(`
<script>
let nome = prompt("Digite seu nome: ");

if(!nome){
console.log("nome invalido! ");
}

    let idade = Number(prompt("Digite sua idade"));

if(!idade){
    console.log("Idade invalida!");
}

let estudante = true;

console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(estudante));
</script>
`)

});

app.listen(3000,()=> {
console.log("Servidor rodando em http://localhost:3000&quot");
});
