console.log("Sistema iniciado!");

let nome = "Seu nome";
let idade = 16;
let curso = "Informática";

document.getElementById("nome").textContent = nome;
document.getElementById("idade").textContent = idade;
document.getElementById("curso").textContent = curso;

console.log(nome);
console.log(idade);
console.log(curso);

let nota = 7.5;

// Estrutura condicional
if (nota >= 5) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

let alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];

// For muito mais simples e limpo
for (let aluno of alunos) {
    console.log(aluno);
}
