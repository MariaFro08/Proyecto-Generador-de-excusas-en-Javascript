function GenerarExcusa() {
  let Quien = [
    "Mi perro",
    "El vecino",
    "Un extraterreste",
    "Mi periquito",
    "Mi tatarabuela",
    "El Ratón Pérez",
    "La tortuga de mi prima"
  ];
  let Accion = [
    "se comió",
    "rompió",
    "perdió",
    "escondió",
    "regaló",
    "me robó",
    "congeló en el freezer"
  ];
  let Que = [
    "mi tarea",
    "el coche",
    "la computadora",
    "mis llaves",
    "mi celular",
    "un libro que estaba debajo de la cama",
    "los anteojos de mi mamá"
  ];
  let Cuando = [
    "antes de la clase",
    "cuando estaba bailando",
    "mientras hacia ejercicio",
    "durante mi almuerzo",
    "mientras estaba orando",
    "cuando fui a trabajar",
    "mientras estaba de viaje por Suiza"
  ];
  let QuienAleatorio = Math.floor(Math.random() * Quien.length);
  let AccionAleatorio = Math.floor(Math.random() * Accion.length);
  let QueAleatorio = Math.floor(Math.random() * Que.length);
  let CuandoAleatorio = Math.floor(Math.random() * Cuando.length);

  let excuse = `${Quien[QuienAleatorio]} ${Accion[AccionAleatorio]} ${Que[QueAleatorio]} ${Cuando[CuandoAleatorio]}.`;
  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = GenerarExcusa;
