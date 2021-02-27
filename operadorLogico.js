console.log("Condicionais");

const listaDeDestinos = new Array(
  `Amazonas`,
  `Acre`,
  `Roraima`,
  `São Paulo`,
);

const idadeComprador = 15;
console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1,1);
} else {
  console.log("nao pode vender");
}

console.log(listaDeDestinos);
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);