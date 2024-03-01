const urlParameters = new URLSearchParams(window.location.search)
const username = urlParameters.get('username');




const newurl = `http://localhost:8080/register/${username}`;


fetch(newurl)
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    document.getElementById('username').innerText = data.username;
    document.getElementById('amount').innerText = data.amount;
    document.getElementById('accountNumber').innerText = data.accountNumber
})
.catch((error) => {
    console.log('Houve um erro', error)
})