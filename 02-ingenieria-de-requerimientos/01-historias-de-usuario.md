# Historias de usuario

Las historias expresan qué necesita una persona del sistema y para qué. Los criterios de aceptación describen resultados observables para revisarlos y convertirlos en pruebas más adelante.

Esta versión cubre todos los módulos y corresponde únicamente a documentación. Las reglas son propuestas para revisión; los identificadores RF remiten al [catálogo funcional](03-requerimientos-funcionales.md), que detalla su origen y las decisiones pendientes.

## Prioridad propuesta

Alta: operación, acceso y cobro; Media: consultas de gestión, alertas y resumen. La prioridad sirve para ordenar el trabajo futuro.

## HU01 — Administrar cuentas

Como **administrador**, quiero **registrar, actualizar y desactivar las cuentas del personal**, para **mantener el acceso de cada trabajador de acuerdo con su vinculación al restaurante**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF01, RF02, RF03, RF04.
- **Caso de uso:** CU01 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF01:** Con datos válidos se crea una sola cuenta; si falta un dato o el correo ya existe, se informa el error sin guardar.
2. **RF02:** Los cambios se conservan al consultar nuevamente; se rechaza un correo perteneciente a otra cuenta.
3. **RF03:** Se propone baja lógica: la cuenta queda inactiva y no puede acceder; sus pedidos y registros conservan la referencia al responsable. No se permite desactivar el último administrador activo.
4. **RF04:** Un mesero no puede gestionar cuentas ni facturar, tampoco mediante una solicitud directa; un cambio de rol aplica en la siguiente operación protegida.

## HU02 — Iniciar sesión

Como **usuario del restaurante**, quiero **ingresar con mi cuenta**, para **acceder a las funciones de mi rol**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF05.
- **Caso de uso:** CU02 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF05:** Las credenciales válidas permiten entrar; las incorrectas o de una cuenta inactiva no crean sesión ni revelan cuál dato falló.

## HU03 — Recuperar acceso

Como **usuario registrado**, quiero **restablecer mi contraseña**, para **recuperar el acceso si la olvido**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF06.
- **Caso de uso:** CU03 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF06:** Se propone enlace de un solo uso con vigencia de 15 minutos: un enlace usado o vencido se rechaza, y la contraseña anterior deja de funcionar. El mensaje de solicitud no revela si el correo existe.

## HU04 — Administrar el menú

Como **administrador**, quiero **crear, editar, categorizar y retirar productos del menú**, para **mantener actualizada la oferta del restaurante**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF07, RF08, RF09, RF10.
- **Caso de uso:** CU04 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF07:** Un producto válido aparece en el menú; se rechaza un precio negativo o un producto sin nombre ni categoría.
2. **RF08:** Los cambios aparecen en nuevas consultas; cambiar un precio no altera las líneas de pedidos ya guardadas.
3. **RF09:** Se propone desactivación: deja de ofrecerse para nuevos pedidos, pero permanece en pedidos y comprobantes anteriores.
4. **RF10:** Al filtrar por una categoría se muestran únicamente sus productos; no se acepta una categoría inexistente.

## HU05 — Controlar disponibilidad del menú

Como **administrador**, quiero **indicar cuáles productos están disponibles**, para **evitar que se ofrezcan productos que no pueden prepararse**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF11.
- **Caso de uso:** CU05 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF11:** Un producto no disponible no se agrega ni se confirma para envío a cocina; la validación se repite al guardar.

## HU06 — Administrar mesas

Como **administrador**, quiero **registrar y actualizar las mesas y su capacidad**, para **organizar los espacios de atención**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF12, RF13.
- **Caso de uso:** CU06 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF12:** Una mesa válida aparece en la consulta; se rechazan números repetidos y capacidades que no sean enteros positivos.
2. **RF13:** Se rechaza una capacidad inferior a los comensales de una reserva activa asociada y un número ya usado.

## HU07 — Consultar y liberar mesas

Como **mesero**, quiero **consultar el estado de las mesas y liberar las que terminaron su atención**, para **asignar correctamente los espacios a los clientes**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF14, RF16.
- **Caso de uso:** CU07 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF14:** La consulta coincide con los pedidos activos y las reservas del intervalo consultado; una reserva futura no bloquea todo el día.
2. **RF16:** Se impide liberar una mesa con pedidos activos sin cancelar o facturar; una reserva futura permanece registrada.

## HU08 — Crear y editar pedidos

Como **mesero**, quiero **registrar los productos solicitados por una mesa y corregirlos antes de prepararlos**, para **enviar a cocina un pedido completo**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF17, RF18, RF19.
- **Caso de uso:** CU08 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF17:** Se asigna un identificador y estado Pendiente; se propone un pedido activo por mesa, rechazando una segunda apertura simultánea.
2. **RF18:** Solo se aceptan cantidades enteras positivas; cada línea conserva el precio vigente al agregarla y el total coincide con la suma de subtotales.
3. **RF19:** Se recalcula el total; una modificación de un pedido En preparación, Listo, Entregado o Facturado se rechaza según la regla inicial propuesta.

## HU09 — Cancelar pedidos

Como **mesero**, quiero **cancelar un pedido cuando el cliente desiste**, para **evitar que siga procesándose una solicitud cancelada**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF20.
- **Caso de uso:** CU09 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF20:** Un pedido Pendiente puede cancelarse; uno iniciado en cocina requiere administrador y motivo. Un pedido Facturado no se cancela por esta función. No se elimina el historial ni se repone automáticamente un consumo ya realizado.

## HU10 — Enviar pedidos a cocina

Como **mesero**, quiero **enviar el pedido confirmado al área de cocina**, para **iniciar su preparación sin repetir información**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF21.
- **Caso de uso:** CU10 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF21:** Un pedido vacío o con producto no disponible se rechaza; repetir el envío no duplica el pedido en cocina. El envío conserva Pendiente hasta que el cocinero acepte su preparación.

## HU11 — Seguir la preparación y entrega

Como **cocinero**, quiero **consultar los pedidos enviados y actualizar su preparación**, para **coordinar con el mesero la entrega al cliente**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF22.
- **Caso de uso:** CU11 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF22:** El cocinero cambia un pedido enviado de Pendiente a En preparación y luego a Listo; el mesero lo cambia a Entregado; el cobro lo deja Facturado. Se rechazan saltos y retrocesos no permitidos.

## HU12 — Registrar insumos y entradas

Como **administrador**, quiero **registrar insumos y las cantidades que ingresan**, para **mantener un control de las existencias**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF23, RF24.
- **Caso de uso:** CU12 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF23:** No se repite el código; el stock mínimo no puede ser negativo y la unidad queda definida antes de registrar movimientos.
2. **RF24:** El saldo aumenta exactamente en la cantidad registrada y se conserva el movimiento con su referencia.

## HU13 — Registrar consumo de insumos

Como **administrador**, quiero **registrar las salidas y el consumo de insumos**, para **conocer lo utilizado y evitar saldos incorrectos**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF25.
- **Caso de uso:** CU13 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF25:** La cantidad positiva se descuenta una sola vez; se rechaza una salida superior a la existencia y se muestra el saldo disponible.

## HU14 — Consultar inventario y alertas

Como **administrador**, quiero **consultar existencias, movimientos e insumos con nivel bajo**, para **planear la reposición de insumos**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF26, RF27.
- **Caso de uso:** CU14 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF26:** El saldo corresponde a entradas menos salidas y ajustes registrados; cada movimiento permite identificar a su responsable.
2. **RF27:** Un insumo bajo el umbral aparece en la consulta de alertas y deja de aparecer cuando su saldo supera el mínimo.

## HU15 — Preparar la factura

Como **cajero**, quiero **generar la factura de un pedido entregado con sus impuestos y descuentos autorizados**, para **presentar al cliente un cobro correcto**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF28, RF29, RF30.
- **Caso de uso:** CU15 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF28:** No se generan dos facturas para el mismo pedido; productos, cantidades y precios coinciden con el pedido. Emitirla por sí solo no marca el pedido como pagado.
2. **RF29:** Se muestra base, tasa e importe; la misma regla de redondeo a dos decimales se aplica al cálculo y al comprobante. Las tasas deben definirse antes de ejecutar pruebas.
3. **RF30:** El descuento se registra con motivo y autorización; no supera el subtotal ni deja valores negativos y recalcula la base del impuesto.

## HU16 — Registrar pago y comprobante

Como **cajero**, quiero **registrar el pago y entregar el comprobante**, para **cerrar la venta y dejar constancia del cobro**.

- **Prioridad propuesta:** Alta.
- **Requisitos relacionados:** RF31, RF32.
- **Caso de uso:** CU16 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF31:** Se propone un solo pago por factura: se rechaza un importe inferior al total; en efectivo se calcula cambio. Repetir la confirmación no duplica el pago y el pedido pasa a Facturado.
2. **RF32:** El comprobante contiene número, fecha, detalle, subtotal, descuento, impuestos, total y medio de pago; reimprimir no crea otra venta.

## HU17 — Consultar ventas y productos

Como **administrador**, quiero **consultar las ventas y los productos más vendidos por periodo**, para **reconocer cómo se comporta la demanda**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF33, RF34.
- **Caso de uso:** CU17 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF33:** El total coincide con los pagos registrados dentro del intervalo y excluye pedidos cancelados y facturas sin pago; un periodo sin datos devuelve total cero.
2. **RF34:** Se suman unidades de pedidos pagados y se ordenan de mayor a menor; no se cuentan pedidos cancelados.

## HU18 — Consultar consumo y ocupación

Como **administrador**, quiero **consultar el consumo de insumos y el uso de las mesas**, para **revisar el aprovechamiento de los recursos**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF35, RF36.
- **Caso de uso:** CU18 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF35:** El resultado coincide con los movimientos de tipo consumo y separa las cantidades por unidad, sin sumar unidades incompatibles.
2. **RF36:** Se propone medir minutos ocupados entre apertura de pedido y liberación, divididos por minutos habilitados del periodo; se informa el horario usado y se evita dividir por cero.

## HU19 — Consultar indicadores financieros

Como **administrador**, quiero **consultar ventas cobradas, cantidad de ventas y ticket promedio**, para **tener un resumen de los ingresos registrados**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF37.
- **Caso de uso:** CU19 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF37:** Se propone mostrar ventas cobradas, cantidad de ventas y ticket promedio; con cero ventas el promedio se muestra como no disponible. No se presenta utilidad sin datos de costos.

## HU20 — Registrar y modificar reservas

Como **mesero**, quiero **registrar reservas y modificar sus datos cuando el cliente lo solicite**, para **organizar la disponibilidad de las mesas**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF15, RF38, RF39.
- **Caso de uso:** CU20 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF15:** Se comprueba capacidad y ausencia de solapamiento antes de confirmar; dos solicitudes simultáneas no reservan la misma mesa en horarios superpuestos.
2. **RF38:** Se asigna un identificador y estado Confirmada solo si existe mesa adecuada; se rechaza un intervalo pasado, invertido o solapado. Utiliza RF15 para asignar mesa.
3. **RF39:** Se vuelve a validar capacidad y disponibilidad; si falla la nueva asignación se conserva íntegra la reserva anterior.

## HU21 — Consultar, cancelar y atender reservas

Como **mesero**, quiero **consultar las reservas, cancelarlas o registrar la llegada del cliente**, para **mantener organizada la atención prevista**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF40, RF41, RF42.
- **Caso de uso:** CU21 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF40:** La reserva queda Cancelada y su intervalo se libera sin borrar el historial ni afectar otras reservas.
2. **RF41:** La lista muestra contacto, personas, intervalo y estado; los filtros solo devuelven coincidencias y los roles no autorizados no acceden a los contactos.
3. **RF42:** Se valida que la mesa esté libre al momento de llegada; se asocia la reserva con el pedido de atención y no se registra la llegada dos veces.

## HU22 — Consultar dashboard

Como **administrador**, quiero **ver un resumen de la operación y filtrar los indicadores**, para **consultar rápidamente el estado del restaurante**.

- **Prioridad propuesta:** Media.
- **Requisitos relacionados:** RF43, RF44.
- **Caso de uso:** CU22 en [casos de uso](02-casos-de-uso.md).

### Criterios de aceptación

1. **RF43:** Cada indicador coincide con la consulta de su módulo para la misma fecha y muestra la hora de actualización.
2. **RF44:** Ventas y reservas respetan el periodo; pedidos activos, mesas ocupadas y alertas se identifican como estado actual. El detalle conserva los filtros aplicables.

## Revisión del equipo

Las historias que incluyen inventario, reservas y dashboard desarrollan propuestas que deben confirmarse con la docente. No se asignan nombres ni fechas de ejecución hasta que el equipo acuerde responsabilidades y complete el cronograma.
