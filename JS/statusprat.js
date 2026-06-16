function editaStatusPrateleira (idPrateleira){
        fetch('https://localhost:7142/prateleira'+idPrateleira, {
            method: 'PUT',   
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                status: document.getElementById("stts"+idPrateleira).value
            }),
        }).then(response => {
            if (response.status ==401){
                alert ("Faça login antes de editar!");
                window.location.href="login.html";
            }else{
                alert ("Status editado!");
            }})
            
    }
