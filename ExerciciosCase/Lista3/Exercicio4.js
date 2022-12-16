var triangulo= function(){
    lado1= (13);
    lado2= (4);
    lado3= (3);
    return[lado1,lado2,lado3]
  }
  
  
  var validarTriangulo=function(lado1,lado2,lado3){
    
    if((lado1+lado2>=lado3)&&(lado3+lado2>=lado1)&&(lado1+lado3>=lado2)){//criar mais uma variavel/condição para dois lados iguais.
      return (true);
    }else{
      return (false);
    }
  }
  
  
  var tipoTriangulo= function(lado1,lado2,lado3){
    
    if(lado1===lado2&&lado2===lado3&&lado1===lado3){
      return ('É um Triângulo Equilátero!');
    }else if (lado1===lado2||lado2===lado3||lado1===lado3){
      return ('É um Triângulo Isósceles!');
    }else{
      return ('É um Triângulo Escaleno!');
    }
    }
    
  
  var calcularPerimetro=function(lado1,lado2,lado3){
    var perimetro=(lado1+lado2+lado3);
  return ('O perimetro é:'+perimetro);
}

var calcularArea= function(lado1,lado2,lado3,nome){
  
  let area
  switch(nome){
        case 'Equilátero': 
					area = (lado1**2)*(Math.sqrt(3))/4
				  return area
          break;
				case 'Escaleno': 
					let p = perimetro/2
					area = Math.sqrt(p*(p-lado1)*(p-lado2)*(p-lado3))
						return area
          break;
				default :
        case 'Isosceles':
					let h
						if(lado1===lado2){
							h = Math.sqrt(lado1**2-(lado3**2)/4)
							area = (lado3*h)/2
						}else if(lado1===lado3){
							h = Math.sqrt(lado1**2-(lado2**2)/4)
							area = (b*h)/2
						}else{
							h = Math.sqrt(lado3**2-(lado1**2)/4)
							area = (lado1*h)/2
						}
      return area
      break;
}
}
var triangulo = {
      lados:[lado1,lado2,lado3]=triangulo(),
			validacao: validarTriangulo(lado1,lado2,lado3),
			nome: tipoTriangulo(lado1,lado2,lado3),
			perimetro: calcularPerimetro(lado1,lado2,lado3),
			area: calcularArea(lado1,lado2,lado3,this.nome).toFixed(2)
}
if (triangulo.validacao&&triangulo.lados[0]!==0){
  console.log(triangulo)
}else{
  console.log('Não é um triângulo')
}
		

    