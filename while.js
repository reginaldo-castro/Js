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
while(contador < 4){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  }
  contador +=1;
}  
console.log("destin existe", destinoExiste);