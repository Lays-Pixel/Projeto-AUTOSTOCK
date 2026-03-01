const form = document.getElementById("form");
const username = document.getElementById("username")
const password= document.getElementById("password");


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

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.")
  }else if(passwordValue.length < 5){
    errorInput(password, "A senha precisa ter no mínimo 6 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }

  

 



}

function checkForm(){
  checkInputUsername();
  checkInputPassword();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("Entrar")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}
