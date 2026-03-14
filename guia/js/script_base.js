function NavMostrar() {
    var NavSubLlista = document.getElementById("SubLlista")
    if (NavSubLlista.style.display == "none") {
        NavSubLlista.style.display = "block";
    }
    else {
         NavSubLlista.style.display = "none";
    }
}
function MostrarCommentaris() { // Arreglar Funció NO FUNCIONA
    var Comentari = document.getElementsByClassName('comment');
        if (Comentari.style.display == "none") {
        Comentari.style.display = "block";
    }
    else {
         Comentari.style.display = "none";
    }
}
function ExecutarCodiHTML(boto){
    const bloc = boto.parentElement;                
    const codi = bloc.querySelector('.codi').value;  
    const resultat = bloc.querySelector('.resultat'); 
    resultat.innerHTML = codi; 
}