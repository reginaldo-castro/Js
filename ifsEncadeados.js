console.log("Ifs Condicionais");

const listaDeDestinos = new Array(
  `Amazonas`,
  `Acre`,
  `Roraima`,
  `São Paulo`,
);

const idadeComprador = 15;
let estaAcompanhada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
  console.log("Comprador maior de idade");
  console.log(listaDeDestinos);
  listaDeDestinos.splice(1,1);
  console.log(listaDeDestinos);
} else if(estaAcompanhada){
      console.log("Comprador esta acompanhado");
      listaDeDestinos.splice(1,1);
      console.log(listaDeDestinos);
    }else {
      console.log("Não é maior de idade e não pode vender");
    }

