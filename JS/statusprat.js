fetch('', {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: '',
email: ''
}),
}).then(response => response.json()) 
.then(data => console.log(data))