    // Utilisation du getElementsByClassName pour ciblé la classe voulue
    // getElementsByClassName crée une liste de noeud contenant tout les éléments color (ici 3, allant de 0 à 2)
    // Ici on cible le premier élément color (correspondant au vert)
document.getElementsByClassName ('color')[0].addEventListener('click', function()
{
    // Puis on change l'attribut color du text
    document.getElementById('text').style.color='green';
});
    // Ici on cible le deuxième élément color (correspondant au rouge)
    document.getElementsByClassName ('color')[1].addEventListener('click', function()
{
        // Puis on change l'attribut color du text
    document.getElementById('text').style.color='red';
}); 
    // Ici on cible le deuxième élément color (correspondant au bleu)
document.getElementsByClassName ('color')[2].addEventListener('click', function()
{
    // Puis on change l'attribut color du text
    document.getElementById('text').style.color='blue';
});
