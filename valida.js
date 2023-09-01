validaLogin = () => {
    event.defaultPrevented();
    const elementPassword = document.getElementById('password');
    const password = elementPassword.value;
    
    
    const validaSenhaLetra = /[a-zA-Z]/.test(password);
    const validaSenhaNumero = /[0-9]/.test(password);
    const validaSenhaCaractere = /[!@#$%&*_-={};//.,<>?]/.test(password);

    const elementErro = document.getElementById(mensagem-erro-password);

    if(validaSenhaLetra && validaSenhaNumero && validaSenhaCaractere){
        alert('senha válida')

    }else{
        elementErro.innerText = 'A senha deve conter letras, números e caracteres especial';
        elementErro.display = 'block';                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        elementPassword.style.borderColor = 'red';

    }
    limparPassword = (elemento) => {
        elemento.value = '';
        elemento.style.borderColor = '#CCC';

        
    }
    
}
 function validaLogin(){


 }