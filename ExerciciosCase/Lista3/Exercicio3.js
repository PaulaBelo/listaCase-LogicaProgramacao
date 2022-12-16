var imprimePalindrome= function(){
    let palavra = ("roma é amor");
    let palavraInvertida = "";
    let palindrome = "";
    palavra=palavra.replace(/ /g,'');
    
    for(let i = palavra.length - 1; i >= 0; i--){
      (palavra[i]=="") ? "" : palavraInvertida += palavra[i];
    }
    palindrome = (palavraInvertida.toLowerCase() === palavra.toLowerCase()) ? "É palindromo sim!:)" : "Não é palindromo!:("
    
    console.log("Palavra invertida: " + palavraInvertida);
    console.log(palindrome);
    
  }
  imprimePalindrome()