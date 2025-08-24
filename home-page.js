const transactionData = [];

// reusable funtionality
function reusableForms(id){
    const getTheForms = document.getElementsByClassName('form')
    for(const formOf of getTheForms){
        formOf.style.display = "none";
    }
    document.getElementById(id).style.display="block";
}

function changeColor(id){
    const formButton = document.getElementsByClassName("form-button");

    for(const button of formButton){
        button.classList.remove("bg-blue-200");
        button.classList.add("border-gray-200")
    }

    document.getElementById(id).classList.remove("border-gray-200", "border-[#0874f2]");

    document.getElementById(id).classList.add("bg-blue-200", "border-[#0874f2]");
}

// validation checker section
document.getElementById("add-money-btn").addEventListener("click", function () {
  const validNumber = "01971789176";
  const validPin = "112244";

  const Bank = document.getElementById("Bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("add-ammount").value);
  const addPin = document.getElementById("add-pin").value;

  // adding the money

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
    
  );
  const sumOfAmount = addAmount + availableBalance;

  if (accountNumber !== validNumber || addPin !== validPin) {
    alert("Please provide a valid NUMBER and a PIN");
    return;
  }

  document.getElementById("available-balance").innerText = sumOfAmount;

  const data = {
    name:"Add Money",
    date:new Date().toLocaleTimeString()
  }

  transactionData.push(data);
  console.log(transactionData);
});

// withdrawal feature

document
  .getElementById("money-withdrawal")
  .addEventListener("click", function () {
    const agentNumber = "01854569847";
    const pinNumber = "112244";
    const agentContact = document.getElementById("agent-contact").value;
    const enterPin = document.getElementById("pin-for-withdrawal").value;
    if (agentContact !== agentNumber || enterPin !== pinNumber) {
      alert("Please enter a valid AGENT Number and PIN Number");
      return;
    }

    const withdrawalAmount = parseInt(
      document.getElementById("withdrawal-amount").value
    );

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const deductionOfBalance = availableBalance - withdrawalAmount;

    document.getElementById("available-balance").innerText = deductionOfBalance;

    const data = {
    name:"Cash Out",
    date:new Date().toLocaleTimeString()
  }

  transactionData.push(data);

  console.log(transactionData);
  });

  document.getElementById("transaction-button").addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container");

    transactionContainer.innerText = "";

    for(const data of transactionData){
      const div = document.createElement("div");
      div.innerHTML=`
      <div class="flex justify-between items-center bg-white rounded-xl p-3 my-3">
        <div class="flex items-center">
          <div class="bg-[#f4f5f7] p-3 rounded-full">
            <img src="./assets/wallet1.png" alt="" class="mx-auto" />
          </div>
          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      `
      transactionContainer.appendChild(div)
    }
  })

  
// toggling feature

document.getElementById("add-money-button").addEventListener("click", function () {
    reusableForms("add-money-parent");
    changeColor("add-money-button");
  })

document.getElementById("cash-out-button").addEventListener("click", function () {
   reusableForms("cash-out-parent");
   changeColor("cash-out-button");
  });

document.getElementById("transfer-money-button").addEventListener("click", function(){
    reusableForms("transfer-money-parent");
    changeColor("transfer-money-button");
});

document.getElementById("get-bonus-button").addEventListener("click", function(){
    reusableForms("get-bonus-parent");
    changeColor("get-bonus-button");
});

document.getElementById("pay-bill-button").addEventListener("click", function(){
    reusableForms("pay-bill-parent");
    changeColor("pay-bill-button");
});

document.getElementById("transaction-button").addEventListener("click", function(){
    reusableForms("transactions-parent");
    changeColor("transaction-button");
});