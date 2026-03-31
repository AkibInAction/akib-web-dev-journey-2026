
let loginbtn = document.getElementById("login-btn");
let cardout = document.getElementById("output1");
let Header = document.getElementById("page-head1");


loginbtn.addEventListener("click", function () {
    if (cheklogin() === true) {
        cardout.style.display = "block";
        Header.style.display = "none";
cardout.innerHTML = "<h1>Welcome " + username.value + ",hogaya page load</h1>";
    }



});




function cheklogin() {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;


    if (password.length > 8 && username.length > 5) {
     return true;

    }
    else {
        alert("password must be more than 8 characters and username must be more than 5 characters");
        return false;
    }
} 