const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info");
const sizes = document.querySelector(".sizes");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const active = document.querySelector(".active");
const three = document.querySelector(".three");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transform = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    one.style.transform = "translateZ(100px)";
    two.style.transform = "translateZ(100px)";
    active.style.transform = "translateZ(100px)";
    three.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    one.style.transform = "translateZ(0px)";
    two.style.transform = "translateZ(0px)";
    active.style.transform = "translateZ(0px)";
    three.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
