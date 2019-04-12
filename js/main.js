// je stocke mes boutons dans le tableau "buttons"
var buttons=document.getElementsByClassName('color');
//le bouton 1 change le texte en vert
buttons[0].addEventListener('click',function(){document.getElementById('text').style.color="green"});
//le bouton 2 change le texte en rouge
buttons[1].addEventListener('click',function(){document.getElementById('text').style.color="red"});
//le bouton 3 change le texte en bleu
buttons[2].addEventListener('click',function(){document.getElementById('text').style.color="blue"});