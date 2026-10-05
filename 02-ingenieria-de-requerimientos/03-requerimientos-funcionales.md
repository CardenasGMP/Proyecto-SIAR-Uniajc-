# REQUERIMIENTOS FUNCIONALES:

Los requerimientos funcionales describen las operaciones y servicios que debe proporcionar SIAR para apoyar la gestión del restaurante. Estos requerimientos se organizan mediante un código, una descripción de la función esperada y un criterio de aceptación que permite comprobar su cumplimiento.

| RF | Descripción del requerimiento | Criterio de aceptación |
| --- | --- | --- |
| RF01 | El sistema debe permitir registrar usuarios. | Al completar y guardar la información, el usuario queda registrado y puede consultarse en el sistema. |
| RF02 | El sistema debe permitir editar usuarios registrados. | Los cambios guardados aparecen al consultar nuevamente la información del usuario. |
| RF03 | El sistema debe permitir eliminar usuarios. | Después de confirmar la operación, el usuario deja de estar disponible en el sistema. |
| RF04 | El sistema debe permitir gestionar los roles Administrador, Cajero, Mesero y Cocinero. | El usuario queda asociado con el rol seleccionado y accede a las funciones autorizadas. |
| RF05 | El sistema debe permitir que los usuarios registrados inicien sesión. | Un usuario con datos de acceso válidos puede ingresar y visualizar las funciones correspondientes a su rol. |
| RF06 | El sistema debe permitir recuperar la contraseña. | Después de completar el proceso, el usuario puede ingresar con la nueva contraseña. |
| RF07 | El sistema debe permitir crear productos. | El producto guardado aparece al consultar el menú. |
| RF08 | El sistema debe permitir modificar productos. | Los cambios guardados aparecen al consultar nuevamente el producto. |
| RF09 | El sistema debe permitir eliminar productos. | Después de confirmar la operación, el producto deja de aparecer en el menú. |
| RF10 | El sistema debe permitir categorizar productos. | El producto aparece asociado con la categoría seleccionada. |
| RF11 | El sistema debe permitir gestionar la disponibilidad de los productos. | El producto aparece identificado como disponible o no disponible. |
| RF12 | El sistema debe permitir crear mesas. | La mesa guardada aparece al consultar las mesas registradas. |
| RF13 | El sistema debe permitir modificar mesas. | Los cambios guardados aparecen al consultar nuevamente la mesa. |
| RF14 | El sistema debe permitir consultar el estado de las mesas. | El usuario puede visualizar el estado actual de las mesas registradas. |
| RF15 | El sistema debe permitir reservar mesas. | La reserva queda registrada y asociada con la mesa seleccionada. |
| RF16 | El sistema debe permitir liberar mesas. | Después de confirmar la operación, la mesa aparece disponible. |
| RF17 | El sistema debe permitir crear pedidos. | El pedido guardado aparece al consultar los pedidos registrados. |
| RF18 | El sistema debe permitir agregar productos a un pedido. | Los productos seleccionados aparecen incluidos en el pedido. |
| RF19 | El sistema debe permitir modificar pedidos. | Los cambios guardados aparecen al consultar nuevamente el pedido. |
| RF20 | El sistema debe permitir cancelar pedidos. | Después de confirmar la operación, el pedido aparece cancelado. |
| RF21 | El sistema debe permitir enviar pedidos a cocina. | El pedido enviado aparece disponible en el área de cocina. |
| RF22 | El sistema debe permitir consultar el estado de los pedidos. | El sistema muestra el pedido como Pendiente, En preparación, Listo, Entregado o Facturado. |
| RF28 | El sistema debe permitir generar facturas. | La factura generada queda registrada y puede consultarse. |
| RF29 | El sistema debe permitir calcular impuestos. | El impuesto calculado aparece incorporado en la factura. |
| RF30 | El sistema debe permitir aplicar descuentos. | El descuento aplicado modifica el valor correspondiente de la factura. |
| RF31 | El sistema debe permitir registrar pagos. | El pago guardado aparece asociado con la factura correspondiente. |
| RF32 | El sistema debe permitir emitir comprobantes. | El comprobante generado puede visualizarse y entregarse al cliente. |
| RF33 | El sistema debe permitir consultar las ventas por periodo. | El sistema muestra las ventas correspondientes al periodo seleccionado. |
| RF34 | El sistema debe permitir consultar los productos más vendidos. | El sistema muestra los productos según la información de ventas registrada. |
| RF35 | El sistema debe permitir consultar el consumo de inventario. | El sistema muestra la información disponible sobre el consumo de inventario. |
| RF36 | El sistema debe permitir consultar la ocupación de las mesas. | El sistema muestra la información registrada sobre el uso de las mesas. |
| RF37 | El sistema debe permitir consultar los indicadores financieros. | El sistema muestra los indicadores financieros calculados con la información registrada. |
