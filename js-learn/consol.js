// DOM Elements ko const mein rakho (kyun ki inki memory location change nahi hogi)
const loginBtn = document.getElementById("login-btn");
const cardOut = document.getElementById("output1");
const header = document.getElementById("page-head1");
const errorTxt = document.getElementById("hiddin1");
const retryBtn = document.getElementById("rety-btn");

// Logic ko function mein separate karo (Modular Approach)
const validateUser = (user, pass) => {
    return pass.length > 8 && user.length > 5;
};

// Maan lo localStorage mein ek user hai: {name: "Akib123", pass: "password786"}

loginbtn.addEventListener("click", function () {
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;

    // LocalStorage ke array mein us user ko dhundo
    let userFound = registeruser.find(u => u.username === inputUser && u.password === inputPass);

    if (userFound) {
        // Agar match mil gaya toh login success
        cardout.style.display = "block";
        Header.style.display = "none";
    } else {
        // Agar match nahi mila toh error
        alert("User nahi mila! Pehle register karo.");
    }
});
retryBtn.addEventListener("click", () => {
    errorTxt.style.display = "none";
    header.style.display = "flex";
});