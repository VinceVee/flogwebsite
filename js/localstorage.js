(function(){

  let myEmail = document.getElementById("my-email"); 
  let getEmail = document.getElementById("get-email");
  let userEmail = document.getElementById("user-email");
  let emailStored = localStorage.email;
  console.log(`Email on page load: ${emailStored}`);
  
  if(emailStored) {
    // If there's a email in localStorage, use it:
    myEmail.innerHTML = `again ${emailStored}`;
    console.log(`Email stored is: $emailStored}`);
  }
  else {
    // There's no email in localStorage:
    myEmail.innerHTML = "Interested?";
    console.log(`No email stored`);
  }

  function PerformGreeting() {
    if(userEmail.value === "") {
      alert("Please enter a email");
      userEmail.focus();
    }
    // Get the email the user entered:
    emailStored = userEmail.value;
    // Show the email in "my-email":
    myEmail.innerHTML = emailStored;
    // Put the email into localStorage:
    localStorage.email = emailStored;
    console.log(`New email stored: ${emailStored}`);
    return false;
  }

  function clearData() {
    console.log(`before clear: ${localStorage.email}`);
    // Clears all Local Storage data:
    localStorage.clear();
    // Clears one key-value pair e.g. data:
    // delete localStorage.email;
    console.log(`after clear: ${localStorage.email}`);
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getEmail.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getEmail.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  // Chrome/IE only
  getEmail.addEventListener("reset", clearData);

}());