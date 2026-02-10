function cadastrar() {
    const capacidade = document.getElementById("capacidade").value;
    const data = document.getElementById("data").value;

    if (capacidade === "" || data === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert(
        "Cadastro realizado com sucesso!\n" +
        "Capacidade: " + capacidade + " unidades\n" +
        "Data: " + data
    );
}
