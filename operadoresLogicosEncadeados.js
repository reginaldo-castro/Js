console.log("Ifs Condicionais");

const listaDeDestinos = new Array(
  `Amazonas`,
  `Acre`,
  `Roraima`,
  `São Paulo`,
);

const idadeComprador = 15;
let estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada== true){
  console.log("Boa viagem...");
  listaDeDestinos.splice(1,1);
} else {
      console.log("Não é maior de idade e não pode vender");
    }

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
  console.log("Boa viagem");
}else {
  console.log("Você não pode embarcar");
}    
console.log(listaDeDestinos);
