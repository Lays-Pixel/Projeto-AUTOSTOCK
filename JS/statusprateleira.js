fetch('', {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: 'Nathan Sebhastian',
email: 'nathan@mail.com'
}),
}).then(response => response.json())
.then(data => console.log(data))