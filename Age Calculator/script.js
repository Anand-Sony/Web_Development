function calculateAge(){

    const today = new Date();
    const birthDateInput = document.getElementById("birthdate").value;

    const birthDateParts = birthDateInput.split("-");

    const birthDay = parseInt(birthDateParts[0],10);
    const birthMonth = parseInt(birthDateParts[1],10 )-1; // -1 because :  the Date object in JavaScript uses a zero-based index for months. This means that January is represented as 0, February as 1, and so on, with December being represented as 11.
    const birthYear = parseInt(birthDateParts[2] ,10 );
    const birthDate = new Date(birthYear , birthMonth , birthDay);

    
    if (birthMonth > 12) {
        alert("Invalid Format : Use DD-MM-YYYY");
        return;
    }

    const isValidDate = (date) =>{
        return(
        Object.prototype.toString.call(date)==="[object Date]" && !isNaN(date)
        );

    };

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format : Use DD-MM-YYYY Format")
        return;

    }

    const ageInMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInseconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInWeeks/4.35);
    const ageInYears = Math.floor(ageInMonths/12);

    const resultContainer = document.getElementById("result-container");
    const result= document.getElementById("result");

    result.innerHTML = `
    
    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays %30} Days</p>

    </div>

    <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInMonths}</p>
    </div>

    <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks}</p>
    </div>

    <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
    </div>

    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInHours}</p>
    </div>

    <div class="result-item">
        <h3>Minutes Passed:</h3>
        <p>${ageInMinutes}</p>
    </div>

    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${ageInseconds}</p>
    </div>
    `;

    resultContainer.style.display= "block" ;



}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit" , (event)=>{

    event.preventDefault();
    calculateAge();

});