document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Produto cadastrado com sucesso!");
});
 
fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
produto: 'produto',
quantdeprodt: 'quantidade',
dtdecadastro: 'data'
}),
}).then(response => response.json())
.then(data => console.log(data))
