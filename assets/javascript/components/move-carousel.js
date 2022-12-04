let buttonRight = document.querySelector('.button-arrow.-right');
let buttonLeft = document.querySelector('.button-arrow.-left');
let elements = document.querySelector('.elements');
let scroll = 0;

buttonLeft.addEventListener('click', function() {
    // console.log(elements)
    scroll -= 150;
    elements.style = `transform: translateX(${scroll}px)`;
});

buttonRight.addEventListener('click', function() {
    // console.log(elements)
    scroll += 150;
    elements.style = `transform: translateX(${scroll}px)`;
});