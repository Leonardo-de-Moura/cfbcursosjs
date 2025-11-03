const idades = [12, 15, 20, 25, 30, 35, 40];

const filtro = (valor) => {
  if(valor < 19) {
	return valor;
  }
};
const maioresDeVinte = idades.filter(filtro);
console.log(idades)	
console.log(maioresDeVinte)
