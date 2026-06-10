const myForm1 = document.getElementById('');
if (myForm1 != null) {
myForm1.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

        fetch('https://localhost:7142/prateleira'+idPrateleira, {
            method: 'PUT',   
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: document.getElementById("status"+idPrateleira).value,
                capacidade: document.getElementById("capacidade"+idPrateleira).value
            }),
        }).then(response => {
            if (response.status ==401){
                alert ("Faça login antes de editar!");
                window.location.href="login.html";
            }else{
                alert ("Produto editado!");
            }})
           
}
)}
