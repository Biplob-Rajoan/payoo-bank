document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amount");

    const pin = getInputValueById("pin");

    console.log(amount, pin);

    const account = document.getElementById("Account-number").value;

    const mainBalance = getInnerTextById("main-balance");
    console.log(mainBalance);

    if(account.length === 11 ){
      if (pin === 1234) {
        const sum = mainBalance + amount;
        document.getElementById("main-balance").innerText = sum;
        setInnerTextByIdandValue("main-balance", sum);

      }
    }else{
      alert("Account number must be 11 digits");
    }
  });
