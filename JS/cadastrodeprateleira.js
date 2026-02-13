document.addEventListener("DOMContentLoaded", function () {

    const form = document.forms["formulario"];

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pegando valores
        const quantidadePrateleiras = document.getElementById("qntprat").value;
        const quaisPrateleiras = document.getElementById("quaisprat").value;
        const tipoProduto = document.getElementById("tipo").value;
        const quantidadeProduto = document.getElementById("quantprod").value;
        const data = document.getElementById("data").value;

        // Validação simples
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

        // Criando objeto com os dados
        const entrega = {
            quantidadePrateleiras: Number(quantidadePrateleiras),
            quaisPrateleiras: quaisPrateleiras,
            tipoProduto: tipoProduto,
            quantidadeProduto: Number(quantidadeProduto),
            data: data
        };

        console.log("Entrega cadastrada:", entrega);

        alert("✅ Cadastro realizado com sucesso!");

        form.reset(); // Limpa o formulário
    });

});