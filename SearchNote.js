window.onload = function () {
    // Tableau des correspondances
    var array = [
        {classic: "", usa: ""},
        {classic: "do", usa: "C"},
        {classic: "ré", usa: "D"},
        {classic: "mi", usa: "E"},
        {classic: "fa", usa: "F"},
        {classic: "sol", usa: "G"},
        {classic: "la", usa: "A"},
        {classic: "si", usa: "B"},
        {classic: "do", usa: "C"}
    ];


    // Création des éléments du BODY
    var form = document.createElement("form");
    var select = document.createElement("select");
    select.name = "notes";
    select.id = "notes"

    for (const val of array) {
        var option = document.createElement("option");
        option.value = val.classic;
        option.text = val.classic.charAt(0).toUpperCase() + val.classic.slice(1);
        select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Choisir une note: "
    label.htmlFor = "notes";

    document.getElementById("body").appendChild(form).appendChild(label).appendChild(select);


    // Récupère la liste déroulante des notes
    const searchnotes = document.getElementById("notes");


    // Sur changement de la valeur de la liste déroulante
    searchnotes.addEventListener("change", function () {


        // Récupère la valeur de l'option sélectionnée
        let searchnotes = notes.value;
        resultat = array.find(note => note.classic === searchnotes);


    });


}


