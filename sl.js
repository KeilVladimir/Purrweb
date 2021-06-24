let arrayImagesSrc = [
    "images/1.jpg",
    'images/2.jpg',
    'images/3.jpg'
]
let container = document.querySelector(".slider");
let stepDot = 0
let dotsContainer = document.querySelector(".dots-block");

function createDots() {
    console.log(dotsContainer)
    let dot = document.createElement("div");
    dot.id = stepDot + "";
    dot.classList.add("dot_none_active");
    if (stepDot === 0) {
        dot.classList.add("dot_active")
    }
    dotsContainer.appendChild(dot);
    stepDot++;
    if (stepDot !== arrayImagesSrc.length) {
        return createDots()
    }
}

createDots();

function DotsClick() {
    let lists = document.getElementsByClassName("slider_images");
    let dot = document.querySelectorAll(".dot_none_active");
    let dotId;
    for (let i = 0; i < dot.length; i++) {
        function Addclass(a) {
            return () => {
                for (let j = 0; j < dot.length; j++) {
                    dot[j].classList.remove("dot_active");
                    dot[j].onclick = null;
                }
                dotId = dot[a].id;
                if (parseInt(lists[0].id) !== parseInt(dotId)) {
                    console.log(lists[0].id,dotId)
                    if (dotId < dot.length / 2 && lists[0].id > dotId) {
                        dotId = parseInt(dotId);
                        AddImageToLeft(dotId + 1);
                        dot[a].classList.add("dot_active");
                        AnimateToLeft("dot");
                        timeout();
                    } else {
                        dotId = parseInt(dotId);
                        AddImageToRight(dotId - 1);
                        dot[a].classList.add("dot_active");
                        AnimateRight("dot");
                        timeout();
                    }
                } else{
                    dot[a].classList.add("dot_active");
                    for (let j = 0; j < dot.length; j++) {
                        dot[j].onclick = Addclass(j);

                    }
                }
                setTimeout(() => {
                    for (let j = 0; j < dot.length; j++) {
                        dot[j].onclick = Addclass(j);

                    }
                }, 3000)
            }
        }
        dot[i].onclick = Addclass(i);
        function timeout(){
            setTimeout(() => {
                for (let j = 0; j < dot.length; j++) {
                    dot[j].onclick = Addclass;

                }
            }, 3000)
        }
    }
}

DotsClick();

function AddImageToRight(id2) {
    id2 = parseInt(id2);
    if (id2 === arrayImagesSrc.length - 1) {
        id2 = 0
    } else {
        id2++
    }
    let img = document.createElement("img");
    img.src = arrayImagesSrc[id2];
    img.classList.add('slider_images');
    img.id = id2;
    container.appendChild(img);
}

function AddImageToLeft(id) {
    id = parseInt(id);
    if (id === 0) {
        id = arrayImagesSrc.length - 1
    } else {
        id--
    }
    let img = document.createElement("img");
    img.src = arrayImagesSrc[id];
    img.style.transform = 'translateX(' + -512 + 'px)';
    img.classList.add('slider_images');
    img.id = id;
    container.prepend(img);
}

let dot = document.querySelectorAll(".dot_none_active");
let left = document.getElementById("left");
let right = document.getElementById("right");

function AnimateRight(type) {
     for(let i=0;i<dot.length;i++){
        dot[i].onclick = null;
    }
    left.onclick = null;
    right.onclick = null;
    let container3 = document.querySelectorAll(".slider_images")
    let temp;
    let tempDots;
    temp = container3[0].id;
    tempDots = parseInt(temp);
    let container100 = document.querySelector(".slider");
    container100.style.justifyContent = "flex-start";
    if (type !== "dot") {
        AddImageToRight(temp);
        for (let j = 0; j < dot.length; j++) {
            dot[j].classList.remove("dot_active");
        }
        if (tempDots > dot.length - 2) {
            tempDots = 0
        } else {
            tempDots++
        }
        dot[tempDots].classList.add("dot_active");
    }
    container3 = document.querySelectorAll(".slider_images")
    let starts = Date.now();
    let time = setInterval(function () {
        let timePassed = Date.now() - starts;
        container3[0].style.transform = 'translateX(' + -timePassed / 5 + 'px)';
        container3[1].style.transform = 'translateX(' + -timePassed / 5 + 'px)';
        if (timePassed >= 2550) {
            clearInterval(time);
        }
    }, 10);
    setTimeout(function () {
            container3[0].remove();
            container3[1].style.transform = 'translateX(' + 0 + 'px)';
            left.onclick = AnimateToLeft;
            right.onclick = AnimateRight;
        DotsClick();
        },
        2560)
}

function AnimateToLeft(type) {
     for(let i=0;i<dot.length;i++){
        dot[i].onclick = null;
    }
    let list = document.querySelectorAll(".slider_images");
    left.onclick = null;
    right.onclick = null;
    let temp;
    let tempDots;
    temp = list[0].id;
    tempDots = parseInt(temp);
    let container100 = document.querySelector(".slider");
    temp = list[0].id;
    console.log(list[0]);
    container100.style.justifyContent = "flex-end";
    if (type !== "dot") {
        AddImageToLeft(temp);
        for (let j = 0; j < dot.length; j++) {
            dot[j].classList.remove("dot_active");
        }
        if (tempDots === 0) {
            tempDots = dot.length - 1;
        } else {
            tempDots--
        }
        dot[tempDots].classList.add("dot_active");
    }
    let start = Date.now();
    list = document.querySelectorAll(".slider_images");
    list[1].style.transform = 'translateX(' + 0 + 'px)';
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        list[0].style.transform = 'translateX(' + timePassed / 5 + 'px)';
        list[1].style.transform = 'translateX(' + timePassed / 5 + 'px)';
        if (timePassed >= 2550) {
            clearInterval(timer);
        }
    }, 10);
    setTimeout(function () {
            list[1].remove();
            list[0].style.transform = 'translateX(' + 0 + 'px)';
            left.onclick = AnimateToLeft;
            right.onclick = AnimateRight;
        DotsClick();
        },
        2560)
}













































