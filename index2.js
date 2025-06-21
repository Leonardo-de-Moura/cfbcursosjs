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
 const i=function(v1,v2){
	return v1+v2
  }
  console.log(i(10,5))