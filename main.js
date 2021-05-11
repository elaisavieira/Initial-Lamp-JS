const on = document.getElementById('on');
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');

function lampOn() {
    lamp.src = './img/ligada.png';
}

function lampOff() {
    lamp.src = './img/desligada.jpg';
}

function lampBroken() {
    lamp.src = './img/broken.jpg';
}

on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


