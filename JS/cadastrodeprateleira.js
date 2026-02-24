document.addEventListener("DOMContentLoaded", function () {

    const form = document.forms["formulario"];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const quantidadePrateleiras = document.getElementById("qntprat").value;
        const quaisPrateleiras = document.getElementById("quaisprat").value;
        const tipoProduto = document.getElementById("tipo").value;
        const quantidadeProduto = document.getElementById("quantprod").value;
        const data = document.getElementById("data").value;

        if (
            quantidadePrateleiras === "" ||
            quaisPrateleiras === "" ||
            tipoProduto === "" ||
            quantidadeProduto === "" ||
            data === ""
        ) {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        const entrega = {
            quantidadePrateleiras: Number(quantidadePrateleiras),
            quaisPrateleiras: quaisPrateleiras,
            tipoProduto: tipoProduto,
            quantidadeProduto: Number(quantidadeProduto),
            data: data
        };

    
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entrega)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Resposta da API:", data);
            alert(" Cadastro realizado com sucesso!");
            form.reset();
        })
        .catch(error => {
            console.error("Erro ao enviar dados:", error);
            alert(" Erro ao cadastrar!");
        });

    });

});