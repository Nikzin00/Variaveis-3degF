let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Nikolas Matheus Viana de Quevedo";

console.log("Meu nome é " + nomeCompleto + "Nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos")

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agência de viagens Los Angeles, Nova York, Alemanha, Londres, Tokio
const listaDeDestinos = new Array(
  "Los Angeles",
  "Nova York",
  "Alemanha",
  "Londres",
  "Tokio"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("São Paulo");
listaDeDestinos.push("Gramados");
listaDeDestinos.push("Berlin");
console.log(listaDeDestinos);