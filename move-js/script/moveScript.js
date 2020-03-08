"use strict"
let butt = document.getElementById('butt');
let div = document.getElementById('movable1');
let div2 = document.getElementById('movable2')
let circ1 = document.getElementById('circuit');
let circ2 = document.getElementById('circuit2');

circ1.addEventListener('click', () => {
    if (div.style.left == '50px'){
        div2.style.left = '-20px';
        div.style.left = '0';

    }
})
circ2.addEventListener('click', () => {
    if (div2.offsetLeft == -18){
        div.style.left = '50px';
        div2.style.left = '0';
    }
})
