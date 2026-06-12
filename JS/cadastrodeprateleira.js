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

    
const myForm1 = document.getElementById('novaprateleira');
if (myForm1 != null) {
myForm1.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/Prateleira', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Data_recebimento: document.getElementById("Data_recebimento").value   
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
    function editaEntrega (idEntrega){
        fetch('https://localhost:7142/Prateleira'+idEntrega, {
            method: 'PUT',   
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                Data_recebimento: document.getElementById("Data_recebimento"+idEntrega).value
            }),
        }).then(response => {
            if (response.status ==401){
                alert ("Faça login antes de editar!");
                window.location.href="login.html";
            }else{
                alert ("Prateleira editada!");
            }})
           
    }

    });

});