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

const myForm1 = document.getElementById('novaentrega');
if (myForm1 != null) {
myForm1.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/Entrega', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Data_Recebimento: document.getElementById("Data_Recebimento").value
             
        }),
    }).then(response => {
        console.log(response);
        if (response.status ==401){
            alert ("Faça login antes de cadastrar!"); 
            window.location.href="login.html";             

        }
        response.json();})  
        .then(data => {
            console.log(data);        
        })
});
}
    