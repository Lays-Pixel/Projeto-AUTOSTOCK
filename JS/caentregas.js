document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formEntregas");

 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then(data => {
            console.log("Usuários recebidos da API:");
            console.table(data); 
        })
        .catch(error => {
            console.error("Erro ao buscar usuários:", error);
        });


    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const numero = document.getElementById("numeroEntrega").value;
        const tipo = document.getElementById("tipoProduto").value;
        const quantidade = document.getElementById("quantidadeEntrega").value;
        const data = document.getElementById("dataEntrega").value;

        if (numero === "" || tipo === "" || quantidade === "" || data === "") {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        if (quantidade <= 0) {
            alert("⚠️ A quantidade deve ser maior que zero!");
            return;
        }

        const entrega = {
            numeroEntrega: Number(numero),
            tipoProduto: tipo,
            quantidadeEntrega: Number(quantidade),
            dataEntrega: data
        };

        console.log("Entrega cadastrada:", entrega);

        alert("✅ Entrega cadastrada com sucesso!");

        form.reset();
    });

});