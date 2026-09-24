# Casos de uso

Cada caso de uso describe la interacción entre una persona y SIAR para cumplir una tarea. Incluye condiciones previas, flujo principal, situaciones alternativas y resultado esperado. Los diagramas se elaborarán en el apartado de Modelado.

Los permisos, estados y supuestos se detallan en [requerimientos funcionales](03-requerimientos-funcionales.md). Salvo inicio y recuperación de sesión, todas las acciones requieren autenticación y autorización. Si la sesión vence o el rol no corresponde, el sistema rechaza la acción sin modificar datos. Un fallo al guardar debe conservar el estado anterior y permitir un reintento seguro.

Los casos que agrupan registrar, modificar o cancelar presentan variantes de una misma tarea; no exigen realizar todas las variantes en cada ejecución.

## CU01 — Administrar cuentas

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU01.
- **Requisitos:** RF01, RF02, RF03, RF04.
- **Disparador:** el actor solicita administrar cuentas.
- **Precondiciones:** Existe una sesión de administrador activo.

### Flujo principal

1. El administrador abre Usuarios y selecciona registrar, editar, desactivar o asignar rol.
2. El sistema muestra el formulario o los datos actuales.
3. El administrador completa los datos y confirma.
4. El sistema valida correo, rol y la permanencia de un administrador activo.
5. El sistema guarda la operación y registra al responsable.

### Alternativas y errores

Correo repetido o dato incompleto: señalar el campo y conservar el formulario sin guardar. Último administrador: rechazar su baja o cambio de rol.

### Resultado esperado

La cuenta y sus permisos quedan actualizados; las operaciones históricas permanecen.

## CU02 — Iniciar sesión

- **Actor principal:** usuario del restaurante.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU02.
- **Requisitos:** RF05.
- **Disparador:** el actor solicita iniciar sesión.
- **Precondiciones:** La cuenta está registrada; el usuario aún no tiene una sesión válida.

### Flujo principal

1. El usuario abre el inicio de sesión.
2. Escribe su correo y contraseña.
3. El sistema comprueba credenciales y estado de la cuenta.
4. El sistema crea la sesión y presenta las funciones permitidas.

### Alternativas y errores

Credenciales incorrectas o cuenta inactiva: mostrar un mensaje general y mantener el acceso cerrado.

### Resultado esperado

Se establece una sesión asociada al usuario y su rol.

## CU03 — Recuperar acceso

- **Actor principal:** usuario registrado.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU03.
- **Requisitos:** RF06.
- **Disparador:** el actor solicita recuperar acceso.
- **Precondiciones:** El usuario dispone del medio de recuperación vinculado a su cuenta.

### Flujo principal

1. El usuario solicita recuperación con su correo.
2. El sistema muestra una respuesta general y, si corresponde, envía el enlace.
3. El usuario abre el enlace y registra una nueva contraseña.
4. El sistema valida identidad, vigencia y uso del enlace.
5. El sistema reemplaza el hash de contraseña, invalida el enlace y las sesiones anteriores.

### Alternativas y errores

Enlace vencido o usado: impedir el cambio y permitir otra solicitud. Fallo de envío: permitir reintento sin exponer si existe la cuenta.

### Resultado esperado

La nueva contraseña permite ingresar y la anterior deja de funcionar.

## CU04 — Administrar el menú

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU04.
- **Requisitos:** RF07, RF08, RF09, RF10.
- **Disparador:** el actor solicita administrar el menú.
- **Precondiciones:** Existe una sesión de administrador y categorías disponibles para asignar.

### Flujo principal

1. El administrador entra al menú y selecciona la operación.
2. Completa o modifica nombre, categoría, precio y disponibilidad.
3. El sistema valida los datos.
4. El administrador confirma.
5. El sistema guarda o desactiva el producto y actualiza la consulta.

### Alternativas y errores

Precio negativo, categoría inexistente o datos incompletos: no guardar y mostrar el campo por corregir. Un producto con historial se desactiva, no se borra físicamente.

### Resultado esperado

El menú refleja el cambio y conserva los datos de ventas anteriores.

## CU05 — Controlar disponibilidad del menú

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU05.
- **Requisitos:** RF11.
- **Disparador:** el actor solicita controlar disponibilidad del menú.
- **Precondiciones:** Existe un producto del menú y una sesión de administrador.

### Flujo principal

1. El administrador selecciona el producto.
2. Indica disponible o no disponible.
3. El sistema guarda el estado.
4. El personal consulta el menú actualizado.
5. Al agregar o enviar un pedido el sistema vuelve a comprobar el estado.

### Alternativas y errores

Si la disponibilidad cambia mientras se arma un pedido, el envío se rechaza e informa qué línea debe corregirse.

### Resultado esperado

El estado actualizado rige para nuevas confirmaciones de pedidos.

## CU06 — Administrar mesas

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU06.
- **Requisitos:** RF12, RF13.
- **Disparador:** el actor solicita administrar mesas.
- **Precondiciones:** Existe una sesión de administrador.

### Flujo principal

1. El administrador entra a Mesas.
2. Selecciona registrar o editar.
3. Introduce número y capacidad.
4. El sistema valida unicidad, capacidad y reservas vigentes.
5. El sistema guarda y muestra la mesa.

### Alternativas y errores

Número repetido o capacidad inválida: rechazar. Si la reducción de capacidad contradice una reserva activa, mantener la capacidad anterior.

### Resultado esperado

La mesa queda registrada o actualizada sin invalidar reservas.

## CU07 — Consultar y liberar mesas

- **Actor principal:** mesero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU07.
- **Requisitos:** RF14, RF16.
- **Disparador:** el actor solicita consultar y liberar mesas.
- **Precondiciones:** Existe una sesión autorizada; para liberar, la mesa está ocupada.

### Flujo principal

1. El mesero consulta las mesas.
2. El sistema muestra capacidad y estado actual, y reservas para el intervalo consultado.
3. El mesero elige liberar una mesa al finalizar la atención.
4. El sistema comprueba que no queden pedidos activos sin cerrar.
5. El sistema registra la liberación y conserva las reservas futuras.

### Alternativas y errores

Pedidos sin cancelar o facturar: impedir liberación. Mesa ya libre: informar sin duplicar la operación.

### Resultado esperado

La consulta refleja el estado y, si procede, la mesa queda libre.

## CU08 — Crear y editar pedidos

- **Actor principal:** mesero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU08.
- **Requisitos:** RF17, RF18, RF19.
- **Disparador:** el actor solicita crear y editar pedidos.
- **Precondiciones:** El mesero tiene sesión; existe mesa disponible o reserva del cliente que llega y productos en el menú.

### Flujo principal

1. El mesero selecciona la mesa y abre el pedido.
2. El sistema asigna identificador, responsable y estado Pendiente, y ocupa la mesa.
3. El mesero agrega productos, cantidades y observaciones.
4. El sistema valida disponibilidad y calcula subtotales.
5. El mesero corrige las líneas necesarias y guarda.
6. El sistema conserva los precios de las líneas y confirma el total.

### Alternativas y errores

Mesa con otro pedido activo: abrir el pedido existente. Cantidad inválida o producto no disponible: rechazar esa operación. Si cocina ya inició preparación, impedir la modificación.

### Resultado esperado

Existe un pedido Pendiente con detalle y total consistentes.

## CU09 — Cancelar pedidos

- **Actor principal:** mesero.
- **Actores de apoyo:** administrador para la autorización indicada.
- **Historia relacionada:** HU09.
- **Requisitos:** RF20.
- **Disparador:** el actor solicita cancelar pedidos.
- **Precondiciones:** Existe un pedido no facturado y una sesión autorizada.

### Flujo principal

1. El mesero selecciona el pedido y solicita cancelación.
2. El sistema comprueba el estado.
3. Si comenzó la preparación, el administrador autoriza la excepción.
4. Se registra el motivo.
5. El sistema marca la cancelación y la comunica en la consulta de cocina.

### Alternativas y errores

Sin autorización para un pedido iniciado: rechazar. Pedido facturado: impedir cancelación por esta función. Consumo ya registrado: mantenerlo; cualquier ajuste requiere movimiento separado con motivo.

### Resultado esperado

El pedido queda cancelado con trazabilidad; no genera cobro ni reposición automática.

## CU10 — Enviar pedidos a cocina

- **Actor principal:** mesero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU10.
- **Requisitos:** RF21.
- **Disparador:** el actor solicita enviar pedidos a cocina.
- **Precondiciones:** Existe un pedido Pendiente con líneas guardadas.

### Flujo principal

1. El mesero revisa el pedido y confirma el envío.
2. El sistema valida mesa, cantidades y disponibilidad actual.
3. El sistema registra fecha de envío.
4. El pedido aparece una sola vez en la lista de cocina, aún Pendiente.

### Alternativas y errores

Pedido vacío o producto no disponible: impedir envío y señalar el motivo. Repetición del envío: devolver el pedido ya enviado.

### Resultado esperado

El pedido queda disponible para que el cocinero inicie su preparación.

## CU11 — Seguir la preparación y entrega

- **Actor principal:** cocinero.
- **Actores de apoyo:** mesero para entrega y cajero en el posterior cobro.
- **Historia relacionada:** HU11.
- **Requisitos:** RF22.
- **Disparador:** el actor solicita seguir la preparación y entrega.
- **Precondiciones:** Existe un pedido enviado a cocina y no cancelado.

### Flujo principal

1. El cocinero consulta la lista de pedidos enviados.
2. Selecciona un pedido Pendiente y lo marca En preparación.
3. Al terminar lo marca Listo.
4. El mesero consulta el estado y lo marca Entregado al servirlo.
5. El sistema registra responsable y hora en cada transición.
6. el posterior pago lo cambia a Facturado.

### Alternativas y errores

Transición no permitida, rol incorrecto o cambio simultáneo: rechazar y mostrar el estado vigente. Un pedido cancelado no continúa el flujo.

### Resultado esperado

El estado e historial permiten conocer el avance real del pedido.

## CU12 — Registrar insumos y entradas

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU12.
- **Requisitos:** RF23, RF24.
- **Disparador:** el actor solicita registrar insumos y entradas.
- **Precondiciones:** Existe una sesión de administrador; para una entrada el insumo ya está registrado.

### Flujo principal

1. El administrador registra código, nombre, unidad y mínimo del insumo.
2. El sistema valida los datos y crea el registro con saldo inicial cero.
3. El administrador registra cantidad de entrada y referencia.
4. El sistema guarda el movimiento con fecha y responsable.
5. La existencia aumenta según la cantidad registrada.

### Alternativas y errores

Código duplicado o cantidad no positiva: impedir el registro. Una existencia inicial se carga como entrada, no editando directamente el saldo.

### Resultado esperado

El insumo y sus entradas pueden consultarse y el saldo queda actualizado.

## CU13 — Registrar consumo de insumos

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU13.
- **Requisitos:** RF25.
- **Disparador:** el actor solicita registrar consumo de insumos.
- **Precondiciones:** Existe un insumo con saldo y una sesión de administrador.

### Flujo principal

1. El administrador elige el insumo.
2. Registra cantidad, motivo y referencia de pedido cuando aplica.
3. El sistema verifica saldo suficiente.
4. El administrador confirma.
5. El sistema guarda una sola salida y actualiza el saldo de forma conjunta.

### Alternativas y errores

Stock insuficiente: no guardar salida ni cambiar saldo. Reenvío de la misma operación: mostrar el movimiento existente.

### Resultado esperado

Se conserva la salida con responsable y el saldo no queda negativo.

## CU14 — Consultar inventario y alertas

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU14.
- **Requisitos:** RF26, RF27.
- **Disparador:** el actor solicita consultar inventario y alertas.
- **Precondiciones:** Existe una sesión de administrador.

### Flujo principal

1. El administrador consulta el inventario.
2. Filtra un insumo o periodo de movimientos.
3. El sistema muestra saldo, unidad, entradas y salidas.
4. El administrador abre la consulta de alertas.
5. El sistema lista insumos con saldo igual o inferior a su mínimo.

### Alternativas y errores

Sin movimientos o sin alertas: mostrar lista vacía con explicación. Los saldos de diferentes unidades se presentan separados.

### Resultado esperado

Se dispone de información de existencias y necesidades de reposición.

## CU15 — Preparar la factura

- **Actor principal:** cajero.
- **Actores de apoyo:** administrador para la autorización indicada.
- **Historia relacionada:** HU15.
- **Requisitos:** RF28, RF29, RF30.
- **Disparador:** el actor solicita preparar la factura.
- **Precondiciones:** Existe un pedido Entregado sin factura y están definidas las tasas académicas de impuesto.

### Flujo principal

1. El cajero selecciona el pedido.
2. El sistema recupera líneas y precios guardados.
3. Si aplica descuento, el administrador lo autoriza y se registra su motivo.
4. El sistema calcula subtotal, descuento, base, impuesto y total.
5. El cajero confirma.
6. El sistema guarda la factura interna con número único y estado pendiente de pago.

### Alternativas y errores

Pedido no entregado: rechazar. Factura existente: mostrarla sin duplicarla. Descuento inválido o sin autorización: impedirlo. Tasa no definida: impedir emisión hasta configurar.

### Resultado esperado

Se conserva una factura interna pendiente de pago con detalle verificable.

## CU16 — Registrar pago y comprobante

- **Actor principal:** cajero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU16.
- **Requisitos:** RF31, RF32.
- **Disparador:** el actor solicita registrar pago y comprobante.
- **Precondiciones:** Existe una factura pendiente de pago y una sesión de cajero.

### Flujo principal

1. El cajero abre la factura e indica medio de pago e importe recibido.
2. El sistema comprueba el total y calcula cambio si es efectivo.
3. El cajero confirma el pago.
4. El sistema registra el pago y cambia el pedido a Facturado en una misma operación.
5. El cajero muestra, imprime o descarga el comprobante.

### Alternativas y errores

Importe insuficiente: rechazar. Factura ya pagada o doble clic: no registrar otro pago. Si falla la impresión, permitir reimpresión sin cobrar de nuevo.

### Resultado esperado

La factura queda pagada y existe un comprobante consultable; la liberación de mesa se realiza mediante RF16.

## CU17 — Consultar ventas y productos

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU17.
- **Requisitos:** RF33, RF34.
- **Disparador:** el actor solicita consultar ventas y productos.
- **Precondiciones:** Existe una sesión de administrador.

### Flujo principal

1. El administrador selecciona fecha inicial y final.
2. El sistema valida el intervalo.
3. Consulta pagos confirmados del periodo.
4. Muestra total de ventas y productos ordenados por unidades vendidas.
5. El administrador revisa el detalle que respalda los totales.

### Alternativas y errores

Fechas invertidas: solicitar corrección. Sin ventas: mostrar cero y lista vacía.

### Resultado esperado

Los reportes reflejan las ventas cobradas dentro del periodo.

## CU18 — Consultar consumo y ocupación

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU18.
- **Requisitos:** RF35, RF36.
- **Disparador:** el actor solicita consultar consumo y ocupación.
- **Precondiciones:** Existe sesión de administrador; el reporte de ocupación requiere horarios habilitados y eventos de apertura y liberación.

### Flujo principal

1. El administrador elige reporte y periodo.
2. El sistema valida las fechas.
3. Para consumo agrupa salidas de consumo por insumo y unidad.
4. Para ocupación calcula tiempo ocupado dentro del horario y periodo seleccionados.
5. El sistema muestra los datos y la fórmula usada.

### Alternativas y errores

Sin horarios habilitados: indicar ocupación no calculable. Sin consumos: mostrar cero por insumo consultado. Un pedido activo aporta tiempo solo hasta la hora de consulta.

### Resultado esperado

Se muestran cifras verificables sin mezclar unidades ni dividir por cero.

## CU19 — Consultar indicadores financieros

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU19.
- **Requisitos:** RF37.
- **Disparador:** el actor solicita consultar indicadores financieros.
- **Precondiciones:** Existe una sesión de administrador.

### Flujo principal

1. El administrador selecciona el periodo.
2. El sistema recupera ventas pagadas.
3. Calcula el total cobrado y el número de ventas.
4. Divide el total por la cantidad para obtener el ticket promedio.
5. Muestra los indicadores y su periodo.

### Alternativas y errores

Sin ventas: total y cantidad son cero; ticket promedio no disponible. No hay costos registrados: no mostrar utilidad como si estuviera calculada.

### Resultado esperado

Los indicadores coinciden con el reporte de ventas.

## CU20 — Registrar y modificar reservas

- **Actor principal:** mesero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU20.
- **Requisitos:** RF15, RF38, RF39.
- **Disparador:** el actor solicita registrar y modificar reservas.
- **Precondiciones:** Existe una sesión autorizada y mesas registradas.

### Flujo principal

1. El mesero captura contacto, personas, fecha y horas de inicio y fin.
2. El sistema busca mesas con capacidad suficiente y sin solapamientos.
3. El mesero selecciona la mesa y confirma.
4. El sistema vuelve a comprobar disponibilidad y guarda la reserva.
5. Para modificar, el mesero edita una reserva Confirmada y el sistema repite las validaciones antes de sustituir la asignación.

### Alternativas y errores

Sin mesa disponible: informar y permitir elegir otro intervalo. Conflicto simultáneo: rechazar la nueva reserva. Modificación inválida: conservar los datos anteriores.

### Resultado esperado

Queda una reserva Confirmada asociada a una mesa e intervalo; RF15 representa esta misma asignación, no una segunda reserva.

## CU21 — Consultar, cancelar y atender reservas

- **Actor principal:** mesero.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU21.
- **Requisitos:** RF40, RF41, RF42.
- **Disparador:** el actor solicita consultar, cancelar y atender reservas.
- **Precondiciones:** Existe una sesión autorizada; cancelar o atender requiere una reserva Confirmada.

### Flujo principal

1. El mesero consulta reservas por fecha, mesa o estado.
2. Selecciona una reserva.
3. Si cancela, registra motivo y confirma.
4. el sistema libera su intervalo.
5. Si registra llegada, el sistema valida mesa libre y asocia la reserva con la apertura del pedido.
6. El sistema cambia la reserva a Atendida y la mesa a ocupada.

### Alternativas y errores

Reserva ya cancelada o atendida: impedir repetir transición. Mesa todavía ocupada: no confirmar llegada; ofrecer revisión de otra mesa mediante modificación de reserva.

### Resultado esperado

La reserva conserva su historial y refleja la cancelación o atención, sin duplicar el pedido.

## CU22 — Consultar dashboard

- **Actor principal:** administrador.
- **Actores de apoyo:** no requiere un actor adicional.
- **Historia relacionada:** HU22.
- **Requisitos:** RF43, RF44.
- **Disparador:** el actor solicita consultar dashboard.
- **Precondiciones:** Existe una sesión de administrador.

### Flujo principal

1. El administrador abre el dashboard.
2. El sistema muestra ventas, pedidos activos, mesas ocupadas, reservas y alertas con hora de actualización.
3. El administrador selecciona un periodo.
4. El sistema actualiza ventas y reservas y distingue las cifras de estado actual.
5. El administrador abre el detalle de un indicador con sus filtros aplicables.

### Alternativas y errores

Sin datos: mostrar cero o sin información según el indicador. Error al cargar un módulo: indicar que ese dato no está disponible, sin presentarlo como cero.

### Resultado esperado

El resumen coincide con los módulos de origen y permite consultar su detalle.

## Conexión entre casos

CU08 crea el pedido; CU10 lo envía; CU11 registra preparación y entrega; CU15 genera la factura; CU16 registra el pago; CU07 libera la mesa. CU09 permite la cancelación en los estados autorizados. CU20 y CU21 gestionan la reserva y su atención vinculada con CU08. El consumo de inventario se registra mediante CU13 y no se descuenta automáticamente al crear el pedido.
