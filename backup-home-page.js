document.getElementById('add-money-btn').addEventListener('click', function(){
    const validNumber = '01971789176';
    const validPin = '112244';

    const Bank = document.getElementById('Bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-ammount').value);
    const addPin = document.getElementById('add-pin').value;

    // adding the money

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const sumOfAmount = addAmount + availableBalance;
    
    if(accountNumber !== validNumber || addPin !== validPin){
        alert('Please provide a valid NUMBER and a PIN');
        return;
    }

    document.getElementById('available-balance').innerText = sumOfAmount;
});

// withdrawal feature

document.getElementById("money-withdrawal").addEventListener("click", function(){
   const agentNumber = '01854569847'
   const pinNumber = '112244'
   const agentContact = document.getElementById("agent-contact").value;
   const enterPin = document.getElementById("pin-for-withdrawal").value;
   if(agentContact !== agentNumber || enterPin !== pinNumber){
    alert('Please enter a valid AGENT Number and PIN Number');
    return;
   }

   const withdrawalAmount =parseInt(document.getElementById("withdrawal-amount").value);
    
   const availableBalance =parseInt(document.getElementById("available-balance").innerText);

   const deductionOfBalance = availableBalance - withdrawalAmount;

   document.getElementById("available-balance").innerText = deductionOfBalance;
})

// toggling feature

document.getElementById("add-money-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "block";
    document.getElementById("cash-out-parent").style.display=
    "none";
});

document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display=
    "none";
});

