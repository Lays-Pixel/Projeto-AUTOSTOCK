fetch('', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: 'Nathan Sebhastian',
email: 'ns@mail.com'
}),
}).then(response => response.json())
.then(data => console.log(data))