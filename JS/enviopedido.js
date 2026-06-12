const myFormLogin = document.getElementById('form');
if (myFormLogin !=null){
myFormLogin.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/usuario', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemplos feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data_envio: document.getElementById("Data_envio").value,
            nome_fornecedor: document.getElementById("nome_fornecedor").value  
        }),
    }).then(response => {
      console.log(response);
        if (response.status == 401) {
            alert("Email ou senha Incorretos!");
        } else {
            alert("Logado com sucesso");
            
        }
        return response.json();
    }).then(data=>{
      console.log(data);
      if(data.tipo=="Funcionário"){
        window.location.href = "homefunc.html";
      }else{
        window.location.href = "homeadm.html";
      }

    })

});
}
 