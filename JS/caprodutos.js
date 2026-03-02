document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
});
 
fetch('', {
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
