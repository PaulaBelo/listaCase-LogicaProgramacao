var imprimaNome= function(){
    let pessoa = {
      nome : 'Gabriel',
      genero : 'Masculino',
      idade : '27',
    }
    if(pessoa.genero === 'Masculino' && pessoa.idade >= 27){
      console.log(pessoa)
    }else{
      console.log("Usuário incorreto")
    }
   }
   imprimaNome()