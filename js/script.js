const listaDom = document.querySelector("ul.lista-spesa");
// creamo arrey
const listaSpesa = ["latte", "uova", "pane", "pasta", "carote"];

// ore bospgna ciclare il nostro arrey
let indice = 0;
while (indice < listaSpesa.length) {
  listaDom.innerHTML += `<li>${listaSpesa[indice]}</li>`;

  indice++;
}
