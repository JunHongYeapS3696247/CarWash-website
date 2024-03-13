function checkForm() {
    const formErrors = document.getElementById("formErrors");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    
    let errors = [];
    
    // Reset styles and error messages
    formErrors.innerHTML = "";
    fullNameInput.classList.remove("error");
    emailInput.classList.remove("error");
    
    
    // Check full name
    if (fullNameInput.value.trim().length === 0) {
        errors.push("Name is compulsory");
        fullNameInput.classList.add("error");
    }
    
    // Check email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        errors.push("Email is compulsory");
        emailInput.classList.add("error");
    }

    // Check message
    if (message.value.trim().length === 0) {
        errors.push("Message in textarea is compulsory");
        fullNameInput.classList.add("error");
    }
    
    
    // Display errors or hide formErrors
    if (errors.length > 0) {
        formErrors.classList.remove("hide");
        const errorList = document.createElement("ul");
        errors.forEach(error => {
            const listItem = document.createElement("li");
            listItem.textContent = error;
            errorList.appendChild(listItem);
        });
        formErrors.appendChild(errorList);
    } else {
        formErrors.classList.add("hide");
    }
 }
 document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
 
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
 });