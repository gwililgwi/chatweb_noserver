var ta = document.getElementById('ta');
var bt = document.getElementById('bt');
var dv = document.getElementsByClassName('des')[0];

function send(){
    let taV = ta.value;
    // dv.innerHTML = taV;
    let CD = document.createElement('div');
    CD.classList.add('tabox');
    let CT = document.createTextNode(taV);
    CD.appendChild(CT);
    dv.appendChild(CD);
}
function blank(){
    document.getElementById('ta').value = '';
}

function scrollB(){
    document.getElementsByClassName('container')[0].scrollTo(0, 1000);
}

function enter(){
    if(event.keyCode == 13){
        send();
        blank();
        scrollB();
    }
}