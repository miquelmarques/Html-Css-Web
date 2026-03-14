function funcio() {
        var cerca = document.getElementById("cerca").value;
        document.getElementById("film-container").innerHTML = null;
        if (cerca == null) {
          resultats = PropietatsCss;
        } else {
          var resultats = PropietatsCss.filter(
            (peli) =>
              Object.values(peli).some((valor) =>
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
          titol.innerHTML = resultats[i].name;
          titol.classList.add("targeta-titol"); 
          let descripcio = document.createElement("p");
          descripcio.innerHTML = `<b> Descripció: </b> ${resultats[i].descrip}`;
          descripcio.classList.add("targeta-info");
          let codi = document.createElement("p");
          codi.innerHTML = `<code><b> codi: </b> ${resultats[i].codi}</code>`;
          codi.classList.add("targeta-info");
          let exemple = document.createElement("p");
          exemple.innerHTML = `<b> Resultat: </b> <div style="${resultats[i].codi}">${resultats[i].exemple}</div>`;
          targeta.appendChild(titol); 
          targeta.appendChild(descripcio); 
          targeta.appendChild(codi); 
          targeta.appendChild(exemple); 
          div.appendChild(targeta); 
          document.getElementById("film-container").appendChild(div);
        }}