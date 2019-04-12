// creer le tableau avec 3 boutons en les choissisant apres leur classe 
var buttons=document.getElementsByClassName('color');
// creer la fonction qui va commencer a travailler dès qu'on click sur le button,
// et va changer la couleur de mon text en fonction de la couleur choissise.
// Pour vert ça va etre le premier bouton [0, parce que la numerotation commence par 0 et pas par 1], 
// pour red ca va etre le deuxieme bouton
// pour bleu ca va etre le troisieme bouton 
buttons[0].addEventListener('click', function () {
    document.getElementById('text').style.color = 'green'
});
buttons[1].addEventListener('click', function () {
    document.getElementById('text').style.color = 'red'
});
buttons[2].addEventListener('click', function () {
    document.getElementById('text').style.color='blue'
});
         