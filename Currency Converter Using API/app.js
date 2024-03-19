const BASE_URL = "https://v6.exchangerate-api.com/v6/e493baf9e2e1e4abcc7db297/latest/"

let dropdowns = document.querySelectorAll(".dropDown select")
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for (let select of dropdowns){
    for (let currencyCode in countryList){
        let newOpt = document.createElement("option")
        newOpt.innerText = currencyCode
        newOpt.value = currencyCode
        if(select.name == "from" && currencyCode == "PKR"){
            newOpt.selected = "selected"
        } else if(select.name == "to" && currencyCode == "USD"){
            newOpt.selected = "selected"
        }
        select.append(newOpt)
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target)
    })
}


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value]
   
  
    let finalAmount = amtVal * rate;
    finalAmount = finalAmount.toFixed(3)
    msg.innerText = `${amtVal} ${fromCurr.value}= ${finalAmount} ${toCurr.value}`;
  };
  

const updateFlag = (element) =>{
    let currCode = element.value
    let countryCode = countryList[currCode]
    newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });