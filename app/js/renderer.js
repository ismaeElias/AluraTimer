const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let buttonPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg','img/stop-button.svg'];

buttonPlay.addEventListener('click', function(){
    imgs = imgs.reverse();
    buttonPlay.src = imgs[0];
    timer.iniciar(tempo);
});