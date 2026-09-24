# Requerimientos funcionales

Esta es la primera versión documental del primer corte. Describe el comportamiento esperado del futuro sistema; no representa funciones programadas ni pruebas ejecutadas. Se basa en el alcance y los objetivos del repositorio y en la guía «Proyecto de semestre» compartida por el equipo.

Se conservan los identificadores RF01–RF22 y RF28–RF37 de la guía. RF23–RF27 completan como propuesta el módulo de inventario, cuyo detalle falta en la guía. RF38–RF44 desarrollan como propuesta reservas y dashboard. Las validaciones, permisos detallados y reglas operativas aquí definidas son una propuesta del equipo pendiente de revisión con la docente. No se ha realizado una validación con un restaurante real.

## Alcance y lectura

Un requerimiento funcional describe una acción que el sistema debe permitir realizar. Los criterios de aceptación indican cómo comprobarla cuando comience el desarrollo. Esta carpeta documenta los nueve módulos; el cronograma queda pendiente para el final.

- [Historias de usuario](01-historias-de-usuario.md)
- [Casos de uso](02-casos-de-uso.md)
- [Requerimientos no funcionales](04-requerimientos-no-funcionales.md)
- [Alcance del proyecto](../01-documento-de-inicio/alcance.md)

## Actores y permisos propuestos

| Rol | Acciones previstas |
| --- | --- |
| Administrador | Gestionar cuentas, roles, menú, mesas e inventario; consultar reportes y dashboard; registrar, modificar, consultar y cancelar reservas; autorizar descuentos o cancelaciones excepcionales. |
| Mesero | Consultar menú y mesas; registrar, editar, enviar y seguir pedidos; registrar entrega; gestionar reservas y liberar mesas. |
| Cocinero | Consultar pedidos enviados y cambiar su preparación a En preparación y Listo. |
| Cajero | Consultar pedidos entregados, generar facturas, aplicar descuentos autorizados y registrar pagos y comprobantes. |
| Usuario registrado | Iniciar sesión y recuperar su propia contraseña. |

El cliente del restaurante recibe la atención, pero no tiene una cuenta ni acceso directo en esta versión. Para funciones sensibles no se presupone que el administrador pueda suplantar al cajero o mesero: la matriz define los permisos propuestos. Una decisión diferente deberá actualizar estos documentos.

## Reglas que conectan los módulos

1. **Historial:** eliminar usuarios o productos significa desactivarlos cuando tienen operaciones asociadas. Los datos anteriores se conservan.
2. **Pedidos:** se propone un pedido activo por mesa. El pedido guarda el precio de cada línea; un cambio posterior del menú no modifica ese precio.
3. **Estados:** Pendiente → En preparación → Listo → Entregado → Facturado. Enviar a cocina registra el envío, pero no inicia por sí mismo la preparación. Un pedido enviado y todavía Pendiente puede corregirse; cocina debe ver la versión vigente. La aceptación de preparación y la edición se validan contra el mismo estado para impedir cambios simultáneos incompatibles.
4. **Cancelación:** se propone Cancelado como estado terminal adicional para representar RF20. Si inició preparación, requiere autorización del administrador. No se permite cancelar un pedido facturado con esta función.
5. **Inventario:** la primera propuesta registra entradas y consumos manualmente por el administrador. No incluye descuento automático por receta porque la guía no define recetas ni equivalencias. Una cancelación no repone por sí sola insumos consumidos. Una corrección se registra como movimiento compensatorio con motivo, nunca reescribiendo el historial.
6. **Facturación:** para el ejercicio se propone subtotal = suma de cantidad × precio; base = subtotal − descuento; impuesto = base × tasa configurada; total = base + impuesto. Se redondea a dos decimales. Las tasas y el formato definitivo se validarán con la docente. Es una factura interna académica; no se incluye integración de facturación electrónica ni se afirma validez fiscal.
7. **Pago:** se propone un pago completo por factura y una factura por pedido. Los medios se registran sin conexión con pasarelas externas. El estado Facturado se aplica al confirmar el pago. No se contemplan pagos divididos, crédito ni devoluciones en esta versión.
8. **Mesas:** libre, ocupada y reservada son estados operativos. Una reserva futura bloquea su intervalo, no toda la jornada. La mesa se libera explícitamente al terminar la atención y cerrar sus pedidos.
9. **Reservas:** RF15 asigna la mesa dentro del proceso de RF38/RF39. Es una sola reserva. Se propone guardar inicio y fin; dos intervalos se solapan si inicio A < fin B y fin A > inicio B. Un intervalo que empieza exactamente al terminar otro no se solapa. Capacidad, ocupación actual y conflictos se validan antes de confirmar. Si la mesa está ocupada, no se confirma una llegada hasta que esté libre.
10. **Concurrencia:** doble clic, reintentos o dos usuarios simultáneos no deben generar pagos, envíos o reservas duplicadas. Si una operación falla, no debe dejar saldos o estados parcialmente actualizados.
11. **Reportes:** las ventas se contabilizan al registrarse el pago. Se propone usar la zona horaria del restaurante (America/Bogota si opera en Cali), incluyendo desde las 00:00 de la fecha inicial hasta antes de las 00:00 del día posterior a la fecha final.
12. **Seguridad:** cada operación valida sesión y permisos en el servidor; ocultar botones no sustituye esta validación.

## Catálogo de requisitos

### Usuarios y roles

#### RF01 — Registrar usuarios

- **Actor:** Administrador.
- **Requisito:** Registrar un usuario con nombre, correo único, rol y estado.
- **Criterio de aceptación:** Con datos válidos se crea una sola cuenta; si falta un dato o el correo ya existe, se informa el error sin guardar.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF02 — Editar usuarios

- **Actor:** Administrador.
- **Requisito:** Modificar nombre, correo y estado de una cuenta existente.
- **Criterio de aceptación:** Los cambios se conservan al consultar nuevamente; se rechaza un correo perteneciente a otra cuenta.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF03 — Eliminar usuarios

- **Actor:** Administrador.
- **Requisito:** Retirar el acceso de un usuario conservando sus operaciones anteriores.
- **Criterio de aceptación:** Se propone baja lógica: la cuenta queda inactiva y no puede acceder; sus pedidos y registros conservan la referencia al responsable. No se permite desactivar el último administrador activo.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF04 — Gestionar roles

- **Actor:** Administrador.
- **Requisito:** Asignar uno de los roles administrador, mesero, cocinero o cajero y aplicar los permisos definidos.
- **Criterio de aceptación:** Un mesero no puede gestionar cuentas ni facturar, tampoco mediante una solicitud directa; un cambio de rol aplica en la siguiente operación protegida.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF05 — Iniciar sesión

- **Actor:** Todos los roles.
- **Requisito:** Validar las credenciales de una cuenta activa y permitir el acceso según su rol.
- **Criterio de aceptación:** Las credenciales válidas permiten entrar; las incorrectas o de una cuenta inactiva no crean sesión ni revelan cuál dato falló.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF06 — Recuperar contraseña

- **Actor:** Usuario registrado.
- **Requisito:** Restablecer una contraseña mediante un mecanismo que compruebe la identidad del titular.
- **Criterio de aceptación:** Se propone enlace de un solo uso con vigencia de 15 minutos: un enlace usado o vencido se rechaza, y la contraseña anterior deja de funcionar. El mensaje de solicitud no revela si el correo existe.
- **Origen:** Guía del proyecto; detalle propuesto.

### Menú

#### RF07 — Crear productos

- **Actor:** Administrador.
- **Requisito:** Registrar productos del menú con nombre, categoría, precio y disponibilidad.
- **Criterio de aceptación:** Un producto válido aparece en el menú; se rechaza un precio negativo o un producto sin nombre ni categoría.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF08 — Modificar productos

- **Actor:** Administrador.
- **Requisito:** Actualizar los datos de un producto existente.
- **Criterio de aceptación:** Los cambios aparecen en nuevas consultas; cambiar un precio no altera las líneas de pedidos ya guardadas.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF09 — Eliminar productos

- **Actor:** Administrador.
- **Requisito:** Retirar un producto del menú manteniendo su historial de ventas.
- **Criterio de aceptación:** Se propone desactivación: deja de ofrecerse para nuevos pedidos, pero permanece en pedidos y comprobantes anteriores.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF10 — Categorizar productos

- **Actor:** Administrador.
- **Requisito:** Asignar una categoría a cada producto y consultar el menú por categoría.
- **Criterio de aceptación:** Al filtrar por una categoría se muestran únicamente sus productos; no se acepta una categoría inexistente.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF11 — Gestionar disponibilidad

- **Actor:** Administrador.
- **Requisito:** Marcar productos como disponibles o no disponibles y mostrar su estado al personal.
- **Criterio de aceptación:** Un producto no disponible no se agrega ni se confirma para envío a cocina; la validación se repite al guardar.
- **Origen:** Guía del proyecto; detalle propuesto.

### Mesas

#### RF12 — Crear mesas

- **Actor:** Administrador.
- **Requisito:** Registrar una mesa con número único, capacidad y estado inicial libre.
- **Criterio de aceptación:** Una mesa válida aparece en la consulta; se rechazan números repetidos y capacidades que no sean enteros positivos.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF13 — Modificar mesas

- **Actor:** Administrador.
- **Requisito:** Actualizar los datos de una mesa sin afectar pedidos o reservas vigentes.
- **Criterio de aceptación:** Se rechaza una capacidad inferior a los comensales de una reserva activa asociada y un número ya usado.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF14 — Consultar estado de mesas

- **Actor:** Administrador y mesero.
- **Requisito:** Mostrar la capacidad y el estado libre, ocupada o reservada de cada mesa.
- **Criterio de aceptación:** La consulta coincide con los pedidos activos y las reservas del intervalo consultado; una reserva futura no bloquea todo el día.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF15 — Reservar mesas

- **Actor:** Administrador y mesero.
- **Requisito:** Asignar una mesa disponible a una reserva para un intervalo de fecha y hora.
- **Criterio de aceptación:** Se comprueba capacidad y ausencia de solapamiento antes de confirmar; dos solicitudes simultáneas no reservan la misma mesa en horarios superpuestos.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF16 — Liberar mesas

- **Actor:** Administrador y mesero.
- **Requisito:** Cambiar una mesa ocupada a libre cuando termina su atención.
- **Criterio de aceptación:** Se impide liberar una mesa con pedidos activos sin cancelar o facturar; una reserva futura permanece registrada.
- **Origen:** Guía del proyecto; detalle propuesto.

### Pedidos

#### RF17 — Crear pedido

- **Actor:** Mesero.
- **Requisito:** Crear un pedido asociado a una mesa libre, o a una mesa reservada para el cliente que registra su llegada, y al mesero responsable; la mesa pasa a ocupada.
- **Criterio de aceptación:** Se asigna un identificador y estado Pendiente; se propone un pedido activo por mesa, rechazando una segunda apertura simultánea.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF18 — Agregar productos

- **Actor:** Mesero.
- **Requisito:** Incluir productos disponibles con cantidad, precio unitario y observaciones.
- **Criterio de aceptación:** Solo se aceptan cantidades enteras positivas; cada línea conserva el precio vigente al agregarla y el total coincide con la suma de subtotales.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF19 — Modificar pedido

- **Actor:** Mesero.
- **Requisito:** Cambiar cantidades, observaciones o retirar productos mientras el pedido siga Pendiente.
- **Criterio de aceptación:** Se recalcula el total; una modificación de un pedido En preparación, Listo, Entregado o Facturado se rechaza según la regla inicial propuesta.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF20 — Cancelar pedido

- **Actor:** Mesero; administrador en excepciones.
- **Requisito:** Cancelar un pedido dejando fecha, responsable y motivo.
- **Criterio de aceptación:** Un pedido Pendiente puede cancelarse; uno iniciado en cocina requiere administrador y motivo. Un pedido Facturado no se cancela por esta función. No se elimina el historial ni se repone automáticamente un consumo ya realizado.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF21 — Enviar pedido a cocina

- **Actor:** Mesero.
- **Requisito:** Confirmar y enviar un pedido con al menos un producto disponible a la lista de cocina.
- **Criterio de aceptación:** Un pedido vacío o con producto no disponible se rechaza; repetir el envío no duplica el pedido en cocina. El envío conserva Pendiente hasta que el cocinero acepte su preparación.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF22 — Consultar y seguir estado

- **Actor:** Mesero, cocinero, cajero y administrador.
- **Requisito:** Consultar el estado del pedido y registrar los cambios autorizados de su atención.
- **Criterio de aceptación:** El cocinero cambia un pedido enviado de Pendiente a En preparación y luego a Listo; el mesero lo cambia a Entregado; el cobro lo deja Facturado. Se rechazan saltos y retrocesos no permitidos.
- **Origen:** Guía del proyecto; detalle propuesto.

### Inventario

#### RF23 — Registrar insumos

- **Actor:** Administrador.
- **Requisito:** Registrar insumos con código único, nombre, unidad y stock mínimo.
- **Criterio de aceptación:** No se repite el código; el stock mínimo no puede ser negativo y la unidad queda definida antes de registrar movimientos.
- **Origen:** Propuesta para validar.

#### RF24 — Registrar entradas

- **Actor:** Administrador.
- **Requisito:** Registrar entradas de insumos con cantidad positiva, fecha, responsable y referencia.
- **Criterio de aceptación:** El saldo aumenta exactamente en la cantidad registrada y se conserva el movimiento con su referencia.
- **Origen:** Propuesta para validar.

#### RF25 — Registrar consumos y salidas

- **Actor:** Administrador.
- **Requisito:** Registrar salidas o consumo de insumos con cantidad, motivo y referencia al pedido cuando corresponda.
- **Criterio de aceptación:** La cantidad positiva se descuenta una sola vez; se rechaza una salida superior a la existencia y se muestra el saldo disponible.
- **Origen:** Propuesta para validar.

#### RF26 — Consultar existencias

- **Actor:** Administrador.
- **Requisito:** Consultar saldos y movimientos por insumo y periodo.
- **Criterio de aceptación:** El saldo corresponde a entradas menos salidas y ajustes registrados; cada movimiento permite identificar a su responsable.
- **Origen:** Propuesta para validar.

#### RF27 — Alertar existencias bajas

- **Actor:** Administrador.
- **Requisito:** Identificar insumos cuyo saldo sea igual o inferior al mínimo definido.
- **Criterio de aceptación:** Un insumo bajo el umbral aparece en la consulta de alertas y deja de aparecer cuando su saldo supera el mínimo.
- **Origen:** Propuesta para validar.

### Facturación

#### RF28 — Generar factura

- **Actor:** Cajero.
- **Requisito:** Generar una factura interna a partir de un pedido Entregado, conservando el detalle y un número único.
- **Criterio de aceptación:** No se generan dos facturas para el mismo pedido; productos, cantidades y precios coinciden con el pedido. Emitirla por sí solo no marca el pedido como pagado.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF29 — Calcular impuestos

- **Actor:** Cajero.
- **Requisito:** Calcular impuestos usando las tasas configuradas para el ejercicio académico.
- **Criterio de aceptación:** Se muestra base, tasa e importe; la misma regla de redondeo a dos decimales se aplica al cálculo y al comprobante. Las tasas deben definirse antes de ejecutar pruebas.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF30 — Aplicar descuentos

- **Actor:** Cajero con autorización del administrador.
- **Requisito:** Aplicar un descuento permitido antes de registrar el pago.
- **Criterio de aceptación:** El descuento se registra con motivo y autorización; no supera el subtotal ni deja valores negativos y recalcula la base del impuesto.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF31 — Registrar pago

- **Actor:** Cajero.
- **Requisito:** Registrar el pago completo de una factura con medio, importe y responsable.
- **Criterio de aceptación:** Se propone un solo pago por factura: se rechaza un importe inferior al total; en efectivo se calcula cambio. Repetir la confirmación no duplica el pago y el pedido pasa a Facturado.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF32 — Emitir comprobante

- **Actor:** Cajero.
- **Requisito:** Mostrar e imprimir o descargar un comprobante del pago registrado.
- **Criterio de aceptación:** El comprobante contiene número, fecha, detalle, subtotal, descuento, impuestos, total y medio de pago; reimprimir no crea otra venta.
- **Origen:** Guía del proyecto; detalle propuesto.

### Reportes

#### RF33 — Ventas por periodo

- **Actor:** Administrador.
- **Requisito:** Consultar ventas cobradas en un intervalo de fechas.
- **Criterio de aceptación:** El total coincide con los pagos registrados dentro del intervalo y excluye pedidos cancelados y facturas sin pago; un periodo sin datos devuelve total cero.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF34 — Productos más vendidos

- **Actor:** Administrador.
- **Requisito:** Listar productos por cantidad vendida en un periodo.
- **Criterio de aceptación:** Se suman unidades de pedidos pagados y se ordenan de mayor a menor; no se cuentan pedidos cancelados.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF35 — Consumo de inventario

- **Actor:** Administrador.
- **Requisito:** Consultar salidas por consumo de cada insumo durante un periodo.
- **Criterio de aceptación:** El resultado coincide con los movimientos de tipo consumo y separa las cantidades por unidad, sin sumar unidades incompatibles.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF36 — Ocupación de mesas

- **Actor:** Administrador.
- **Requisito:** Consultar el uso de las mesas durante un periodo.
- **Criterio de aceptación:** Se propone medir minutos ocupados entre apertura de pedido y liberación, divididos por minutos habilitados del periodo; se informa el horario usado y se evita dividir por cero.
- **Origen:** Guía del proyecto; detalle propuesto.

#### RF37 — Indicadores financieros

- **Actor:** Administrador.
- **Requisito:** Consultar indicadores calculados a partir de ventas registradas.
- **Criterio de aceptación:** Se propone mostrar ventas cobradas, cantidad de ventas y ticket promedio; con cero ventas el promedio se muestra como no disponible. No se presenta utilidad sin datos de costos.
- **Origen:** Guía del proyecto; detalle propuesto.

### Reservas

#### RF38 — Registrar reservas

- **Actor:** Administrador y mesero.
- **Requisito:** Registrar nombre de contacto, medio de contacto, cantidad de personas e intervalo de la reserva.
- **Criterio de aceptación:** Se asigna un identificador y estado Confirmada solo si existe mesa adecuada; se rechaza un intervalo pasado, invertido o solapado. Utiliza RF15 para asignar mesa.
- **Origen:** Propuesta para validar.

#### RF39 — Modificar reservas

- **Actor:** Administrador y mesero.
- **Requisito:** Cambiar datos, horario o mesa de una reserva Confirmada.
- **Criterio de aceptación:** Se vuelve a validar capacidad y disponibilidad; si falla la nueva asignación se conserva íntegra la reserva anterior.
- **Origen:** Propuesta para validar.

#### RF40 — Cancelar reservas

- **Actor:** Administrador y mesero.
- **Requisito:** Cancelar una reserva Confirmada guardando motivo y responsable.
- **Criterio de aceptación:** La reserva queda Cancelada y su intervalo se libera sin borrar el historial ni afectar otras reservas.
- **Origen:** Propuesta para validar.

#### RF41 — Consultar reservas

- **Actor:** Administrador y mesero.
- **Requisito:** Consultar reservas por fecha, mesa y estado.
- **Criterio de aceptación:** La lista muestra contacto, personas, intervalo y estado; los filtros solo devuelven coincidencias y los roles no autorizados no acceden a los contactos.
- **Origen:** Propuesta para validar.

#### RF42 — Registrar llegada

- **Actor:** Mesero.
- **Requisito:** Marcar una reserva Confirmada como Atendida cuando llega el cliente y ocupar la mesa.
- **Criterio de aceptación:** Se valida que la mesa esté libre al momento de llegada; se asocia la reserva con el pedido de atención y no se registra la llegada dos veces.
- **Origen:** Propuesta para validar.

### Dashboard

#### RF43 — Consultar resumen administrativo

- **Actor:** Administrador.
- **Requisito:** Mostrar ventas cobradas del día, pedidos activos, mesas ocupadas, reservas del día y alertas de inventario.
- **Criterio de aceptación:** Cada indicador coincide con la consulta de su módulo para la misma fecha y muestra la hora de actualización.
- **Origen:** Propuesta para validar.

#### RF44 — Filtrar indicadores

- **Actor:** Administrador.
- **Requisito:** Actualizar los indicadores históricos por periodo y acceder al detalle correspondiente.
- **Criterio de aceptación:** Ventas y reservas respetan el periodo; pedidos activos, mesas ocupadas y alertas se identifican como estado actual. El detalle conserva los filtros aplicables.
- **Origen:** Propuesta para validar.

## Trazabilidad

Esta tabla permite relacionar cada requisito con la necesidad del usuario y el flujo que lo desarrolla.

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

## Decisiones por validar antes de programar

- Confirmar RF23–RF27 de inventario y RF38–RF44 de reservas y dashboard, incluidos los permisos propuestos.
- Confirmar baja lógica, un pedido activo por mesa, edición solo en Pendiente y el estado adicional Cancelado.
- Confirmar si inventario seguirá siendo manual o se incorporarán recetas y consumo automático en una revisión del alcance.
- Definir duración de reservas, horario del restaurante y política de retrasos o inasistencia. La versión inicial solicita inicio y fin y permite cancelación manual; no cancela automáticamente por tardanza.
- Definir tasas académicas, medios de pago, reglas de descuento y formato del comprobante. No se fija una tasa legal por suposición.
- Confirmar el medio de recuperación de cuenta y la vigencia propuesta de 15 minutos, la invalidación de sesiones tras recuperar la contraseña y quién registrará la llegada de reservas.
- Acordar datos de prueba, volumen y carga para comprobar los requisitos no funcionales.

## Fuera del alcance inicial

Se mantienen las exclusiones del [alcance](../01-documento-de-inicio/alcance.md): pasarelas externas de pago, aplicación móvil independiente, sistemas contables externos, domicilios mediante plataformas externas y automatización con inteligencia artificial.
