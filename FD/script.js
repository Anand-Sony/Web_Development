function calculateMaturityAmount(){

    // Get input value from the form element
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure= parseFloat(document.getElementById("tenure").value);

    // perform the calculation : 
    const maturityAmount = principle + (principle*interestRate*tenure )/100 ;

    // Display the result : 
    document.getElementById("result").innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;



}

// Attach the evemt listner to the calculate Button
document.getElementById("calculateBtn").addEventListener('click' , calculateMaturityAmount);