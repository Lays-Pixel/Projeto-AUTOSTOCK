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

function concluirCadastro() {
    const numero = document.getElementById("numeroEntrega").value;
    const tipo = document.getElementById("tipoProduto").value;
    const quantidade = document.getElementById("quantidade").value;
    const data = document.getElementById("dataEntrega").value;

    if (!numero || !tipo || !quantidade || !data || !prateleiraSelecionada) {
        alert("Preencha todos os campos e selecione uma prateleira!");
        return;
    }

    alert(
        "Cadastro concluído!\n\n" +
        "Entrega: " + numero +
        "\nProduto: " + tipo +
        "\nQuantidade: " + quantidade +
        "\nData: " + data +
        "\nPrateleira: " + prateleiraSelecionada
    );
}