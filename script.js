const form = document.querySelector('form');

//this usecase give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }else{
        const bmi = (weight / ((height + height)/10000)).toFixed(2);
        
        //show the result
        // results.innerHTML = `<span>${bmi}</span>` // displaying the result thorough this

        if(bmi <= 18.6){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`;
        }
        if(bmi <= 18.6 && bmi >= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`;
        }
        if(bmi >= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} You are Over Weight</span>`
        }
    }
})

