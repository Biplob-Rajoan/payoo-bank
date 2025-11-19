document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('Account-number').value;
    const pin = document.getElementById('pin').value;

    if(accountNumber.length === 11){
        if(pin === '1234'){
            console.log('Login successful');
            window.location.href = "./main.html";
        }else{
            alert('Incorrect PIN');
        }
    }
    else{
        alert('Account number must be 11 digits long');
    }
    
})