// CRIANDO VARIÁVEIS
let num1 = parseInt(prompt("Digite o primeiro número"));
let num2 = parseInt(prompt("Digite o segundo número"));
let operacao = prompt("Escolha a operação que deseja realizar: \n1 para adição\n2 para subtração\n3 para multiplicação\n4 para divisão");

// Iniciando Switch Case
switch (operacao) {
    case '1':
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case '2':
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case '3':
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    case '4':
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    default:
        console.log("Operação inválida. Escolha uma opção válida (1 a 4).");
}
