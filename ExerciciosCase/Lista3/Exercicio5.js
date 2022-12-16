var imprimeRomanos= function(num){
    let numeroRomano= {
      1:'I',
      4:'IV',
      5:'V',
      9:'IX',
      10:'X',
      40:'XL',
      50:'L',
      90:'XC',
      100:'C'
    }
  
    var romano='';
    var chaveDecimal=
  Object.keys(numeroRomano).reverse();
  
    chaveDecimal.forEach(chave=>{
      while(chave<=num){
        romano+=numeroRomano[chave];
        num-=chave;
      }
    });
    return romano
  }
  console.log(imprimeRomanos(92));
  