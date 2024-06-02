document.getElementById("bmiForm").addEventListener("submit" ,function(e){

    e.preventDefault();


    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseFloat(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (gender && age && heightFeet && heightInches && weight) {
        
        const heightInMeters = (heightFeet * 0.3048) + (heightInches * 0.0254);        // Now  bmi calculation
        const bmi = parseFloat((weight / Math.pow(heightInMeters, 2)).toFixed(2));  // bmi calculation

        const resultElement = document.getElementById("result");

        let category = '';
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal Weight";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        let resultMessage = 'Your BMI = ' + bmi.toFixed(2) + '<br>';  //bmi.toFixed(2) in float value only 2 decimal value will be shown.
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;

    }
});