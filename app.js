const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("resultText");
let bmi = 0;

const calculate = () => {
    h = height.value / 100;
    w = weight.value;
    console.log(height.value)
    if(height.value == '' || weight.value == ''){
        alert("Please do not leave the input Empty!!!")
    }
    else{
        bmi=w/(h*h);
        let text = `Your BMI is ${bmi.toFixed(2)}`;
        result.innerText = text;        
    }
}
