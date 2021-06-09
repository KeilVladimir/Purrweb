
let form = document.getElementById("form");
let inputs = document.getElementsByClassName("inputs");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(inputs)
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value === ""){
            inputs[i].classList.add("error");
        } else{
            inputs[i].classList.remove("error");
        }
    }
})
let formMobile = document.getElementById("form-mobile");
let inputsMobile = document.getElementsByClassName("inputs-mobile");
formMobile.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("ok");
    for(let i=0;i<inputsMobile.length;i++){
        if(inputsMobile[i].value === ""){
            console.log('er')
            inputsMobile[i].classList.add("error-mobile");
        } else{
            inputsMobile[i].classList.remove("error-mobile");
        }
    }
})

let buttonCookie = document.getElementById("button__cookies");
let cookieContainer = document.getElementById("cookie");
buttonCookie.onclick = function () {
    cookieContainer.style.display ="none";
}

let buttonCookieMobile = document.getElementById("button__cookies-mobile");
let cookieContainerMobile = document.getElementById("cookies-mobile");
buttonCookieMobile.onclick = function () {
    cookieContainerMobile.style.display ="none";
}