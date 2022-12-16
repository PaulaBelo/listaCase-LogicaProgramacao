var imprimeRomanos= function(){
    var numeral= [1,4,5,9,10,40,50,90,100];
    var romano= ['I','IV','V','IX','X','XL','L','XC','C'];
    var num= (10);
    var saida= ''
  
  while(num>0){
    for(i=numeral.length;i>0;i--){
      if(num-numeral[i-1]>=0){
        num=num-numeral[i-1]
        saida+=romano[i-1]
            break;
  }
    }
      }
    console.log(saida)
  }
  imprimeRomanos()