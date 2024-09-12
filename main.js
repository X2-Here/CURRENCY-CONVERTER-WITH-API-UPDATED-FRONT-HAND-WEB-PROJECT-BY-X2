const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies";
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const drop =document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const mgs = document.querySelector(".e1");
for (let selector of drop)
{
    for(crrcode in countryList)
    {
        let newopt =document.createElement("option");
        newopt.innerText = crrcode;
        newopt.value = crrcode;
        if(selector.name ==="from" &crrcode ==="USD"){
            newopt.selected = "selected";
        }
        else if(selector.name ==="to" & crrcode ==="PAK"){
            newopt.selected = "selected";
        }
        selector.append(newopt);
    }
    selector.addEventListener("change", (evt) => {
        map(evt.target)
    });
}
const map = (element)=> {
let code = element.value;
let countrycode = countryList[code];
let nsrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = nsrc;
}
btn.addEventListener("click", async (evt) => {
evt.preventDefault();
let amount =document.querySelector(".amount input");
let val = amount.value;
if (amount==0  || amount<1){
val=1;
amount.value="1";
}
console.log(fromCurr.value.toLowerCase());
const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

let res =await fetch(url);
let data = await res.json();
let help = toCurr.value.toLowerCase();
if(help == "pak"){
help = "pkr";
};
console.log(toCurr.value.toLowerCase());
let rate = data[fromCurr.value.toLowerCase()][help];
let finalamount= val*rate;
mgs.innerHTML= `${val} ${fromCurr.value} = ${finalamount} ${toCurr.value}`
});
