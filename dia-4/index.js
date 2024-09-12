// codigo do lachin
const temFome = prompt("Voce esta com fome? (sim/não)")
const temDinheiro = prompt("Voçê tem dinheiro? (sim/não)")
const restauranteAberto = prompt("Orestaurante esta aberto? (sim/não)")

if(temFome === "não" || temDinheiro == "não") {
    console.log("Hoje a janta sera em casa");
}else if (temDinheiro === "sim" && restauranteAberto === "sim"){
    console.log("Hoje o jantar sera no seu restaurante preferido!");
}else {
    console.log("Peça um delivery");
}
