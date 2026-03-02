const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

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

