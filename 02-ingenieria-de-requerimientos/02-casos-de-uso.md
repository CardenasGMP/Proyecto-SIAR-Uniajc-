# Casos de uso

Cada caso indica actores, condiciones, pasos, errores y resultado. Salvo ingreso y recuperación, se requiere sesión y permiso. Si falla un cambio, se conservan los datos anteriores; los reintentos no deben duplicar registros. Las opciones agrupadas se ejecutan según la necesidad, no todas a la vez.

Los permisos y criterios están en los [requerimientos funcionales](03-requerimientos-funcionales.md).

## CU01 — Administrar cuentas

- **Actor:** administrador.
- **Historia:** HU01.
- **Requisitos:** RF01, RF02, RF03, RF04.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Abrir Usuarios y elegir crear, editar, desactivar o asignar un rol.
2. Completar los datos o cambiar los que hagan falta.
3. Revisar que el correo no esté repetido y que siga existiendo un administrador activo.
4. Confirmar y guardar el cambio con el nombre de quien lo realizó.

**Errores:** Si falta un dato o el correo se repite, se señala el problema y no se guarda. Tampoco se permite desactivar o cambiar el rol del último administrador activo.

**Resultado:** La cuenta queda actualizada y se conservan sus operaciones anteriores.

## CU02 — Iniciar sesión

- **Actor:** usuario del restaurante.
- **Historia:** HU02.
- **Requisitos:** RF05.
- **Condición:** La cuenta debe existir. El usuario todavía no ha iniciado sesión.

### Pasos

1. Abrir la pantalla de ingreso.
2. Escribir correo y contraseña.
3. Comprobar que los datos sean correctos y la cuenta esté activa.
4. Permitir la entrada y mostrar las funciones del rol.

**Errores:** Si los datos no coinciden o la cuenta está inactiva, se muestra un mensaje general y no se permite entrar.

**Resultado:** El usuario puede usar las funciones que tiene permitidas.

## CU03 — Recuperar acceso

- **Actor:** usuario registrado.
- **Historia:** HU03.
- **Requisitos:** RF06.
- **Condición:** La persona debe poder acceder al medio de recuperación de su cuenta.

### Pasos

1. Solicitar la recuperación escribiendo el correo.
2. Mostrar una respuesta general y enviar el enlace si corresponde.
3. Abrir el enlace y escribir una nueva contraseña.
4. Revisar que el enlace pertenezca a la cuenta, siga vigente y no se haya usado.
5. Guardar la contraseña de forma protegida, marcar el enlace como usado y cerrar las sesiones anteriores.

**Errores:** Si el enlace venció o ya se usó, se pide solicitar otro. Si falla el envío, se puede intentar de nuevo sin revelar si el correo está registrado.

**Resultado:** La persona puede entrar con la nueva contraseña; la anterior ya no sirve.

## CU04 — Administrar el menú

- **Actor:** administrador.
- **Historia:** HU04.
- **Requisitos:** RF07, RF08, RF09, RF10.
- **Condición:** Deben existir categorías para asignar los productos.

### Pasos

1. Abrir el menú y elegir qué se va a hacer.
2. Escribir o cambiar nombre, categoría, precio y disponibilidad.
3. Revisar los datos y confirmar.
4. Guardar el producto o desactivarlo, según la opción elegida.

**Errores:** Si falta un dato, el precio es negativo o la categoría no existe, se muestra el error. Un producto que tenga ventas anteriores se desactiva para conservar su historial.

**Resultado:** El menú queda actualizado y las ventas anteriores mantienen sus datos.

## CU05 — Controlar disponibilidad del menú

- **Actor:** administrador.
- **Historia:** HU05.
- **Requisitos:** RF11.
- **Condición:** El producto debe existir.

### Pasos

1. Seleccionar un producto.
2. Marcarlo como disponible o no disponible.
3. Guardar el cambio y mostrarlo al personal.
4. Volver a revisar ese estado cuando se agrega el producto o se envía un pedido.

**Errores:** Si el producto deja de estar disponible mientras se arma el pedido, no se confirma el envío y se indica qué producto debe corregirse.

**Resultado:** Los nuevos pedidos usan la disponibilidad actualizada.

## CU06 — Administrar mesas

- **Actor:** administrador.
- **Historia:** HU06.
- **Requisitos:** RF12, RF13.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Entrar a Mesas y elegir registrar o editar.
2. Escribir el número y la capacidad.
3. Revisar que el número no se repita y que la capacidad sirva para las reservas activas.
4. Guardar y mostrar la mesa.

**Errores:** Si el número ya existe o la capacidad no es válida, no se guarda. Si se intenta reducir la capacidad por debajo de una reserva activa, se conserva la anterior.

**Resultado:** Los datos de la mesa quedan guardados sin afectar las reservas.

## CU07 — Consultar y liberar mesas

- **Actor:** mesero o administrador.
- **Historia:** HU07.
- **Requisitos:** RF14, RF16.
- **Condición:** Se requiere permiso de mesero o administrador. Para liberar una mesa, esta debe estar ocupada.

### Pasos

1. Consultar las mesas.
2. Ver capacidad, estado y reservas del horario elegido.
3. Elegir la mesa que terminó su atención.
4. Revisar que sus pedidos estén cancelados o facturados.
5. Marcarla como libre y conservar las reservas para más tarde.

**Errores:** Si queda un pedido sin cerrar, no se libera. Si la mesa ya está libre, se informa sin repetir el cambio.

**Resultado:** Se puede consultar el estado actual y usar la mesa si quedó libre.

## CU08 — Crear y editar pedidos

- **Actor:** mesero.
- **Historia:** HU08.
- **Requisitos:** RF17, RF18, RF19.
- **Condición:** El mesero debe haber ingresado. Debe haber una mesa disponible o una reserva del cliente que llega, y productos en el menú.

### Pasos

1. Elegir la mesa y abrir el pedido.
2. Guardar su número, mesero responsable y estado Pendiente; marcar la mesa como ocupada.
3. Agregar productos, cantidades y observaciones.
4. Comprobar disponibilidad y calcular los valores.
5. Corregir lo necesario y guardar.
6. Conservar el precio de cada producto agregado y mostrar el total.

**Errores:** Si la mesa ya tiene un pedido activo, se abre ese pedido. Se rechazan cantidades incorrectas y productos no disponibles. Si cocina ya empezó, no se permite editar.

**Resultado:** El pedido queda Pendiente, con sus productos y un total correcto.

## CU09 — Cancelar pedidos

- **Actor:** mesero; administrador si la cancelación requiere autorización.
- **Quién más participa:** administrador para la autorización indicada.
- **Historia:** HU09.
- **Requisitos:** RF20.
- **Condición:** Debe existir un pedido sin facturar y un usuario con permiso para cancelarlo.

### Pasos

1. Elegir el pedido y pedir su cancelación.
2. Revisar en qué estado se encuentra.
3. Si cocina ya empezó, solicitar la autorización del administrador.
4. Escribir el motivo.
5. Guardar la cancelación y mostrarla también en cocina.

**Errores:** Sin la autorización necesaria, el pedido no se cancela. Si ya está Facturado, esta función no permite cancelarlo. Los insumos que ya se usaron se mantienen registrados; cualquier corrección se anota por separado con su motivo.

**Resultado:** El pedido queda Cancelado, con su responsable y motivo. No genera cobro ni devuelve insumos automáticamente.

## CU10 — Enviar pedidos a cocina

- **Actor:** mesero.
- **Historia:** HU10.
- **Requisitos:** RF21.
- **Condición:** Debe existir un pedido Pendiente con productos guardados.

### Pasos

1. Revisar el pedido y confirmar el envío.
2. Comprobar la mesa, las cantidades y la disponibilidad de los productos.
3. Guardar la fecha de envío.
4. Mostrar el pedido una sola vez en cocina, todavía como Pendiente.

**Errores:** Si está vacío o tiene un producto no disponible, no se envía y se explica el motivo. Si ya se había enviado, se muestra el mismo pedido sin crear otra copia.

**Resultado:** El cocinero puede ver el pedido y comenzar a prepararlo.

## CU11 — Seguir la preparación y entrega

- **Actor:** cocinero y mesero; administrador y cajero para consultar.
- **Quién más participa:** mesero para entrega y cajero en el posterior cobro.
- **Historia:** HU11.
- **Requisitos:** RF22.
- **Condición:** El pedido debe estar enviado a cocina y no estar cancelado.

### Pasos

1. Consultar los pedidos enviados.
2. El cocinero elige uno Pendiente y lo marca En preparación.
3. Cuando termina, lo marca Listo.
4. El mesero lo sirve y lo marca Entregado.
5. Guardar quién hizo cada cambio y a qué hora.
6. Cuando el cajero registre el pago, el pedido pasa a Facturado.

**Errores:** Si alguien intenta un cambio que no le corresponde o se salta un estado, no se acepta. Si dos personas cambian el pedido a la vez, se muestra el estado vigente. Un pedido Cancelado no continúa.

**Resultado:** El personal puede ver en qué va el pedido y consultar sus cambios.

## CU12 — Registrar insumos y entradas

- **Actor:** administrador.
- **Historia:** HU12.
- **Requisitos:** RF23, RF24.
- **Condición:** Para anotar una entrada, el insumo ya debe estar creado.

### Pasos

1. Registrar código, nombre, unidad de medida y cantidad mínima del insumo.
2. Revisar los datos y crear el insumo inicialmente con cantidad cero.
3. Anotar la cantidad que entra y su referencia.
4. Guardar la entrada con fecha y responsable.
5. Sumar la cantidad al inventario.

**Errores:** No se permite repetir el código ni registrar cantidades iguales o menores que cero. Si ya hay existencias al iniciar, se anotan como una entrada.

**Resultado:** Se pueden consultar el insumo, sus entradas y la cantidad disponible.

## CU13 — Registrar consumo de insumos

- **Actor:** administrador.
- **Historia:** HU13.
- **Requisitos:** RF25.
- **Condición:** El insumo debe existir y tener cantidad disponible. El administrador debe haber ingresado.

### Pasos

1. Elegir el insumo.
2. Escribir cantidad, motivo y referencia del pedido cuando corresponda.
3. Revisar que alcance lo disponible.
4. Confirmar la salida.
5. Guardar el movimiento y actualizar la cantidad juntos, una sola vez.

**Errores:** Si no alcanza, no se guarda ni se cambia la cantidad. Si se repite la misma confirmación, se muestra la salida ya registrada.

**Resultado:** La salida conserva su responsable y el inventario no queda con cantidades negativas.

## CU14 — Consultar inventario y alertas

- **Actor:** administrador.
- **Historia:** HU14.
- **Requisitos:** RF26, RF27.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Consultar el inventario.
2. Elegir un insumo o unas fechas para revisar sus movimientos.
3. Ver cantidades, unidad de medida, entradas y salidas.
4. Abrir los avisos de inventario.
5. Mostrar los insumos que estén en su mínimo o por debajo.

**Errores:** Si no hay movimientos o avisos, se indica que no hay datos. Las cantidades con distintas unidades se muestran por separado.

**Resultado:** El administrador puede revisar cuánto queda y qué necesita reponer.

## CU15 — Preparar la factura

- **Actor:** cajero; administrador para autorizar descuentos.
- **Quién más participa:** administrador para la autorización indicada.
- **Historia:** HU15.
- **Requisitos:** RF28, RF29, RF30.
- **Condición:** Debe existir un pedido Entregado sin factura. Las tasas de impuesto del ejercicio ya deben estar definidas.

### Pasos

1. El cajero selecciona el pedido.
2. Consultar sus productos y precios guardados.
3. Si habrá descuento, pedir autorización al administrador y guardar el motivo.
4. Calcular subtotal, descuento, base, impuesto y total.
5. Confirmar el cobro que se va a presentar.
6. Guardar la factura con un número único, todavía sin pago.

**Errores:** Si el pedido no está Entregado, no se factura. Si ya tiene factura, se muestra la existente. No se aplica un descuento inválido o sin permiso. Si falta definir la tasa, se debe hacer antes de emitir.

**Resultado:** Queda una factura pendiente de pago con los valores que se le cobrarán al cliente.

## CU16 — Registrar pago y comprobante

- **Actor:** cajero.
- **Historia:** HU16.
- **Requisitos:** RF31, RF32.
- **Condición:** El cajero debe haber ingresado y debe existir una factura pendiente de pago.

### Pasos

1. Abrir la factura y registrar el medio de pago y el dinero recibido.
2. Comprobar el total y calcular el cambio si es efectivo.
3. Confirmar el pago.
4. Guardar el pago y pasar el pedido a Facturado juntos.
5. Mostrar, imprimir o descargar el comprobante.

**Errores:** Si el dinero no alcanza, no se registra el pago. Una factura ya pagada o un doble clic no deben generar otro cobro. Si falla la impresión, se puede imprimir de nuevo sin repetir el pago.

**Resultado:** La factura queda pagada y su comprobante se puede consultar. Para liberar la mesa se usa RF16.

## CU17 — Consultar ventas y productos

- **Actor:** administrador.
- **Historia:** HU17.
- **Requisitos:** RF33, RF34.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Elegir fecha inicial y final.
2. Comprobar que las fechas estén en orden.
3. Consultar los pagos registrados en ese periodo.
4. Mostrar el total y ordenar los productos por cantidad vendida.
5. Permitir revisar los datos con los que se obtuvieron los totales.

**Errores:** Si las fechas están invertidas, se pide corregirlas. Si no hubo ventas, se muestra cero y una lista vacía.

**Resultado:** Los reportes muestran las ventas cobradas entre las fechas elegidas.

## CU18 — Consultar consumo y ocupación

- **Actor:** administrador.
- **Historia:** HU18.
- **Requisitos:** RF35, RF36.
- **Condición:** Para calcular la ocupación, deben estar guardados los horarios de atención y cuándo se ocuparon y liberaron las mesas.

### Pasos

1. Elegir el reporte y las fechas.
2. Revisar que las fechas estén bien.
3. Para consumo, sumar las salidas de cada insumo usando su unidad de medida.
4. Para ocupación, calcular cuánto tiempo estuvo ocupada cada mesa dentro del horario consultado.
5. Mostrar los datos y explicar el cálculo.

**Errores:** Si faltan horarios, se indica que no se puede calcular la ocupación. Si no hubo consumo, se muestra cero. Si la mesa sigue ocupada, se cuenta solo hasta la hora de la consulta.

**Resultado:** Se pueden revisar las cantidades y el uso de las mesas sin mezclar unidades ni dividir entre cero.

## CU19 — Consultar indicadores financieros

- **Actor:** administrador.
- **Historia:** HU19.
- **Requisitos:** RF37.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Elegir las fechas.
2. Consultar las ventas pagadas.
3. Sumar lo cobrado y contar las ventas.
4. Dividir el total entre la cantidad de ventas para obtener el promedio por venta, llamado ticket promedio.
5. Mostrar los valores y el periodo consultado.

**Errores:** Si no hubo ventas, total y cantidad son cero y el promedio no se calcula. Si no hay datos de costos, no se muestra una ganancia calculada.

**Resultado:** El resumen coincide con el reporte de ventas.

## CU20 — Registrar y modificar reservas

- **Actor:** mesero o administrador.
- **Historia:** HU20.
- **Requisitos:** RF15, RF38, RF39.
- **Condición:** Debe haber mesas registradas y un usuario con permiso.

### Pasos

1. Escribir contacto, número de personas, fecha y horas de inicio y fin.
2. Buscar una mesa con capacidad y sin otra reserva que se cruce.
3. Elegir la mesa y confirmar.
4. Revisar otra vez la disponibilidad y guardar.
5. Para cambiar una reserva Confirmada, revisar de nuevo capacidad y horario antes de guardar los nuevos datos.

**Errores:** Si no hay mesa, se puede elegir otro horario. Si otra persona la reserva al mismo tiempo, se rechaza la solicitud que entre en conflicto. Si un cambio falla, se conservan los datos anteriores.

**Resultado:** Queda una reserva Confirmada con mesa y horario. RF15 es la asignación de esa misma reserva.

## CU21 — Consultar, cancelar y atender reservas

- **Actor:** mesero; administrador para consultar y cancelar.
- **Historia:** HU21.
- **Requisitos:** RF40, RF41, RF42.
- **Condición:** El usuario debe tener permiso. Para cancelar o registrar llegada, la reserva debe estar Confirmada.

### Pasos

1. Consultar reservas por fecha, mesa o estado.
2. Elegir una reserva.
3. Si se cancela, escribir el motivo y confirmar para liberar su horario.
4. Si llegan los clientes, revisar que la mesa esté libre y relacionar la reserva con el nuevo pedido.
5. Marcar la reserva como Atendida y la mesa como ocupada.

**Errores:** No se repite una cancelación o llegada ya registrada. Si la mesa sigue ocupada, no se confirma la llegada; se puede revisar otra mesa cambiando la reserva.

**Resultado:** La reserva queda actualizada, se conserva su historial y no se duplica el pedido.

## CU22 — Consultar dashboard

- **Actor:** administrador.
- **Historia:** HU22.
- **Requisitos:** RF43, RF44.
- **Condición:** Sesión de administrador activa.

### Pasos

1. Abrir el dashboard, que es la pantalla de resumen.
2. Mostrar ventas, pedidos activos, mesas ocupadas, reservas y avisos de inventario, con la hora de actualización.
3. Elegir unas fechas.
4. Actualizar ventas y reservas con ese periodo, dejando identificados los datos que corresponden al momento actual.
5. Abrir el detalle de un indicador con los filtros que correspondan.

**Errores:** Si no hay registros, se muestra cero o sin información según el dato. Si falla la consulta de un módulo, se indica que no está disponible; no se muestra cero como si fuera un resultado real.

**Resultado:** El resumen coincide con la información de cada módulo y permite consultar el detalle.

## Cómo se conectan

El mesero crea el pedido en CU08 y lo envía a cocina en CU10. Su preparación y entrega se siguen en CU11. Después, el cajero prepara la factura en CU15 y registra el pago en CU16. La mesa se libera con CU07. CU09 permite cancelar cuando las reglas lo permiten.

CU20 y CU21 cubren las reservas y la llegada de los clientes, que se relaciona con la apertura del pedido de CU08. El consumo de inventario se anota manualmente con CU13; no se descuenta solo por abrir un pedido.
