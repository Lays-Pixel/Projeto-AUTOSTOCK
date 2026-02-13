document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formEntregas");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede recarregar a página

        // Pegando valores
        const numero = document.getElementById("numeroEntrega").value;
        const tipo = document.getElementById("tipoProduto").value;
        const quantidade = document.getElementById("quantidadeEntrega").value;
        const data = document.getElementById("dataEntrega").value;

        // Validação
        if (numero === "" || tipo === "" || quantidade === "" || data === "") {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        if (quantidade <= 0) {
            alert("⚠️ A quantidade deve ser maior que zero!");
            return;
        }

        // Criando objeto
        const entrega = {
            numeroEntrega: Number(numero),
            tipoProduto: tipo,
            quantidadeEntrega: Number(quantidade),
            dataEntrega: data
        };

        console.log("Entrega cadastrada:", entrega);

        alert("✅ Entrega cadastrada com sucesso!");

        form.reset(); // limpa formulário
    });

});
