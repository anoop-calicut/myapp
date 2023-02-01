var registerButton = document.getElementById("submitRegister");
if (registerButton != undefined) {  
  registerButton.addEventListener("click", submitRegisteration);
}

var signInButton = document.getElementById("submitSignIn");
if (signInButton != undefined) {  
  signInButton.addEventListener("click", submitSignIn);
}

var signInButton = document.getElementById("submitContact");
if (signInButton != undefined) {  
  signInButton.addEventListener("click", validateContactInfo);
}

function forgotPassword() {
  var form1 = document.forms["signInForm"];
  if (form1 == undefined) {
    alert("Invalid sign-in form action");  
  }
  document.getElementById("emailSignInError").innerHTML = "";
  document.getElementById("passwordSignInError").innerHTML = "";
  
  var email = form1.emailSignIn.value;
  if (email.length === 0 || email.length > 40 || !validateEmail(email)) {
    document.getElementById("emailSignInError").innerHTML = "Invalid email address";    
    return;
  }

  alert('Password reset link has been sent to your email address');
  form1.emailSignIn.value = "";
}

function submitSignIn() {
  var form1 = document.forms["signInForm"];
  if (form1 == undefined) {
    alert("Invalid sign-in form action");  
    return;
  }
  var email = form1.emailSignIn.value;
  var password = form1.passwordSignIn.value;
 
  document.getElementById("emailSignInError").innerHTML = "";
  document.getElementById("passwordSignInError").innerHTML = "";

  var isValidationSuccess = true;
  if (email.length === 0 || email.length > 40) {
    document.getElementById("emailSignInError").innerHTML = "Invalid email address";
    isValidationSuccess = false;
  } 
  if (password.length < 4 || password.length > 20) {
    document.getElementById("passwordSignInError").innerHTML = "Invalid password";
    isValidationSuccess = false;
  }
  isValid = validateEmail(email);
  if (!isValid) {
    document.getElementById("emailSignInError").innerHTML = "Invalid email address";
    isValidationSuccess = false;
  }
  if (!isValidationSuccess) {
    return;
  }

  alert("Hi "+email+", you are authenticated successfully!");

  form1.emailSignIn.value = "";
  form1.passwordSignIn.value = "";
}

function submitRegisteration() {
  var form1 = document.forms["registerForm"];
  if (form1 == undefined) {
    alert("Invalid register form action");  
    return;
  }

  // var username = form1.nameInput.value;
  var username = form1["nameInput"].value;
  var email = form1.emailInput.value;
  var address = form1.addressInput.value;
  var mobile = form1.mobileInput.value;
  var password1 = form1.password1.value;
  var password2 = form1.password2.value;
  var terms = form1.termsInput.checked ;

  //alert(username);
  
  document.getElementById("nameInputError").innerHTML = "";   
  document.getElementById("emailInputError").innerHTML = "";
  document.getElementById("passwordInputError").innerHTML = "";
  document.getElementById("addressInputError").innerHTML = "";
  document.getElementById("mobileInputError").innerHTML = "";

  var isValidationSuccess = true;
  if (username.length === 0 || username.length > 50) {    
    document.getElementById("nameInputError").innerHTML = "Enter the name";    
    isValidationSuccess = false;
  } 
  if (email.length === 0 || email.length > 40) {
    document.getElementById("emailInputError").innerHTML = "Enter email address";
    isValidationSuccess = false;
  } 
  if (password1.length < 4 || password2.length < 4 || password1.length > 20 || password2.length > 20) {
    document.getElementById("passwordInputError").innerHTML = "Password should be of 4-20 characters";
    isValidationSuccess = false;
  } else if (password1 != password2) {
    document.getElementById("passwordInputError").innerHTML = "Passwords does not match";
    isValidationSuccess = false;
  }
  
  if (address.length > 100) {
    document.getElementById("addressInputError").innerHTML = "Address should not exceed 100 characters";
    isValidationSuccess = false;
  } 

  let isValid = validateMobile(mobile);
  if (!isValid) {      
    document.getElementById("mobileInputError").innerHTML = "Invalid mobile number";
    isValidationSuccess = false;
  }
  isValid = validateEmail(email);
  if (!isValid) {
    document.getElementById("emailInputError").innerHTML = "Invalid email address";
    isValidationSuccess = false;
  }

  if (!isValidationSuccess) {
    return;
  } 
  if (terms === false) {
    alert("Please accept the terms and conditions to proceed!");
    return;
  } else {
    alert("Hi "+username+", your registration is saved successfully!");
  }

  cleanupRegistrationForm();
}

function cleanupRegistrationForm() {
  document.getElementById("nameInputError").innerHTML = "";   
  document.getElementById("emailInputError").innerHTML = "";
  document.getElementById("passwordInputError").innerHTML = "";
  document.getElementById("addressInputError").innerHTML = "";
  document.getElementById("mobileInputError").innerHTML = "";

  var form1 = document.forms["registerForm"];
  if (form1 != undefined) {
    form1.nameInput.value = "";
    form1.emailInput.value = "";
    form1.addressInput.value = "";
    form1.mobileInput.value = "";
    form1.password1.value = "";
    form1.password2.value = "";
    form1.termsInput.checked = false;
  }
}

function validateMobile(mobileNumber) {
  //alert("mobileNumber "+ mobileNumber);
  const p1 = /^(\+[\d]{2}-)*\d{10}$/;
  if (!mobileNumber.match(p1)) { // not a valid mobile no
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const p1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(p1)) {
    return false;
  } else {
    return true;
  }
}

function prefillMobile() {
  var form1 = document.forms["registerForm"];
  if (form1 == undefined) {
    alert("Invalid register form action");  
    return;
  }

  var mobile = form1.mobileInput;
  if (mobile.value == "") {
    mobile.value = "+91-";
  }
}

function validateContactInfo() {
  var form1 = document.forms["contactForm"];
  if (form1 == undefined) {
    alert("Invalid contact form action");  
    return;
  }
  var email = form1.contactEmail.value;
  var name = form1.contactName.value;
  var subject = form1.contactSubject.value;
  //var message = form1.contactMessage.value;
 
  document.getElementById("nameContactError").innerHTML = "";
  document.getElementById("emailContactError").innerHTML = "";
  document.getElementById("subjectContactError").innerHTML = "";

  var isValidationSuccess = true;
  if (email.length === 0 || email.length > 40) {
    document.getElementById("emailContactError").innerHTML = "Invalid email address";
    isValidationSuccess = false;
  } 
  if (name == "") {
    document.getElementById("nameContactError").innerHTML = "Invalid name";
    isValidationSuccess = false;
  }
  if (subject == "") {
    document.getElementById("subjectContactError").innerHTML = "Invalid subject";
    isValidationSuccess = false;
  }
  isValid = validateEmail(email);
  if (!isValid) {
    document.getElementById("emailContactError").innerHTML = "Invalid email address";
    isValidationSuccess = false;
  }
  if (!isValidationSuccess) {
    return;
  }

  alert("Hi "+name+", Your message has been sent. Thank you!");

  form1.contactEmail.value = "";
  form1.contactName.value = "";
  form1.contactSubject.value = "";
  form1.contactMessage.value = "";
}