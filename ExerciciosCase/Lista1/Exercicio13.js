var prestacaoAtraso = function(){
  let valorPrestacao= (500);
  let taxa= (5);
  let tempo= (10)
  let prestacao= valorPrestacao+(valorPrestacao*(taxa/100)*tempo);
    console.log('O valor em atraso é de:'+prestacao);
  
}
prestacaoAtraso()