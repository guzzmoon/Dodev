//variaveis iniciais
let nome = prompt("qual seu nome?");
let idade = parseInt(prompt("qual sua idade"));
let peso = (prompt("Qual seu peso?"));
let altura = (prompt("Qual sua altura?"));
 continua = true

let ano = (2024 - idade);
let IMC = Number(peso/(altura*altura));
continua = true


console.log("Olá" + nome+ "Você tem" +idade+ "anos,  e nasceu em "+ ano+ "tem"+ altura+ "de altura, pesa"+ peso+ "kg, seu IMC é"+ IMC+"kg/m2");