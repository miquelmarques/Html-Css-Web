function NavMostrar() {
    var NavSubLlista = document.getElementById("SubLlista")
    if (NavSubLlista.style.display == "none") {
        NavSubLlista.style.display = "block";
    }
    else {
        NavSubLlista.style.display = "none";
    }
}
function MostrarCommentaris() {
    let Comentari = document.querySelectorAll(".comment");
    Comentari.forEach(function(coment) {    
        if (coment.style.display === "none" || coment.style.display === "") {
            coment.style.display = "inline";
        }
        else {
            coment.style.display = "none";
        }
    });

}
function ExecutarCodiHTML(boto) {
    const bloc = boto.parentElement;
    const codi = bloc.querySelector('.codi').value;
    const resultat = bloc.querySelector('.resultat');
    resultat.innerHTML = codi;
}