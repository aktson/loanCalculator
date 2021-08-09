const loanAmountContainer = document.querySelector (".loan-amount"); 
const interestAmountContainer = document.querySelector (".interest-amount"); 
const submitButton = document.querySelector (".submit"); 
const repayYearsContainer = document.querySelector (".repay-years"); 
let monthlyPaymentContainer = document.querySelector (".monthly-amount"); 
const totalPaymentContainer = document.querySelector (".total-payment"); 
const totalInterestContainer = document.querySelector (".total-interest"); 
const resultContainer = document.querySelector (".result-container");
const rotatingContainer = document.querySelector (".rotating-image"); 





submitButton.addEventListener ("click", function (e) {
   e.preventDefault();
let loanAmount = +loanAmountContainer.value;
let years = +repayYearsContainer.value;
let interest = +interestAmountContainer.value;

      if (loanAmount  && years && interest ) {
    totalInterestContainer.value = Number((loanAmount * interest) / 100);
    totalPaymentContainer.value = Number(loanAmount + +totalInterestContainer.value ) 
    monthlyPaymentContainer.value = Number((+totalPaymentContainer.value / years) / 12 );
   
    rotatingContainer.classList.remove ("hidden");
    setTimeout(rotatingImageRemove, 1000);

resultContainer.style.display = "none";
   
    } else {
        showError("Please check your numbers");
    }

   
})

// function to showerror
function showError (error) {
const erroDiv = document.createElement ("div");
erroDiv.appendChild (document.createTextNode(error));

const formContainer = document.querySelector(".form-container");
const heading = document.querySelector ("h1");
formContainer.insertBefore (erroDiv, heading)
erroDiv.classList.add("error");

setTimeout(clearError,3000);


}

// function to clear error message

function clearError() {
    document.querySelector(".error").remove();
}


function rotatingImageRemove () {
   rotatingContainer.classList.add("hidden");
   resultContainer.style.display = "block";
   
    
}
// resultContainer.classList.remove ("hidden");