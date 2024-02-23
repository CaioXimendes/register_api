const formulario = document.querySelector("form");


const Input_name = document.querySelector(".name");
const Input_email = document.querySelector(".email");
const Input_password = document.querySelector(".password");
const Input_phone_number = document.querySelector(".phone_number");

const url = "http://localhost:8080/register";

/*const data = {
    name_user: Input_name.value,
    email: Input_email.value,
    password: Input_password.value,
    phone_number: Input_phone_number.value,
}*/

function validateForm(){
    if (Input_name === null || Input_email === null || Input_password === null || Input_phone_number === null){
        alert("Preencha todos os campos")
        return false;
    }
    window.location.href='http://127.0.0.1:5500/LoginPage/loginpage_index.html';
    return false;
}

function register(){
    fetch(url, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username: Input_name.value,
            email: Input_email.value,
            password: Input_password.value,
            phone_number: Input_phone_number.value})
    })
    .then(function (response) {console.log(response)})
    .catch(function (response) {console.log(response)})
};

function clear(){

    Input_name.value = null;
    Input_email.value = null;
    Input_password.value = null;
    Input_phone_number.value = null;
}


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    
    register();
    //clear();
})