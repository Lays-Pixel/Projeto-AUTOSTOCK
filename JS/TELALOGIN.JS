function login() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (usuario === "admin" && senha === "1234") {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: "usuario"
,senha: "senha"
}),
}).then(response => response.json())
.then(data => console.log(data))

