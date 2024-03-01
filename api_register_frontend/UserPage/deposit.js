const formulario = document.getElementById("depositForm");

const Input_deposit = document.getElementById("getDeposit");
const Input_accountNumber = document.getElementById("getAccount");

//const url = "http://localhost:8080/deposit";

function deposit(){
    fetch('http://localhost:8080/deposit', 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            accountNumber: Input_accountNumber.value,
            depositQuantity: Input_deposit.value
        })
    })
    .then(function (response) {console.log(response)})
    .catch(function (response) {console.log(response)})
};

function clear(){

    Input_deposit.value = null;
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    
    deposit();
    //clear();
    location.reload();
})

