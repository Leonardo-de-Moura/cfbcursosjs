const idades = [12, 15, 20, 25, 30, 35, 40];


const maioresDeVinte = idades.filter((value)=>{
	if(value > 10){
		return value
	} 
});
console.log(idades)	
console.log(maioresDeVinte)

const idades2 = [12, 15, 20, 25, 30, 35, 40];

const menores =  idades2.filter((value)=>{
	if (value<18){
		return value
	}
})
console.log(idades2)	
console.log(menores)