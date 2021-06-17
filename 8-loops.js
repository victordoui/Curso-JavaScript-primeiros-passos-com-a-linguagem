console.log(`\n Trabalhando com Loops`)

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
let temPassagemComprada = false;
const destino = "Salvador"


console.log("\n Destinos Possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador <3){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino Existe" )
        distinoExiste = true;
        break;
  }
  contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if( podeComprar  && destinoExiste){

    console.log("Boa viagem meu parceiro!!");
}else{

    console.log("Tivemos um erro, volte!");
}

for (let i = 0 ; i  <3; i++){
    if (listaDeDestinos[i] == destino){
        distinoExiste = true;
       
  }
  
}