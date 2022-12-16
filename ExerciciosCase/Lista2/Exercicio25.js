var imprimaNumeros= function(){

    let numero= [23,21,43];
  
      console.log(numero)
  
      let min = Math.min(...numero);
      let max = Math.max(...numero);
  
      console.log('Menor número: '+min);
      console.log('Maior número: '+max);
}
imprimaNumeros()