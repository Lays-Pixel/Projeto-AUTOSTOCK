function cadastrar() {
    const capacidade = document.getElementById("capacidade").value;
    const identificação = document.getElementById("identificação").value;

    if (capacidade === "" || data === "") {
        alert("Preencha todos os campos!");
        return;
    } else{
       window.location.href = "concluido.html";
    }

    alert(
        "Cadastro realizado com sucesso!\n" +
        "Capacidade: " + capacidade + " unidades\n" +
        "Data: " + data
    );
}

fetch('', {
method: 'POST',
headers: {
'Content-Type': 'application/json',  
},
body: JSON.stringify({
capdasprat: 'capacidade',
datadecad: 'data'
}),
}).then(response => response.json())
.then(data => console.log(data))