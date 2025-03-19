//CHALLENGE AMIGO SECRETO
let participantes = [];

function agregarParticipante() {
  let inputNombre = document.getElementById("nombre");
  let nombreParticipante = inputNombre.value.trim();

  if (nombreParticipante === "") {
    alert("Por favor, inserte un nombre válido.");
    return;
  }

  if (participantes.includes(nombreParticipante)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  participantes.push(nombreParticipante);
  inputNombre.value = "";
  actualizarListaParticipantes();
}

function actualizarListaParticipantes() {
  let listaParticipantes = document.getElementById("listaParticipantes");
  listaParticipantes.innerHTML = "";

  participantes.forEach((participante) => {
    let elementoLista = document.createElement("li");
    elementoLista.textContent = participante;
    listaParticipantes.appendChild(elementoLista);
  });
}

function sortearParticipante() {
  if (participantes.length === 0) {
    alert("Por favor, inserte al menos un nombre antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * participantes.length);
  let resultadoLista = document.getElementById("resultadoSorteo");
  resultadoLista.innerHTML = `<li>Tu amigo secreto seleccionado es: <strong>${participantes[indiceSorteado]}</strong></li>`;
}
