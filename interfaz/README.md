# Interfaz de mesas de SIAR

Primera pantalla del restaurante, basada en el boceto del plano de mesas. Está hecha con HTML, CSS y JavaScript, sin librerías ni instalación de paquetes.

## Cómo abrirla

1. Descarga o clona el repositorio.
2. Entra en la carpeta `interfaz`.
3. Abre `index.html` en el navegador, con doble clic. También puedes usar Live Server en Visual Studio Code.

## Qué puedes probar

- Consultar el plano en forma de L, con 12 mesas por piso.
- Ver las mesas disponibles en verde y las ocupadas en rojo. Cada mesa también muestra su estado por escrito.
- Cambiar de piso con la flecha de las escaleras o con los botones Piso 1 y Piso 2.
- Seleccionar una mesa para ver su número, capacidad y estado.
- Marcar una mesa como ocupada o liberarla. El color y los contadores se actualizan.
- Reiniciar los datos de ejemplo con el botón Reiniciar vista.
- Usar los controles con el teclado. En pantallas pequeñas, el plano se desplaza horizontalmente para conservar el tamaño de las mesas.

## Archivos

- `index.html`: estructura de la pantalla y plano.
- `css/styles.css`: colores, distribución y adaptación a celulares.
- `js/app.js`: mesas de ejemplo, selección, cambio de piso y cambios de estado.

## Datos de ejemplo

El primer piso sigue la distribución de 12 mesas del boceto. El segundo usa provisionalmente el mismo plano. Los estados y las capacidades son ejemplos y se pueden ajustar en `createDemoTables()` dentro de `js/app.js`. Las posiciones se definen en el arreglo `positions`.

Esta entrega es solo la interfaz. No tiene autenticación, servidor ni conexión a una base de datos. Los cambios permanecen mientras la página esté abierta y se reinician al recargarla. Todavía no registra pedidos, pagos ni reservas reales.
