"use strict";

// Las coordenadas corresponden al plano de referencia (800 por 580).
// El segundo piso usa la misma distribución hasta tener su propio boceto.
const positions = [
  [250, 112], [385, 112], [520, 112],
  [250, 218], [385, 218], [520, 218],
  [275, 345], [455, 345], [635, 345],
  [275, 455], [455, 455], [635, 455]
];

function createDemoTables() {
  return [1, 2].flatMap((floor) => positions.map(([x, y], index) => ({
    id: (floor - 1) * 12 + index + 1,
    floor,
    capacity: index === 8 || index === 11 ? 6 : 4,
    occupied: (floor === 1 ? [1, 4, 8, 10] : [0, 3, 7]).includes(index),
    x,
    y
  })));
}

// Estado de la demostración. No se envía ni guarda información en un servidor.
let tables = createDemoTables();
let currentFloor = 1;
let selectedId = null;

const byId = (id) => document.getElementById(id);
const floorButtons = document.querySelectorAll("[data-floor]");
const layer = byId("tables-layer");
const floorNames = { 1: "Primer piso", 2: "Segundo piso" };
const statusName = (table) => table.occupied ? "Ocupada" : "Disponible";
const statusClass = (table) => table.occupied ? "occupied" : "available";
const tableNumber = (id) => String(id).padStart(2, "0");

function announce(message) {
  byId("announcement").textContent = message;
}

function renderTables() {
  layer.replaceChildren();
  const floorTables = tables.filter((table) => table.floor === currentFloor);

  for (const table of floorTables) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `table-button ${statusClass(table)}`;
    button.dataset.tableId = table.id;
    button.style.left = `${table.x / 8}%`;
    button.style.top = `${table.y / 5.8}%`;
    button.setAttribute("aria-pressed", String(table.id === selectedId));
    button.setAttribute("aria-label", `Mesa ${tableNumber(table.id)}, ${statusName(table).toLowerCase()}, ${table.capacity} personas`);
    // Solo se insertan valores numéricos y etiquetas de los datos de ejemplo.
    button.innerHTML = `
      <i class="chair chair-top" aria-hidden="true"></i><i class="chair chair-bottom" aria-hidden="true"></i>
      <i class="chair chair-left" aria-hidden="true"></i><i class="chair chair-right" aria-hidden="true"></i>
      <span class="table-number">${tableNumber(table.id)}</span>
      <span class="table-capacity"><svg class="icon" aria-hidden="true"><use href="#icon-people"/></svg>${table.capacity}</span>
      <span class="table-status">${statusName(table)}</span>`;
    button.addEventListener("click", () => selectTable(table.id));
    layer.append(button);
  }

  const occupied = floorTables.filter((table) => table.occupied).length;
  byId("total-count").textContent = floorTables.length;
  byId("available-count").textContent = floorTables.length - occupied;
  byId("occupied-count").textContent = occupied;
  layer.setAttribute("aria-label", `Mesas del ${floorNames[currentFloor].toLowerCase()}`);
}

function renderDetails() {
  const table = tables.find((item) => item.id === selectedId && item.floor === currentFloor);
  byId("empty-detail").hidden = Boolean(table);
  byId("selected-detail").hidden = !table;
  if (!table) return;

  byId("selected-number").textContent = tableNumber(table.id);
  byId("selected-floor").textContent = floorNames[table.floor];
  byId("selected-capacity").textContent = `${table.capacity} personas`;
  byId("selected-status").textContent = statusName(table);
  byId("selected-status").className = `status-label ${statusClass(table)}`;
  byId("selected-description").textContent = table.occupied
    ? "Esta mesa está ocupada. Puedes liberarla para probar la disponibilidad."
    : "Esta mesa está disponible para recibir clientes.";
  byId("toggle-status").textContent = table.occupied ? "Liberar mesa" : "Marcar como ocupada";
}

function selectTable(id) {
  selectedId = id;
  for (const button of layer.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.tableId) === id));
  }
  renderDetails();
  const table = tables.find((item) => item.id === id);
  announce(`Mesa ${tableNumber(id)} seleccionada. ${statusName(table)}. Capacidad: ${table.capacity} personas.`);
}

function changeFloor(floor) {
  if (floor === currentFloor) return;
  currentFloor = floor;
  selectedId = null;
  renderFloor();
  announce(`${floorNames[floor]}. Selecciona una mesa del plano.`);
}

function renderFloor() {
  byId("plan-title").textContent = floorNames[currentFloor];
  byId("floor-description").textContent = currentFloor === 1 ? "Salón principal" : "Distribución de ejemplo";
  byId("floor-footer").textContent = `Piso ${currentFloor} de 2`;
  byId("stairs-label").innerHTML = currentFloor === 1 ? "Subir al<br>piso 2" : "Bajar al<br>piso 1";
  byId("stairs-button").setAttribute("aria-label", currentFloor === 1 ? "Subir al segundo piso" : "Bajar al primer piso");
  document.querySelector(".stairs-arrow").classList.toggle("is-down", currentFloor === 2);
  for (const button of floorButtons) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.floor) === currentFloor));
  }
  renderTables();
  renderDetails();
}

floorButtons.forEach((button) => button.addEventListener("click", () => changeFloor(Number(button.dataset.floor))));
byId("stairs-button").addEventListener("click", () => changeFloor(currentFloor === 1 ? 2 : 1));
byId("toggle-status").addEventListener("click", () => {
  const table = tables.find((item) => item.id === selectedId && item.floor === currentFloor);
  if (!table) return;
  table.occupied = !table.occupied;
  renderTables();
  renderDetails();
  announce(`Mesa ${tableNumber(table.id)}: ${statusName(table).toLowerCase()}. Resumen del piso actualizado.`);
});
byId("reset-demo").addEventListener("click", () => {
  tables = createDemoTables();
  selectedId = null;
  renderFloor();
  announce("Vista reiniciada con los datos de ejemplo.");
});

renderFloor();
