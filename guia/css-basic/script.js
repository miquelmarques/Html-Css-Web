function funcio() {
  var cerca = document.getElementById("cerca").value;
  document.getElementById("css-container").innerHTML = null;
  if (cerca == null) {
    resultats = PropietatsCss;
  } else {
    var resultats = PropietatsCss.filter(
      (css) =>
        Object.values(css).some((valor) =>
          String(valor).toLowerCase().includes(cerca.toLowerCase()),
        ),
    );
  }
  for (let i in resultats) {
    const div = document.createElement("div");
    const targeta = document.createElement("div");
    targeta.classList.add("targeta");
    div.classList.add("card");
    let titol = document.createElement("h4");
    titol.innerHTML = resultats[i].name.toUpperCase();
    let descripcio = document.createElement("p");
    descripcio.innerHTML = `<b> Descripció: </b> ${resultats[i].descrip}`;
    let codiresult = document.createElement("table");
    let rows = document.createElement("tr");
    let codi = document.createElement("td");
    codi.innerHTML = `<code><b> codi: </b> <br> .css { <br>${resultats[i].codi} <br>}</code>`;
    codi.classList.add("console");
    let exemple = document.createElement("td");
    if (!resultats[i].exemple) {
      exemple.innerHTML =`<a href="altres/${resultats[i].name}">Prem aquí</a>`}
    else {
      exemple.innerHTML = `<div style="${resultats[i].codi}">${resultats[i].exemple}</div>`;
    }
    rows.appendChild(codi);
    rows.appendChild(exemple);
    codiresult.appendChild(rows);
    targeta.appendChild(titol);
    targeta.appendChild(descripcio);
    targeta.appendChild(codiresult);
    div.appendChild(targeta);
    div.classList.add("card");
    document.getElementById("css-container").appendChild(div);

  }
}