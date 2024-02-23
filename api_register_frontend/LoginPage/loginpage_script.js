const formularioLogin = document.querySelector("form");

const Input_name = document.querySelector(".name");
const Input_password = document.querySelector(".password");

const url = "http://localhost:8080/login";

/*const data = {
    name_user: Input_name.value,
    email: Input_email.value,
    password: Input_password.value,
    phone_number: Input_phone_number.value,
}*/


function login(){
    fetch(url, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username: Input_name.value,
            password: Input_password.value})
    })
    .then(function (response) {
        if (response.ok){
            window.location.href = 'http://127.0.0.1:5500/UserPage/userpage_index.html'
        }
        else{
            console.log('Houve uma falha no login!')
        }
    })
    .catch(function (error) {
        console.log('Houve um erro', error)
    })
};

function clear(){

    Input_name.value = null;
    Input_password.value = null;
}


formularioLogin.addEventListener('submit', function(event){
    event.preventDefault();

    login();
    //clear();
})