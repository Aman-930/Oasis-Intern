const input = document.getElementById("num");
const unit = document.getElementById("Unit");
const result = document.getElementById("Res");
const button = document.getElementById("btn");
const unit2 = document.getElementById("Unit2");

button.addEventListener("click",function(){
    const inputk = parseFloat(input.value);
    const unitk = unit.value;

    if(isNaN(inputk)){
        result.textContent="Please enter a valid number !";
        return;
    }

    let convertedtemperature;

    if (unitk === "Celsius" && unit2.value === "Farenheit"){
        convertedtemperature = (inputk * 9/5) + 32;
        convertedtemperature = convertedtemperature.toFixed(2);
        result.textContent = String(convertedtemperature)+"°F";
    }
    else if(unitk==="Farenheit" && unit2.value==="Celsius"){
        convertedtemperature = (inputk - 32) * 5/9;
        convertedtemperature = convertedtemperature.toFixed(2);
        result.textContent = String(convertedtemperature)+"°C";
    }
    else if(unitk===unit2.value){
      const sym = (unitk==="Celsius")? "°C" : "°F";
      result.textContent = String(inputk)+String(sym)
    }

})