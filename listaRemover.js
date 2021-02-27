console.log("Lista em JS");
const listaDeDestinos = new Array(
  `Amazonas`,
  `Acre`,
  `Roraima`,
  `São Paulo`,
);
console.log(listaDeDestinos);
listaDeDestinos.splice(1,1); //remove a segunda posicao apenas eliminar um
console.log("Destinos Possiveis");
console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);