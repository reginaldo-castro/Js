console.log("Loops While");

const listaDeDestinos = new Array(
  `Amazonas`,
  `Acre`,
  `Roraima`,
  `São Paulo`,
);

const idadeComprador = 18;
let estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Amazonas";

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18  || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
for(let i=0; i< 4; i++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
  }
}  
console.log("destin existe", destinoExiste);