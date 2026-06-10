const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha o username!");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 6) {
    errorInput(password, "A senha precisa ter no mínimo 6 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Preencha com o seu Email!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputUsername();
  checkInputPassword();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    login();
  }
}
function login() {
  const senha = password.value;

  if (senha === "111111") {
    window.location.href = "homeadm.html";
  } else if (senha === "000000") {
    window.location.href = "homefunc.html";
  } else {
    alert("Senha incorreta!");
  }
}
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content error";
}

const myFormLogin = document.getElementById('form');
if (myFormLogin !=null){
myFormLogin.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/usuario/login', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemplos feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: " ",
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            tipo: " "
        }),
    }).then(response => {
        if (response.status == 401) {
            alert("Email ou senha Incorretos!");
        } else {
            alert("Logado com sucesso");
            window.location.href = "homefunc.html";
        }
    })

});
}
