function cadastrar() {
    const capacidade = document.getElementById("capacidade").value;
    const identificação = document.getElementById("identificação").value;
    const stts = document.getElementById("stts").value;


    if (capacidade === "" || identificação === "" || stts === "") {
        alert("Preencha todos os campos!");
        return;
    } else{
       window.location.href = "concluido.html";
    }
}

fetch('', {
method: 'POST',
headers: {
'Content-Type': 'application/json',  
},
body: JSON.stringify({
capdasprat: 'capacidade',
identificação: 'identificação',
status: 'stts'
}),
}).then(response => response.json())
.then(data => console.log(data))