function calculateBmi() {
var weight = document.techBMI.weight.value
var height = document.techBMI.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height*height)
document.techBMI.bmi.value = finalBmi.toFixed(3);
if(finalBmi < 18.5){
document.techBMI.meaning.value = "You are unhealthy,go see a doctor and perhaps eat some more!."
    }
if(finalBmi > 18.5 && finalBmi < 25){
document.techBMI.meaning.value = "You are healthy enough,well done continue the way you are going"
    }
if(finalBmi > 25 &&  finalBmi <30){
document.techBMI.meaning.value = "You are overweight,consider a gym membership,check out https://www.nhs.uk/conditions/obesity/."
    }
if(finalBmi > 30){
document.techBMI.meaning.value = "Your are extremely obese,consider consulting a doctor"
    }
    }
    else{
    alert("Data you've entered might be incorrect. Please check and try again.")
    }

    }
