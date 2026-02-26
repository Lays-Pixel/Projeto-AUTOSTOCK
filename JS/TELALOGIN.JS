function login() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha === "000000") {
       ;
    } if (senha === "222222"){
        ;
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

