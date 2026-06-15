function cadastrar() {
    const capacidade = document.getElementById("capacidade").value;
    const stts = document.getElementById("stts").value;


    if (capacidade === "" || stts === "") {
        alert("Preencha todos os campos!");
        return;
    } else{
       window.location.href = "concluido.html";
    }
}

    const myForm1 = document.getElementById('novaprateleira');
    if (myForm1 != null) {
    myForm1.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7142/prateleira', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            capacidade: document.getElementById("capacidade").value,
            status: document.getElementById("stts").value   

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
    function editaPrateleira (idPrateleira){
        fetch('https://localhost:7142/prateleira'+idPrateleira, {
            method: 'PUT',   
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
               capacidade: document.getElementById("capacidade"+idPrateleira).value,
               status: document.getElementById("stts"+idPrateleira).value
            }),
        }).then(response => {
            if (response.status ==401){
                alert ("Faça login antes de editar!");
                window.location.href="login.html";
            }else{
                alert ("Prateleira editada!");
            }})
           
    }