function telacadastro() {
    let usuario = document.getElementById("usuario")
    let CPF = document.getElementById("CPF")
    

    if (usuario == "" ){
        alert("Preencha todos os campos!").value;
        return false;
    } else{
    alert(
        "Cadastro realizado com sucesso!");
        return true;
}
}

const input = document.getElementById("CPF")

input.addEventListener('keypress' , () => {
    let inputlenght = input.value.length

    if(inputlenght === 3 || inputlenght === 7){
        input.value += '.'
    } else if(inputlenght === 11){
        input.value += '-'
}
        
})

function validar(){
    const usuario = formulario.usuario.value
    const CPF = formulario.CPF.value
    const Email = formulario.Email.value
    const senha = formulario.senha.value
    const confsenha = formulario.confsenha.value


   if(!validarusuario(usuario)){
        exibirAlerta('warning','Usuario inválido',"Preencha o campo usuario!");
        return false
   }

   if(!validarCPF(CPF)){
        exibirAlerta('warning','CPF inválido',"Preencha o campo CPF!");
        return false
   }

    if(!validarEmail(Email)){
       exibirAlerta('warning','E-mail inválido',"Preencha o campo e-mail!");
       return false
   }
   if(!validarsenha(senha)){
       exibirAlerta('warning','Senha inválido',"Preencha o campo Senha com minino 6 caracteres!");
       return false
    }
    if(senha !== confsenha){
       exibirAlerta('error','Senhas não coincidem',"o campo confirmçaõ de senha deve ser igual à senha!");
       return fals

}
} 

exibirAlerta('sucess', 'Tudo Certo!','Cadastro realizado com sucesso!')



   return false;


function validarusuario(usuario){
    return usuario.trim().length > 0;
}
function validarCPF(CPF){
    return CPF.trim().length > 0;
}
function validarEmail(Email){
    return regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(Email);
}
function validarsenha(senha){
    return senha.length > 5;
}


function exibirAlerta(icone, título, texto){
    Swal.fire({
  icon: icone,
  title: titulo,
  text: texto,
});
}