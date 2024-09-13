// variaveiss
let valor
let quantidade
let opcao = prompt('Bem-vindo ao posto Dodev thru, você deseja: ' + "\n1 - abastercer com gasolina; \n2 - abastecer com alcool; \n3 - calibrar os pneus" )

//switchcases
switch (opcao) {
    case "1":
        valor = parseInt(prompt("Digite o valor que deseja abastercer"))
        quantidade = valor * 5 
        console.log("Foram abastecidos " + quantidade + "L de gasolina ")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor que deseja abastecer"))
        quantidade = valor * 3
        console.log("Foram abastecido " + quantidade + "L de alcool ")
        break;
    default:
        console.log("pneus calibrados com sucesso")
        break;
            
}