const form = document.querySelector('form');

// this use case give you empty value 
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Checking 
    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid Height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid Weight ${weight}`;
    } else{
        const bmi = (weight / ((height*height) / 1000)).toFixed(2);

        // Show the result 
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`
        }
        else if(bmi <= 18.6 && bmi >= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are in Normal Range</span>`
        }
        else if(bmi >= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are Over Weight</span>`
        }
        else{
            results.innerHTML = `<span>Your BMI is ${bmi} and not Listed in Website</span>`
        }
    }
})
