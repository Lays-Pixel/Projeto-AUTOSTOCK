const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.")
  }else if(passwordValue.length < 6){
    errorInput(password, "A senha precisa ter no mínimo 7 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }

}

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

const myForm = document.getElementById('form');
if (myForm!=null){
myForm.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/usuario', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            sexo: document.getElementById("tipo").value
        }),
    }).then(response => response.json())
        .then(data => {
            alert("Conta cadastrada com sucesso");
            window.location.href = "login.html";      
        })
});
}








































