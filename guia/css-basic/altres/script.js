function ExecutarCodiHTML(boto){
    const bloc = boto.parentElement;                
    const codi = bloc.querySelector('.codi').value;  
    const resultat = bloc.querySelector('.resultat'); 
    resultat.innerHTML = codi; 
}
