let prateleiraSelecionada = null;

function selecionar(botao) {
    const botoes = document.querySelectorAll(".item button");

    botoes.forEach(btn => {
        if (!btn.disabled) {
            btn.style.backgroundColor = "#7bd389";
        }
    });

    botao.style.backgroundColor = "#2ecc71";
    prateleiraSelecionada = botao.parentElement.querySelector("h4").innerText;
}

async function concluirCadastro() {
    const numero = document.getElementById("numeroEntrega").value;
    const tipo = document.getElementById("tipoProduto").value;
    const quantidade = document.getElementById("quantidade").value;
    const data = document.getElementById("dataEntrega").value;

    if (!numero || !tipo || !quantidade || !data || !prateleiraSelecionada) {
        alert("Preencha todos os campos e selecione uma prateleira!");
        return;
    }

    const entrega = {
        numero,
        tipo,
        quantidade,
        data,
        prateleira: prateleiraSelecionada
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entrega)
        });

        const resultado = await response.json();

        alert(
            "Cadastro concluído!\n\n" +
            "ID gerado: " + resultado.id +
            "\nEntrega: " + numero +
            "\nProduto: " + tipo +
            "\nQuantidade: " + quantidade +
            "\nData: " + data +
            "\nPrateleira: " + prateleiraSelecionada
        );

    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar.");
    }
}

fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
Ndaentrega: 'Ndaentrega',
Tipodeproduto: 'tipodeproduto',
Quantdeentregas: 'tipodeproduto',
Datadaentrega: 'tipodeproduto'

}),
}).then(response => response.json())
.then(data => console.log(data)) 

fetch('https://jsonplaceholder.typicode.com/users/1', {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
btncadastro: 'btncadastro'
}),
}).then(response => response.json())
.then(data => console.log(data))