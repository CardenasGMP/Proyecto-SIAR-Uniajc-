# Historias de usuario

Aquí escribimos lo que necesita cada persona que usará SIAR. Usamos la forma «Como..., quiero..., para...» para explicar quién necesita una función, qué quiere hacer y para qué le sirve.

Debajo de cada historia están sus criterios de aceptación: los resultados que debemos comprobar para saber si esa función quedó bien. Los códigos RF y CU permiten encontrar el requisito y el caso de uso relacionado.

La prioridad Alta corresponde al acceso, la atención y el cobro. La prioridad Media corresponde a consultas, avisos y resúmenes. Es una propuesta para organizar el trabajo, pero todas las historias forman parte de la documentación.

## HU01 — Administrar cuentas

Como administrador, quiero crear, actualizar y desactivar las cuentas del personal para que cada trabajador tenga el acceso que necesita.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF01, RF02, RF03, RF04.
- **Caso de uso:** CU01 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF01:** Si los datos están completos, se guarda la cuenta. Si falta algo o el correo ya está registrado, se muestra el error y no se crea otra cuenta.
2. **RF02:** Al volver a consultar el usuario deben aparecer los cambios. No se acepta un correo que ya use otra persona.
3. **RF03:** Se conserva quién hizo los pedidos y otras operaciones anteriores. No se permite dejar el sistema sin un administrador activo.
4. **RF04:** Un mesero no puede administrar cuentas ni cobrar, aunque intente saltarse las pantallas. Si cambia el rol, los nuevos permisos se aplican desde la siguiente acción.

## HU02 — Iniciar sesión

Como usuario del restaurante, quiero ingresar con mi cuenta para usar las funciones de mi rol.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF05.
- **Caso de uso:** CU02 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF05:** Una cuenta activa con datos correctos puede entrar. Si hay un error o la cuenta está inactiva, se muestra un aviso general sin indicar cuál dato falló.

## HU03 — Recuperar acceso

Como usuario registrado, quiero cambiar mi contraseña si la olvido para volver a entrar al sistema.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF06.
- **Caso de uso:** CU03 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF06:** Proponemos un enlace que dure 15 minutos y se use una sola vez. Si está vencido o ya se usó, no permite el cambio. Al cambiar la contraseña, la anterior deja de funcionar. La respuesta de la solicitud no revela si el correo está registrado.

## HU04 — Administrar el menú

Como administrador, quiero agregar, editar, organizar por categorías y retirar productos para mantener el menú al día.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF07, RF08, RF09, RF10.
- **Caso de uso:** CU04 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF07:** El producto aparece en el menú. No se guarda si le falta nombre o categoría, o si su precio es negativo.
2. **RF08:** Los cambios se ven al consultar el menú. Si cambia el precio, se conservan los precios ya guardados en pedidos anteriores.
3. **RF09:** El producto se desactiva para nuevos pedidos. Sus datos se conservan en los pedidos y comprobantes anteriores.
4. **RF10:** Al elegir una categoría, aparecen sus productos. No se puede asignar una categoría que no exista.

## HU05 — Controlar disponibilidad del menú

Como administrador, quiero señalar cuáles productos están disponibles para que no se ofrezcan los que ya se terminaron.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF11.
- **Caso de uso:** CU05 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF11:** Un producto no disponible no se puede agregar ni confirmar para enviarlo a cocina. Se vuelve a revisar la disponibilidad al guardar.

## HU06 — Administrar mesas

Como administrador, quiero registrar las mesas y su capacidad para organizar los lugares de atención.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF12, RF13.
- **Caso de uso:** CU06 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF12:** El número no se repite y la capacidad debe ser un número entero mayor que cero. La mesa aparece en la consulta.
2. **RF13:** No se acepta un número que ya tenga otra mesa. Tampoco se reduce la capacidad por debajo de la cantidad de personas de una reserva activa.

## HU07 — Consultar y liberar mesas

Como mesero, quiero ver qué mesas están disponibles y liberar las que terminaron su atención para poder recibir otros clientes.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF14, RF16.
- **Caso de uso:** CU07 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF14:** La información debe coincidir con los pedidos y las reservas del horario consultado. Una reserva para más tarde no bloquea la mesa durante todo el día.
2. **RF16:** No se libera mientras tenga un pedido sin cancelar o facturar. Las reservas para más tarde se conservan.

## HU08 — Crear y editar pedidos

Como mesero, quiero tomar el pedido de una mesa y corregirlo mientras siga pendiente para enviarlo completo a cocina.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF17, RF18, RF19.
- **Caso de uso:** CU08 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF17:** El pedido recibe un número y queda Pendiente; la mesa pasa a ocupada. Proponemos un pedido activo por mesa. No se abren dos al mismo tiempo para la misma mesa.
2. **RF18:** Las cantidades deben ser enteros positivos. Cada producto conserva el precio que tenía al agregarlo. El total debe coincidir con la suma de lo pedido.
3. **RF19:** Se actualiza el total. Si el pedido está En preparación, Listo, Entregado o Facturado, ya no se permite editarlo.

## HU09 — Cancelar pedidos

Como mesero, quiero cancelar un pedido cuando el cliente desista para que no siga su preparación sin necesidad.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF20.
- **Caso de uso:** CU09 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF20:** Un pedido Pendiente puede cancelarse. Si cocina ya empezó, se necesita permiso del administrador. Un pedido Facturado no se cancela desde esta función. Se conserva su historial y no se devuelven automáticamente los insumos que ya se usaron.

## HU10 — Enviar pedidos a cocina

Como mesero, quiero enviar el pedido a cocina para que el cocinero sepa qué debe preparar.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF21.
- **Caso de uso:** CU10 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF21:** No se envía un pedido vacío o con productos no disponibles. Repetir el envío no crea otra copia. Sigue Pendiente hasta que el cocinero empiece a prepararlo.

## HU11 — Seguir la preparación y entrega

Como cocinero, quiero ver los pedidos y actualizar su preparación para que el mesero sepa cuándo puede entregarlos.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF22.
- **Caso de uso:** CU11 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF22:** El cocinero pasa un pedido enviado de Pendiente a En preparación y luego a Listo. El mesero lo marca Entregado y el pago lo deja Facturado. No se permiten saltos o retrocesos fuera de ese orden.

## HU12 — Registrar insumos y entradas

Como administrador, quiero registrar los insumos y sus entradas para saber con qué cuenta el restaurante.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF23, RF24.
- **Caso de uso:** CU12 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF23:** El código no se repite y la cantidad mínima no puede ser negativa. La unidad se define antes de registrar entradas o salidas.
2. **RF24:** La cantidad debe ser mayor que cero. Se suma exactamente lo registrado y se conserva el dato de la entrada.

## HU13 — Registrar consumo de insumos

Como administrador, quiero anotar los insumos que se usan para saber cuánto queda.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF25.
- **Caso de uso:** CU13 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF25:** Se descuenta la cantidad una sola vez. No se permite sacar más de lo disponible y se informa cuánto queda.

## HU14 — Consultar inventario y alertas

Como administrador, quiero consultar las cantidades y los avisos de nivel bajo para saber qué hace falta reponer.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF26, RF27.
- **Caso de uso:** CU14 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF26:** Lo disponible debe coincidir con las entradas menos las salidas y los ajustes registrados. En cada movimiento se puede ver quién lo hizo.
2. **RF27:** El aviso aparece cuando la cantidad es igual o menor al mínimo y desaparece cuando vuelve a estar por encima.

## HU15 — Preparar la factura

Como cajero, quiero preparar la factura con sus impuestos y descuentos autorizados para cobrar el valor correcto.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF28, RF29, RF30.
- **Caso de uso:** CU15 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF28:** Solo se crea una factura por pedido. Los productos, cantidades y precios deben coincidir con lo pedido. Crear la factura no significa que ya se haya pagado.
2. **RF29:** La factura muestra el valor sobre el que se calcula, la tasa y el impuesto. El cálculo y el comprobante usan el mismo redondeo a dos decimales. La tasa debe definirse antes de hacer las pruebas.
3. **RF30:** Se guarda el motivo y quién lo autorizó. El descuento no puede superar el subtotal ni dejar valores negativos. Se vuelve a calcular el impuesto sobre el valor con descuento.

## HU16 — Registrar pago y comprobante

Como cajero, quiero guardar el pago y entregar el comprobante para dejar registro de la venta.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF31, RF32.
- **Caso de uso:** CU16 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF31:** Proponemos un pago por factura. No se acepta menos del total; si es efectivo, se calcula el cambio. Confirmar dos veces no registra otro pago. El pedido pasa a Facturado.
2. **RF32:** Debe mostrar número, fecha, productos, cantidades, subtotal, descuento, impuestos, total y medio de pago. Imprimirlo otra vez no crea otra venta.

## HU17 — Consultar ventas y productos

Como administrador, quiero consultar las ventas y los productos más vendidos para conocer qué piden más los clientes.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF33, RF34.
- **Caso de uso:** CU17 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF33:** El total debe coincidir con los pagos de esas fechas. No se suman pedidos cancelados ni facturas sin pagar. Si no hubo ventas, se muestra cero.
2. **RF34:** Se suman las unidades de pedidos pagados y se ordenan de mayor a menor. No se cuentan los pedidos cancelados.

## HU18 — Consultar consumo y ocupación

Como administrador, quiero revisar el consumo de insumos y el uso de las mesas para entender cómo se están usando los recursos.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF35, RF36.
- **Caso de uso:** CU18 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF35:** La cantidad debe coincidir con los movimientos marcados como consumo. Cada insumo se muestra con su unidad; no se mezclan, por ejemplo, kilos con litros.
2. **RF36:** Proponemos dividir los minutos ocupados, desde que se abre el pedido hasta que se libera la mesa, entre los minutos habilitados del periodo. Se muestra el horario usado. Si no hubo tiempo habilitado, no se hace la división.

## HU19 — Consultar indicadores financieros

Como administrador, quiero ver cuánto se ha cobrado y el promedio por venta para tener un resumen de los ingresos.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF37.
- **Caso de uso:** CU19 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF37:** Se muestran las ventas cobradas, la cantidad de ventas y el promedio por venta. Si no hubo ventas, el promedio queda sin calcular. No se muestra ganancia si no tenemos los datos de costos.

## HU20 — Registrar y modificar reservas

Como mesero, quiero registrar y cambiar reservas para organizar las mesas que necesitarán los clientes.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF15, RF38, RF39.
- **Caso de uso:** CU20 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF15:** La mesa debe tener capacidad suficiente y no tener otra reserva que se cruce con ese horario. Si dos personas intentan reservarla al mismo tiempo, solo se confirma una.
2. **RF38:** Queda Confirmada si hay una mesa adecuada. Se rechaza un horario pasado, con el fin antes del inicio o que se cruce con otra reserva. La mesa se asigna mediante RF15.
3. **RF39:** Se revisan de nuevo capacidad y disponibilidad. Si el cambio no se puede hacer, la reserva conserva sus datos anteriores.

## HU21 — Consultar, cancelar y atender reservas

Como mesero, quiero consultar reservas, cancelarlas o marcar la llegada de los clientes para mantener actualizada la atención.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF40, RF41, RF42.
- **Caso de uso:** CU21 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF40:** Queda Cancelada y su horario vuelve a estar disponible. No se borra el historial ni se cambian otras reservas.
2. **RF41:** Se muestran contacto, personas, horario y estado según los filtros elegidos. Solo los roles autorizados pueden ver los datos de contacto.
3. **RF42:** La mesa debe estar libre. La reserva se relaciona con el pedido y pasa a Atendida; la mesa queda ocupada. La llegada no se registra dos veces.

## HU22 — Consultar dashboard

Como administrador, quiero ver un resumen del restaurante y consultar sus detalles para revisar rápidamente lo que está pasando.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF43, RF44.
- **Caso de uso:** CU22 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF43:** Cada dato coincide con la consulta de su módulo para la misma fecha. Se muestra cuándo se actualizó la información.
2. **RF44:** Ventas y reservas cambian según las fechas elegidas. Pedidos activos, mesas ocupadas y avisos se identifican como datos del momento actual. Al abrir el detalle se mantienen los filtros que correspondan.

## Por revisar

Las reglas detalladas y las propuestas de inventario, reservas y dashboard se revisarán con la docente. Están señaladas en los [requerimientos funcionales](03-requerimientos-funcionales.md). También falta acordar quién se encargará de cada tarea y sus fechas en el cronograma.
