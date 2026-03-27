const bankKaPaisa = document.getElementById('bank-ka-paisa');
const amountint = document.getElementById('amountint');
const paybtn = document.getElementById('pay-btn');
const akibBalance = document.getElementById('akib-balance');


paybtn.addEventListener('click', function() {
    

    let nayaPaisa = amountint.value; 
let puranapaisa = akibBalance.innerText;
    
let totalpaisa = Number(puranapaisa) + Number(nayaPaisa);


    akibBalance.innerText = totalpaisa;

    
    amountint.value = ""; 
});

paysomeone.addEventListener('click', function() {
    
})