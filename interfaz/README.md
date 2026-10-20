# Interfaz de SIAR

Abre `index.html` con doble clic. No requiere instalar paquetes ni usar un servidor.

## Pantallas

- Mesas: plano original, cambio de piso y estados de ejemplo.
- Pedidos: listado, formulario para crear y editar, selección de mesa y productos.
- Cocina: columnas Pendiente, En preparación y Listo.
- Inventario: insumos, formulario de registro y movimientos.
- Facturación: datos del cliente, medio de pago y vista previa.

## Alcance actual

Solo interfaz. La navegación y las ventanas funcionan. Los botones de guardar, enviar, cancelar, cambiar estados de pedidos, cobrar y emitir muestran un aviso: todavía no realizan la operación. Los formularios no guardan datos. La factura y los importes son ejemplos sin validez fiscal. Los impuestos se definirán al desarrollar la lógica.

El plano de mesas conserva su simulación anterior. No está conectado a pedidos. No hay servidor, autenticación ni base de datos. El segundo piso conserva una distribución provisional.

El documento del proyecto pide Pedidos, Inventario y Facturación y el flujo Cliente → Pedido → Cocina → Factura. Inventario aparece como entregable, pero el PDF no detalla sus RF: los formularios de insumos y movimientos son una propuesta inicial.

## Archivos

- `index.html`, `pedidos.html`, `cocina.html`, `inventario.html`, `facturacion.html`: contenido de las pantallas.
- `css/styles.css`: diseño original del plano.
- `css/modulos.css`: diseño de navegación, tablas y formularios.
- `js/app.js`: simulación anterior de mesas.
- `js/interfaz.js`: abrir y cerrar ventanas y mostrar avisos. No contiene lógica de negocio.

## Próximos pasos de lógica

1. Leer los campos de un pedido.
2. Validar los datos y agregar productos.
3. Guardar el pedido y cambiar sus estados.
4. Registrar entradas y salidas de inventario.
5. Calcular valores de la factura y registrar pagos.

Cada paso se trabajará por separado, explicando cada línea antes de avanzar. Esta interfaz no completa por sí sola los módulos funcionales ni las pruebas exigidas en el proyecto.
