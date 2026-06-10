document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
});
const myForm1 = document.getElementById('novoproduto');
if (myForm1 != null) {
myForm1.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/produtos', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            qnt_estoque: document.getElementById("qnt_estoque").value,
            tipo_produto: document.getElementById("tipo_produto").value
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
            document.getElementById("respostaTarefa").innerHTML ="<h4>Produto cadastrado com sucesso!</h4>";        
        })
});
}
    function deletaProduto(idProduto){
        fetch('https://localhost:7142/produtos'+idProduto, {
            method: 'DELETE', 
            credentials: 'include'
  
        }).then(response => {
            alert("Produto excluído");
            window.location.href=".html";
        })
    }

    function editaProduto (idProduto){
        fetch('https://localhost:7142/produtos'+idProduto, {
            method: 'PUT',   
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: document.getElementById("nome"+idProduto).value,
                qnt_estoque: document.getElementById("qnt_estoque"+idProduto).value,
                tipo_produto: document.getElementById("tipo_produto"+idProduto).value
            }),
        }).then(response => {
            if (response.status ==401){
                alert ("Faça login antes de editar!");
                window.location.href="login.html";
            }else{
                alert ("Produto editado!");
            }})
           
    }
    function logout() {
    fetch('https://localhost:7142/usuario/logout', { credentials: 'include' })
        .then(response => {
            console.log(response);
            window.location.href = "index.html"
        })
}
