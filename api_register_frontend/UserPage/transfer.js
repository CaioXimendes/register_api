const urlParameters = new URLSearchParams(window.location.search)
const username = urlParameters.get('username');

let accountNumber;
const urltransfer = `http://localhost:8080/register/${username}`;
fetch(urltransfer)
.then(response => response.json())
.then(data => {
    accountNumber = data.accountNumber;
})
.catch((error) => {
    console.log('Ocorreu um erro!', error)
})

const formulary = document.getElementById("transferForm")

const Input_transfer = document.getElementById("getTransferQuantity");
const Input_transferAccountNumber = document.getElementById("getTransferAccountNumber");

function transfer(){
    fetch('http://localhost:8080/transfer', 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            accountNumber: accountNumber,
            transferQuantity: Input_transfer.value,
            receiverAccountNumber: Input_transferAccountNumber.value
        })
    })
    .then(function (response) {console.log(response)})
    .catch(function (response) {console.log(response)})
};

function clear(){

    Input_transfer.value = null;
}

formulary.addEventListener('submit', function(event){
    event.preventDefault();

    
    transfer();
    //clear();
    location.reload();
})

