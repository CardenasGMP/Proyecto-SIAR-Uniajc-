# Requerimientos funcionales

Estos requisitos definen las funciones de SIAR y sus criterios de aceptación. Se basan en la guía y el [alcance](../01-documento-de-inicio/alcance.md). RF23–RF27 y RF38–RF44 completan inventario, reservas y dashboard como propuestas para revisar con la docente, junto con las reglas detalladas.

## Quién usará el sistema

| Rol | Qué podrá hacer |
| --- | --- |
| Administrador | Manejar cuentas, roles, menú, mesas e inventario; consultar reportes y dashboard; registrar, cambiar, consultar y cancelar reservas; autorizar descuentos y ciertas cancelaciones. |
| Mesero | Consultar menú y mesas; tomar y enviar pedidos; revisar su estado; registrar la entrega; manejar reservas y liberar mesas. |
| Cocinero | Consultar los pedidos enviados a cocina y marcar cuándo están En preparación o Listos. |
| Cajero | Consultar pedidos entregados, preparar facturas, aplicar descuentos autorizados, registrar pagos y entregar comprobantes. |
| Usuario registrado | Ingresar al sistema y recuperar su propia contraseña. |

El cliente recibe la atención, pero no necesita una cuenta. Ser administrador no significa hacer automáticamente las tareas del cajero o del mesero: cada rol tendrá los permisos que acordemos.

## Reglas generales

- **Guardar el historial:** si un usuario o producto tiene operaciones anteriores, lo desactivamos en vez de borrar esos registros.
- **Un pedido por mesa:** proponemos un pedido activo a la vez. Se conserva el precio de cada producto desde que se agrega al pedido.
- **Orden del pedido:** Pendiente → En preparación → Listo → Entregado → Facturado. Enviarlo a cocina no significa que ya estén preparándolo. Mientras siga Pendiente puede corregirse, y cocina debe ver la versión actualizada.
- **Cambios al mismo tiempo:** si cocina empieza a preparar mientras el mesero edita, el sistema debe aceptar solo la operación compatible con el estado vigente.
- **Cancelación:** proponemos Cancelado como estado final. Si cocina ya empezó, el administrador debe autorizarla. Un pedido Facturado no se cancela con esta función.
- **Inventario manual:** el administrador anota entradas y consumos. No hemos definido recetas para descontar insumos automáticamente. Cancelar un pedido no devuelve por sí solo lo ya consumido. Las correcciones se registran como otro movimiento con su motivo.
- **Cálculo de factura:** subtotal = suma de cantidad × precio; base = subtotal − descuento; impuesto = base × tasa; total = base + impuesto. Usaremos dos decimales. Las tasas se acordarán para el ejercicio. Es una factura interna del proyecto, sin conexión con facturación electrónica ni garantía de validez fiscal.
- **Pago:** proponemos una factura por pedido y un pago completo por factura. Se registra el medio de pago sin conectarse a pasarelas externas. El pedido queda Facturado al confirmar el pago. No incluimos pagos divididos, crédito ni devoluciones.
- **Liberar la mesa:** el personal la marca libre cuando termina la atención y sus pedidos ya están cerrados. Una reserva para más tarde se conserva.
- **Reservas:** RF15 asigna la mesa al registrar o cambiar la reserva de RF38/RF39. Se guarda una sola reserva, con hora de inicio y fin. Dos horarios se cruzan si el primero empieza antes de que termine el segundo y termina después de que el segundo empiece. Si uno empieza justo cuando acaba el otro, no se cruzan. Se revisan capacidad, reservas y ocupación actual antes de guardar.
- **No repetir registros:** un doble clic o un reintento no debe duplicar un pago, una reserva o un envío a cocina. Si algo falla, no debe quedar guardada solo una parte del cambio.
- **Fechas de los reportes:** una venta cuenta cuando se paga. Proponemos usar la hora del restaurante, America/Bogota si está en Cali. El rango incluye todo el día inicial y todo el día final.
- **Permisos:** el servidor debe revisar quién solicita cada acción y si tiene permiso. Ocultar un botón no es suficiente.

## Funciones por módulo

### Usuarios y roles

#### RF01 — Registrar usuarios

- **Rol:** Administrador.
- **Función:** Crear una cuenta con nombre, correo, rol y estado.
- **Criterio:** Si los datos están completos, se guarda la cuenta. Si falta algo o el correo ya está registrado, se muestra el error y no se crea otra cuenta.

#### RF02 — Editar usuarios

- **Rol:** Administrador.
- **Función:** Cambiar el nombre, el correo o el estado de una cuenta.
- **Criterio:** Al volver a consultar el usuario deben aparecer los cambios. No se acepta un correo que ya use otra persona.

#### RF03 — Eliminar usuarios

- **Rol:** Administrador.
- **Función:** Desactivar la cuenta de un trabajador para que deje de ingresar.
- **Criterio:** Se conserva quién hizo los pedidos y otras operaciones anteriores. No se permite dejar el sistema sin un administrador activo.

#### RF04 — Gestionar roles

- **Rol:** Administrador.
- **Función:** Asignar a cada usuario uno de los cuatro roles y permitirle solo las funciones que le corresponden.
- **Criterio:** Un mesero no puede administrar cuentas ni cobrar, aunque intente saltarse las pantallas. Si cambia el rol, los nuevos permisos se aplican desde la siguiente acción.

#### RF05 — Iniciar sesión

- **Rol:** Todos los roles.
- **Función:** Comprobar el correo y la contraseña antes de permitir el ingreso.
- **Criterio:** Una cuenta activa con datos correctos puede entrar. Si hay un error o la cuenta está inactiva, se muestra un aviso general sin indicar cuál dato falló.

#### RF06 — Recuperar contraseña

- **Rol:** Usuario registrado.
- **Función:** Permitir que el usuario cambie su contraseña si la olvidó, después de comprobar que la cuenta le pertenece.
- **Criterio:** Proponemos un enlace que dure 15 minutos y se use una sola vez. Si está vencido o ya se usó, no permite el cambio. Al cambiar la contraseña, la anterior deja de funcionar. La respuesta de la solicitud no revela si el correo está registrado.

### Menú

#### RF07 — Crear productos

- **Rol:** Administrador.
- **Función:** Guardar un producto del menú con nombre, categoría, precio y disponibilidad.
- **Criterio:** El producto aparece en el menú. No se guarda si le falta nombre o categoría, o si su precio es negativo.

#### RF08 — Modificar productos

- **Rol:** Administrador.
- **Función:** Actualizar los datos de un producto del menú.
- **Criterio:** Los cambios se ven al consultar el menú. Si cambia el precio, se conservan los precios ya guardados en pedidos anteriores.

#### RF09 — Eliminar productos

- **Rol:** Administrador.
- **Función:** Retirar del menú un producto que ya no se ofrecerá.
- **Criterio:** El producto se desactiva para nuevos pedidos. Sus datos se conservan en los pedidos y comprobantes anteriores.

#### RF10 — Categorizar productos

- **Rol:** Administrador.
- **Función:** Asignar una categoría al producto y permitir consultar el menú por categoría.
- **Criterio:** Al elegir una categoría, aparecen sus productos. No se puede asignar una categoría que no exista.

#### RF11 — Gestionar disponibilidad

- **Rol:** Administrador.
- **Función:** Señalar si un producto está disponible para pedirlo.
- **Criterio:** Un producto no disponible no se puede agregar ni confirmar para enviarlo a cocina. Se vuelve a revisar la disponibilidad al guardar.

### Mesas

#### RF12 — Crear mesas

- **Rol:** Administrador.
- **Función:** Registrar una mesa con número, capacidad y estado inicial libre.
- **Criterio:** El número no se repite y la capacidad debe ser un número entero mayor que cero. La mesa aparece en la consulta.

#### RF13 — Modificar mesas

- **Rol:** Administrador.
- **Función:** Cambiar los datos de una mesa.
- **Criterio:** No se acepta un número que ya tenga otra mesa. Tampoco se reduce la capacidad por debajo de la cantidad de personas de una reserva activa.

#### RF14 — Consultar estado de mesas

- **Rol:** Administrador y mesero.
- **Función:** Mostrar la capacidad de cada mesa y si está libre, ocupada o reservada.
- **Criterio:** La información debe coincidir con los pedidos y las reservas del horario consultado. Una reserva para más tarde no bloquea la mesa durante todo el día.

#### RF15 — Reservar mesas

- **Rol:** Administrador y mesero.
- **Función:** Asignar una mesa a una reserva en una fecha y horario.
- **Criterio:** La mesa debe tener capacidad suficiente y no tener otra reserva que se cruce con ese horario. Si dos personas intentan reservarla al mismo tiempo, solo se confirma una.

#### RF16 — Liberar mesas

- **Rol:** Administrador y mesero.
- **Función:** Marcar una mesa como libre cuando termine la atención.
- **Criterio:** No se libera mientras tenga un pedido sin cancelar o facturar. Las reservas para más tarde se conservan.

### Pedidos

#### RF17 — Crear pedido

- **Rol:** Mesero.
- **Función:** Abrir un pedido con la mesa y el mesero responsable. Puede ser una mesa libre o la reservada para el cliente que acaba de llegar.
- **Criterio:** El pedido recibe un número y queda Pendiente; la mesa pasa a ocupada. Proponemos un pedido activo por mesa. No se abren dos al mismo tiempo para la misma mesa.

#### RF18 — Agregar productos

- **Rol:** Mesero.
- **Función:** Agregar productos, cantidades y observaciones a un pedido.
- **Criterio:** Las cantidades deben ser enteros positivos. Cada producto conserva el precio que tenía al agregarlo. El total debe coincidir con la suma de lo pedido.

#### RF19 — Modificar pedido

- **Rol:** Mesero.
- **Función:** Corregir cantidades, observaciones o productos mientras el pedido esté Pendiente.
- **Criterio:** Se actualiza el total. Si el pedido está En preparación, Listo, Entregado o Facturado, ya no se permite editarlo.

#### RF20 — Cancelar pedido

- **Rol:** Mesero; administrador en excepciones.
- **Función:** Cancelar un pedido y guardar el motivo, la fecha y quién lo canceló.
- **Criterio:** Un pedido Pendiente puede cancelarse. Si cocina ya empezó, se necesita permiso del administrador. Un pedido Facturado no se cancela desde esta función. Se conserva su historial y no se devuelven automáticamente los insumos que ya se usaron.

#### RF21 — Enviar pedido a cocina

- **Rol:** Mesero.
- **Función:** Enviar a cocina un pedido confirmado con al menos un producto disponible.
- **Criterio:** No se envía un pedido vacío o con productos no disponibles. Repetir el envío no crea otra copia. Sigue Pendiente hasta que el cocinero empiece a prepararlo.

#### RF22 — Consultar y seguir estado

- **Rol:** Mesero, cocinero, cajero y administrador.
- **Función:** Consultar cómo va un pedido y actualizar su estado según la tarea de cada trabajador.
- **Criterio:** El cocinero pasa un pedido enviado de Pendiente a En preparación y luego a Listo. El mesero lo marca Entregado y el pago lo deja Facturado. No se permiten saltos o retrocesos fuera de ese orden.

### Inventario

#### RF23 — Registrar insumos

- **Rol:** Administrador.
- **Función:** Registrar cada insumo con código, nombre, unidad de medida y cantidad mínima.
- **Criterio:** El código no se repite y la cantidad mínima no puede ser negativa. La unidad se define antes de registrar entradas o salidas.

#### RF24 — Registrar entradas

- **Rol:** Administrador.
- **Función:** Anotar lo que entra al inventario, con cantidad, fecha, responsable y referencia.
- **Criterio:** La cantidad debe ser mayor que cero. Se suma exactamente lo registrado y se conserva el dato de la entrada.

#### RF25 — Registrar consumos y salidas

- **Rol:** Administrador.
- **Función:** Anotar los insumos que se usan o salen, junto con la cantidad, el motivo y el pedido cuando corresponda.
- **Criterio:** Se descuenta la cantidad una sola vez. No se permite sacar más de lo disponible y se informa cuánto queda.

#### RF26 — Consultar existencias

- **Rol:** Administrador.
- **Función:** Consultar las cantidades disponibles y los movimientos de cada insumo por fecha.
- **Criterio:** Lo disponible debe coincidir con las entradas menos las salidas y los ajustes registrados. En cada movimiento se puede ver quién lo hizo.

#### RF27 — Alertar existencias bajas

- **Rol:** Administrador.
- **Función:** Mostrar cuáles insumos llegaron a su cantidad mínima o están por debajo de ella.
- **Criterio:** El aviso aparece cuando la cantidad es igual o menor al mínimo y desaparece cuando vuelve a estar por encima.

### Facturación

#### RF28 — Generar factura

- **Rol:** Cajero.
- **Función:** Crear una factura interna para un pedido Entregado, con un número que no se repita.
- **Criterio:** Solo se crea una factura por pedido. Los productos, cantidades y precios deben coincidir con lo pedido. Crear la factura no significa que ya se haya pagado.

#### RF29 — Calcular impuestos

- **Rol:** Cajero.
- **Función:** Calcular el impuesto con la tasa definida para el proyecto.
- **Criterio:** La factura muestra el valor sobre el que se calcula, la tasa y el impuesto. El cálculo y el comprobante usan el mismo redondeo a dos decimales. La tasa debe definirse antes de hacer las pruebas.

#### RF30 — Aplicar descuentos

- **Rol:** Cajero con autorización del administrador.
- **Función:** Aplicar un descuento autorizado antes del pago.
- **Criterio:** Se guarda el motivo y quién lo autorizó. El descuento no puede superar el subtotal ni dejar valores negativos. Se vuelve a calcular el impuesto sobre el valor con descuento.

#### RF31 — Registrar pago

- **Rol:** Cajero.
- **Función:** Registrar el pago completo de una factura, con el medio usado, el dinero recibido y el cajero.
- **Criterio:** Proponemos un pago por factura. No se acepta menos del total; si es efectivo, se calcula el cambio. Confirmar dos veces no registra otro pago. El pedido pasa a Facturado.

#### RF32 — Emitir comprobante

- **Rol:** Cajero.
- **Función:** Mostrar, imprimir o descargar el comprobante de un pago.
- **Criterio:** Debe mostrar número, fecha, productos, cantidades, subtotal, descuento, impuestos, total y medio de pago. Imprimirlo otra vez no crea otra venta.

### Reportes

#### RF33 — Ventas por periodo

- **Rol:** Administrador.
- **Función:** Consultar las ventas pagadas entre dos fechas.
- **Criterio:** El total debe coincidir con los pagos de esas fechas. No se suman pedidos cancelados ni facturas sin pagar. Si no hubo ventas, se muestra cero.

#### RF34 — Productos más vendidos

- **Rol:** Administrador.
- **Función:** Consultar cuáles productos se vendieron más entre dos fechas.
- **Criterio:** Se suman las unidades de pedidos pagados y se ordenan de mayor a menor. No se cuentan los pedidos cancelados.

#### RF35 — Consumo de inventario

- **Rol:** Administrador.
- **Función:** Consultar cuántos insumos se consumieron entre dos fechas.
- **Criterio:** La cantidad debe coincidir con los movimientos marcados como consumo. Cada insumo se muestra con su unidad; no se mezclan, por ejemplo, kilos con litros.

#### RF36 — Ocupación de mesas

- **Rol:** Administrador.
- **Función:** Consultar cuánto tiempo estuvieron ocupadas las mesas.
- **Criterio:** Proponemos dividir los minutos ocupados, desde que se abre el pedido hasta que se libera la mesa, entre los minutos habilitados del periodo. Se muestra el horario usado. Si no hubo tiempo habilitado, no se hace la división.

#### RF37 — Indicadores financieros

- **Rol:** Administrador.
- **Función:** Consultar un resumen de los ingresos registrados.
- **Criterio:** Se muestran las ventas cobradas, la cantidad de ventas y el promedio por venta. Si no hubo ventas, el promedio queda sin calcular. No se muestra ganancia si no tenemos los datos de costos.

### Reservas

#### RF38 — Registrar reservas

- **Rol:** Administrador y mesero.
- **Función:** Guardar una reserva con nombre y contacto del cliente, número de personas, fecha y horario.
- **Criterio:** Queda Confirmada si hay una mesa adecuada. Se rechaza un horario pasado, con el fin antes del inicio o que se cruce con otra reserva. La mesa se asigna mediante RF15.

#### RF39 — Modificar reservas

- **Rol:** Administrador y mesero.
- **Función:** Cambiar el contacto, el horario o la mesa de una reserva Confirmada.
- **Criterio:** Se revisan de nuevo capacidad y disponibilidad. Si el cambio no se puede hacer, la reserva conserva sus datos anteriores.

#### RF40 — Cancelar reservas

- **Rol:** Administrador y mesero.
- **Función:** Cancelar una reserva Confirmada y guardar el motivo y el responsable.
- **Criterio:** Queda Cancelada y su horario vuelve a estar disponible. No se borra el historial ni se cambian otras reservas.

#### RF41 — Consultar reservas

- **Rol:** Administrador y mesero.
- **Función:** Consultar las reservas por fecha, mesa o estado.
- **Criterio:** Se muestran contacto, personas, horario y estado según los filtros elegidos. Solo los roles autorizados pueden ver los datos de contacto.

#### RF42 — Registrar llegada

- **Rol:** Mesero.
- **Función:** Registrar que llegaron los clientes de una reserva Confirmada y comenzar su atención.
- **Criterio:** La mesa debe estar libre. La reserva se relaciona con el pedido y pasa a Atendida; la mesa queda ocupada. La llegada no se registra dos veces.

### Dashboard

#### RF43 — Consultar resumen administrativo

- **Rol:** Administrador.
- **Función:** Mostrar al administrador un resumen de ventas del día, pedidos activos, mesas ocupadas, reservas y avisos de inventario.
- **Criterio:** Cada dato coincide con la consulta de su módulo para la misma fecha. Se muestra cuándo se actualizó la información.

#### RF44 — Filtrar indicadores

- **Rol:** Administrador.
- **Función:** Elegir un periodo para los datos históricos y abrir el detalle de los indicadores.
- **Criterio:** Ventas y reservas cambian según las fechas elegidas. Pedidos activos, mesas ocupadas y avisos se identifican como datos del momento actual. Al abrir el detalle se mantienen los filtros que correspondan.

## Relación entre los documentos

Esta tabla muestra qué historia y qué caso de uso explican cada requisito. Nos sirve para revisar que ninguna función quede sin documentar.

| Requisitos | Historia | Caso de uso | Tema |
| --- | --- | --- | --- |
| RF01, RF02, RF03, RF04 | HU01 | CU01 | Administrar cuentas |
| RF05 | HU02 | CU02 | Iniciar sesión |
| RF06 | HU03 | CU03 | Recuperar acceso |
| RF07, RF08, RF09, RF10 | HU04 | CU04 | Administrar el menú |
| RF11 | HU05 | CU05 | Controlar disponibilidad del menú |
| RF12, RF13 | HU06 | CU06 | Administrar mesas |
| RF14, RF16 | HU07 | CU07 | Consultar y liberar mesas |
| RF17, RF18, RF19 | HU08 | CU08 | Crear y editar pedidos |
| RF20 | HU09 | CU09 | Cancelar pedidos |
| RF21 | HU10 | CU10 | Enviar pedidos a cocina |
| RF22 | HU11 | CU11 | Seguir la preparación y entrega |
| RF23, RF24 | HU12 | CU12 | Registrar insumos y entradas |
| RF25 | HU13 | CU13 | Registrar consumo de insumos |
| RF26, RF27 | HU14 | CU14 | Consultar inventario y alertas |
| RF28, RF29, RF30 | HU15 | CU15 | Preparar la factura |
| RF31, RF32 | HU16 | CU16 | Registrar pago y comprobante |
| RF33, RF34 | HU17 | CU17 | Consultar ventas y productos |
| RF35, RF36 | HU18 | CU18 | Consultar consumo y ocupación |
| RF37 | HU19 | CU19 | Consultar indicadores financieros |
| RF15, RF38, RF39 | HU20 | CU20 | Registrar y modificar reservas |
| RF40, RF41, RF42 | HU21 | CU21 | Consultar, cancelar y atender reservas |
| RF43, RF44 | HU22 | CU22 | Consultar dashboard |

Puedes consultar las [historias de usuario](01-historias-de-usuario.md), los [casos de uso](02-casos-de-uso.md) y los [requerimientos no funcionales](04-requerimientos-no-funcionales.md).

## Lo que falta acordar

- Confirmar las propuestas de inventario, reservas y dashboard y sus permisos.
- Revisar la desactivación de cuentas y productos, el pedido único por mesa y las reglas para editar o cancelar pedidos.
- Confirmar si seguiremos registrando el inventario manualmente o si más adelante se trabajará con recetas.
- Definir el horario del restaurante, la duración de las reservas y qué hacer si los clientes llegan tarde o no llegan. Por ahora, la cancelación será manual.
- Elegir los medios de pago, las tasas para el ejercicio, las reglas de descuento y los datos del comprobante.
- Definir cómo llegará el enlace de recuperación de contraseña y confirmar sus 15 minutos de duración. También debemos revisar el cierre de sesiones anteriores después de recuperar la cuenta y quién registrará la llegada de reservas.
- Acordar los datos y la cantidad de usuarios que usaremos en las pruebas.

Se mantienen las exclusiones del [alcance](../01-documento-de-inicio/alcance.md): plataformas externas de pago, aplicación móvil independiente, sistemas contables externos, plataformas de domicilios e inteligencia artificial.
