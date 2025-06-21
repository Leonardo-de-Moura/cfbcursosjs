//funcao normal
function soma(n1=0,n2=0){
	return n1 +n2
}
//console.log(soma(10,5))

//funçao com parametros rest
 function SomaRest(...values){

	let res=0
	for (let v of values) {
		res+=v
	}//abordagem for of
	return res
 }
 //console.log(SomaRest(10,5,4,5,56,7,8,9,99,1))

 //funçoes anonimas
 const i=function(...values){
	let res =0
	for (const v of values) {
		res+=v
	}
	return res
  }
  console.log(i(10,5,2))
const f= new Function("v1", "v2", "return v1+v2") //funçao construtor anonima
  
console.log(f(10,5,2))

//arrow functions/lambda functions
const r=(...values)=>{
	let res =0
	for (const t of values) {
		res+=t
	}
	return res
}
console.log(r(1,2,3,4,5,6,7,8,9,1))

//funçoes aninhadas
const soma1 = (...values)=>{
	const somar = val=>{
		let res = 0
		for(v of val)
			res+=v
		
		return res
	}
	return somar(values)
}
console.log(soma1(1,2,3))

// //funcoes geradoras
//  function* cores(){
// 	yield 'vermelho'
// 	yield 'azul'
// 	yield 'amarelo'
//  }
//  const itc= cores()
// console.log(itc.next().value) 
// console.log(itc.next().value)
// console.log(itc.next().value)
function* perguntas(){
	const nome = yield 'qual seu nome?'
	const esporte = yield 'qual seu esporte?'
	const idade = yield 'qual sua idade?'
	return "seu nome e "+ nome + ' seu esporte e '+ esporte + ' sua idade e '+idade
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('bruno').value)
console.log(itp.next('judo').value)
console.log(itp.next('34 anos').value)

function* contador(){
	let i =0
	while(true){
		yield i++ 
	}
}
const itc = contador()
for (let index = 0; index < 100; index++) {
	console.log(itc.next().value)
}