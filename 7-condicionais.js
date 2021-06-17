console.log(`Trabalhando com Condicionais`)

const nome = "Victor";
const sobreNome = "Souza";
const idade = 27;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(0, 2);  //(((  REMOVENDO ITEM  )))
} else if (estaAcompanhada == true) {
    console.log("Comprador esta acompanhado");
    listaDeDestinos.splice(1, 1);

} else {
    console.log("Não é maior de idade e não esta acompanhada não posso vender");
}
 */

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Obg por comprar, tenha uma boa viagem");
    listaDeDestinos.splice(2, 2);  //(((  REMOVENDO ITEM  )))
} else {
    console.log("Não tem idade e não esta acompanhado");
}

console.log("Embarque:  \n\n ")

if(idadeComprador >= 18 && temPassagemComprada ==true){
 console.log(" Boa Viagem malucoo!!!")

}else {
    console.log("POLICIA PEGA ELE!!")
}
console.log(listaDeDestinos);
//console.log(listaDeDestinos[2] +nome  + sobreNome + idade);







