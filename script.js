document.getElementById("login-button").addEventListener("click", function () {
  const mobileNumber = '01971789176';
  const securityPin = '112244';
  // number verification
  const enterNumber = document.getElementById("Enter-number");
  const enterNumberVal = enterNumber.value;

  // pin verification
  const enterPin = document.getElementById("Enter-pin");
  const enterPinVal = enterPin.value;

  if (enterNumberVal === mobileNumber && enterPinVal === securityPin) {
    window.location.href="home-page.html";
  }
  else{
    alert('Inputs are invalid');
  }
});
