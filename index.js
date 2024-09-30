const prompt = require('prompt-sync');
const entrada = prompt ();


let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Nikolas Matheus Viana de Quevedo";

console.log("Meu nome é " + nomeCompleto + " Nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos")

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agência de viagens Los Angeles, Nova York, Alemanha, Londres, Tokio
const listaDeDestinos = new Array(
  " Grécia",    
  " Cacun",
  " Luxemburgo",
  " Hungria",
  " Tokyo",
  " Nova York",
  " Alemanha",
  " Maldivas",
  );

var nomeComprador = entrada ("Digite seu nome:");
var idadeComprador = entrada ("Qual a sua idade?");

const loginCerto = "nikolas";
const senhaCerto = "1234";

var login = entrada ("Digite seu login:");
var senha = entrada ("Digite sua senha:");

while(login != loginCerto && senha != senhaCerto){
  console.log("Login ou senha incorretos");
  login = entrada( "Digite seu login:");
  senha = entrada ("Digite sua senha:");
}

if(idadeComprador  >=18) {
   console.log(" Ola " + nomeComprador);
  console.log("Comprador maior de idade");

  var contador = 0;
  while(contador <9 ){
    console.log(listaDeDestinos[contador]);
    contador++;

  }
  var destino = entrada("Digite o número que corresponde ao destino selecinado")
  console.log("destino selecionado foi: ${listaDeDestinos[destino]}}");

} else {
  console.log(" Ola " + nomeComprador);
  console.log(" Comprador menor de idade ");
  console.log(" Infelizmente você não pode comprar a passagem ");

}