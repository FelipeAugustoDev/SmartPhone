
show = true;
const telao = document.getElementById('workspace');
const botaozin = document.getElementById('macarrao');
function trocaCor(){
    if(telao.style.backgroundColor == 'blue' )
    document.getElementById('workspace').style.backgroundColor = 'rgb(97, 97, 57)';
    else
    document.getElementById('workspace').style.backgroundColor = 'blue';
}

 function tela(){
    if(botaozin == !show)
    botaozin.classList.toggle('active')
    else
    botaozin.classList.toggle('active')
}