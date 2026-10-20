// Este archivo solo controla la presentación de las pantallas.
// Todavía no crea pedidos, modifica inventario ni registra pagos.
const botonesAbrir = document.querySelectorAll('[data-open]');
const botonesCerrar = document.querySelectorAll('[data-close]');
const botonesDemo = document.querySelectorAll('[data-demo]');
const mensaje = document.querySelector('#ui-message');
let temporizador;

botonesAbrir.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const ventana = document.getElementById(boton.dataset.open);
    ventana.showModal();
  });
});

botonesCerrar.forEach(function (boton) {
  boton.addEventListener('click', function () {
    boton.closest('dialog').close();
  });
});

botonesDemo.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const ventana = boton.closest('dialog');
    if (ventana) {
      ventana.append(mensaje);
    } else {
      document.body.append(mensaje);
    }
    mensaje.textContent = 'Esta acción se conectará cuando trabajemos la lógica. No se guardaron cambios.';
    mensaje.hidden = false;
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      mensaje.hidden = true;
    }, 5000);
  });
});

// Evita que Enter recargue la página al escribir en un formulario.
document.querySelectorAll('form').forEach(function (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
  });
});
