const seconds = document.querySelector("#seconds-el")
const minute = document.querySelector("#min-el")
const hours = document.querySelector("#hours-el")
const days = document.querySelector("#days-el")


//console.log(days, hours, minute, seconds);
let secValue = 11;
let minValue = 2;
let hourValue = 1;
let dayValue = 1;

const timeFunction = setInterval(() =>{
    secValue--;

    if (secValue === 0){
        minValue--;
    secValue = 60;
}
    if (minValue === 0){
        hourValue--;
        minValue = 60;
}
    if (hourValue === 0){
        dayValue--;
        hourValue = 24;
    }
    if (dayValue === 0){
        hourValue--;
        clearInterval(timeFunction)
    }
//console.log(secValue);
seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
minute.textContent = minValue < 10 ? `0${minValue}` : minValue;
hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);// 1000ms = 1s
