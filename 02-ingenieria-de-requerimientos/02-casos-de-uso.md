# CASOS DE USO:

Los casos de uso describen la interacción entre los usuarios y el Sistema Integral de Administración para Restaurantes, SIAR, para ejecutar las funciones establecidas en los requerimientos funcionales del proyecto.

Cada caso de uso identifica el actor principal, la historia de usuario relacionada, los requerimientos funcionales correspondientes, las condiciones necesarias para iniciar, el flujo principal, los flujos alternativos y el resultado de la operación.

El acceso a las funciones del sistema depende del rol asignado al usuario. Los roles definidos para SIAR son Administrador, Cajero, Mesero y Cocinero. Todas las operaciones deben cumplir los requerimientos no funcionales del proyecto, especialmente el control de acceso por roles, el cifrado de contraseñas y el registro de auditoría.

## CU-01. Administrar usuarios

**Actor:** Administrador

**Historia relacionada:** HU-01

**Requerimientos:** RF01, RF02 y RF03

**Precondición:** El administrador debe haber iniciado sesión.

**Flujo principal:**

1. El administrador ingresa al módulo de usuarios.

2. El sistema muestra los usuarios registrados.

3. El administrador selecciona registrar, editar o eliminar un usuario.

4. El administrador completa o modifica la información solicitada.

5. El administrador confirma la operación.

6. El sistema procesa la solicitud y muestra el resultado.

**Flujo alternativo:** Si la operación no puede completarse, el sistema informa el problema y no guarda los cambios.

**Postcondición:** El usuario queda registrado, actualizado o eliminado, según la opción seleccionada.

## CU-02. Gestionar roles

**Actor:** Administrador

**Historia relacionada:** HU-02

**Requerimiento:** RF04

**Precondición:** El usuario debe estar registrado en el sistema.

**Flujo principal:**

1. El administrador consulta los usuarios registrados.

2. El administrador selecciona un usuario.

3. El sistema muestra el rol actual.

4. El administrador asigna el rol Administrador, Cajero, Mesero o Cocinero.

5. El administrador confirma la asignación.

6. El sistema guarda el cambio e informa el resultado.

**Flujo alternativo:** Si el rol no puede actualizarse, el sistema conserva la información anterior e informa el problema.

**Postcondición:** El usuario queda asociado con el rol seleccionado.

## CU-03. Iniciar sesión

**Actor:** Usuario del sistema

**Historia relacionada:** HU-03

**Requerimiento:** RF05

**Precondición:** El usuario debe estar registrado.

**Flujo principal:**

1. El usuario abre la pantalla de inicio de sesión.

2. El usuario ingresa sus datos de acceso.

3. El sistema verifica la información.

4. El sistema inicia la sesión.

5. El sistema muestra las funciones disponibles según el rol.

**Flujo alternativo:** Si los datos no son válidos, el sistema informa que no fue posible iniciar sesión.

**Postcondición:** El usuario queda autenticado y puede acceder a las funciones correspondientes a su rol.

## CU-04. Recuperar contraseña

**Actor:** Usuario registrado

**Historia relacionada:** HU-04

**Requerimiento:** RF06

**Precondición:** El usuario debe tener una cuenta registrada.

**Flujo principal:**

1. El usuario selecciona la opción de recuperar contraseña.

2. El sistema solicita la información de la cuenta.

3. El usuario ingresa la información solicitada.

4. El sistema procesa la solicitud de recuperación.

5. El usuario registra una nueva contraseña.

6. El sistema guarda la nueva contraseña de forma cifrada.

7. El sistema informa que la contraseña fue actualizada.

**Flujo alternativo:** Si la recuperación no puede procesarse, el sistema informa el problema al usuario.

**Postcondición:** El usuario puede iniciar sesión con la nueva contraseña.

## CU-05. Administrar productos

**Actor:** Administrador

**Historia relacionada:** HU-05

**Requerimientos:** RF07, RF08 y RF09

**Precondición:** El administrador debe haber iniciado sesión.

**Flujo principal:**

1. El administrador ingresa al módulo de menú.

2. El sistema muestra los productos registrados.

3. El administrador selecciona crear, modificar o eliminar un producto.

4. El administrador completa o modifica la información correspondiente.

5. El administrador confirma la operación.

6. El sistema procesa la solicitud.

7. El sistema actualiza el menú y muestra el resultado.

**Flujo alternativo:** Si la operación no puede completarse, el sistema informa el problema y conserva la información anterior.

**Postcondición:** El producto queda creado, modificado o eliminado, según la opción seleccionada.

## CU-06. Categorizar productos

**Actor:** Administrador

**Historia relacionada:** HU-06

**Requerimiento:** RF10

**Precondición:** El producto debe estar registrado.

**Flujo principal:**

1. El administrador ingresa al módulo de menú.

2. El administrador selecciona un producto.

3. El sistema muestra las opciones de categoría.

4. El administrador selecciona la categoría correspondiente.

5. El administrador confirma la operación.

6. El sistema guarda la categoría y organiza el producto.

**Flujo alternativo:** Si la categoría no puede asignarse, el sistema informa el problema y conserva la información anterior.

**Postcondición:** El producto queda asociado con la categoría seleccionada.

## CU-07. Gestionar disponibilidad de productos

**Actor:** Administrador

**Historia relacionada:** HU-07

**Requerimiento:** RF11

**Precondición:** El producto debe estar registrado.

**Flujo principal:**

1. El administrador ingresa al módulo de menú.

2. El administrador selecciona un producto.

3. El sistema muestra su disponibilidad actual.

4. El administrador cambia el estado de disponibilidad.

5. El administrador confirma la operación.

6. El sistema guarda el nuevo estado y actualiza el menú.

**Flujo alternativo:** Si la disponibilidad no puede actualizarse, el sistema conserva el estado anterior e informa el problema.

**Postcondición:** El producto queda identificado como disponible o no disponible

## CU-08. Administrar mesas

**Actor:** Administrador

**Historia relacionada:** HU-08

**Requerimientos:** RF12 y RF13

**Precondición:** El administrador debe haber iniciado sesión.

**Flujo principal:**

1. El administrador ingresa al módulo de mesas.

2. El sistema muestra las mesas registradas.

3. El administrador selecciona crear o modificar una mesa.

4. El administrador completa o modifica la información solicitada.

5. El administrador confirma la operación.

6. El sistema guarda la información y muestra el resultado.

**Flujo alternativo:** Si la operación no puede completarse, el sistema informa el problema y no guarda los cambios.

**Postcondición:** La mesa queda creada o modificada, según la opción seleccionada.

## CU-09. Consultar estado de las mesas

**Actor:** Mesero

**Historia relacionada:** HU-09

**Requerimiento:** RF14

**Precondición:** El mesero debe haber iniciado sesión.

**Flujo principal:**

1. El mesero ingresa al módulo de mesas.

2. El sistema consulta las mesas registradas.

3. El sistema muestra el estado de cada mesa.

4. El mesero revisa la información.

5. El mesero puede actualizar la consulta.

**Flujo alternativo:** Si no existe información disponible, el sistema informa que no hay mesas para mostrar.

**Postcondición:** El mesero puede conocer el estado actual de las mesas.

## CU-10. Reservar y liberar mesas

**Actor:** Mesero

**Historia relacionada:** HU-10

**Requerimientos:** RF15 y RF16

**Precondición:** La mesa debe estar registrada en el sistema.

**Flujo principal:**

1. El mesero ingresa al módulo de mesas.

2. El sistema muestra el estado de las mesas.

3. El mesero selecciona reservar o liberar una mesa.

4. Si selecciona reservar, registra la información correspondiente.

5. Si selecciona liberar, elige la mesa que desea dejar disponible.

6. El mesero confirma la operación.

7. El sistema guarda la información y actualiza el estado de la mesa.

**Flujo alternativo:** Si la mesa no puede reservarse o liberarse, el sistema informa el problema y conserva su estado anterior.

**Postcondición:** La mesa queda reservada o disponible, según la operación realizada.

## CU-11. Crear pedidos y agregar productos

**Actor:** Mesero

**Historia relacionada:** HU-11

**Requerimientos:** RF17 y RF18

**Precondición:** El mesero debe haber iniciado sesión y deben existir productos registrados en el menú.

**Flujo principal:**

1. El mesero ingresa al módulo de pedidos.

2. El mesero selecciona la opción de crear un pedido.

3. El sistema muestra el formulario correspondiente.

4. El mesero registra la información del pedido.

5. El sistema crea el pedido.

6. El mesero selecciona los productos y sus cantidades.

7. El mesero confirma la operación.

8. El sistema agrega los productos y muestra el pedido actualizado.

**Flujo alternativo:** Si el pedido no puede crearse o un producto no puede agregarse, el sistema informa el problema.

**Postcondición:** El pedido queda creado con los productos seleccionados

## CU-12. Modificar o cancelar pedidos

**Actor:** Mesero

**Historia relacionada:** HU-12

**Requerimientos:** RF19 y RF20

**Precondición:** El pedido debe estar registrado.

**Flujo principal:**

1. El mesero ingresa al módulo de pedidos.

2. El sistema muestra los pedidos registrados.

3. El mesero selecciona un pedido.

4. El mesero elige modificar o cancelar.

5. Si selecciona modificar, cambia la información necesaria.

6. Si selecciona cancelar, confirma la cancelación.

7. El sistema procesa la operación.

8. El sistema muestra el resultado.

**Flujo alternativo:** Si la modificación o cancelación no puede realizarse, el sistema informa el problema y conserva la información anterior.

**Postcondición:** El pedido queda modificado o cancelado, según la opción seleccionada.

## CU-13. Enviar pedidos a cocina

**Actor:** Mesero

**Actor secundario:** Cocinero

**Historia relacionada:** HU-13

**Requerimiento:** RF21

**Precondición:** El pedido debe estar registrado.

**Flujo principal:**

1. El mesero ingresa al módulo de pedidos.

2. El mesero selecciona un pedido.

3. El mesero elige la opción de enviar a cocina.

4. El sistema procesa el envío.

5. El sistema muestra el pedido en el área de cocina.

6. El cocinero consulta el pedido recibido.

**Flujo alternativo:** Si el pedido no puede enviarse, el sistema informa el problema al mesero.

**Postcondición:** El pedido queda disponible en cocina para su preparación.

## CU-14. Consultar estado del pedido

**Actores:** Mesero y cocinero

**Historia relacionada:** HU-14

**Requerimiento:** RF22

**Precondición:** El pedido debe estar registrado.

**Flujo principal:**

1. El usuario ingresa al módulo de pedidos.

2. El sistema muestra los pedidos registrados.

3. El usuario selecciona un pedido.

4. El sistema muestra la información y su estado actual.

5. El usuario consulta el estado del pedido.

**Estados disponibles:**

- Pendiente.

- En preparación.

- Listo.

- Entregado.

- Facturado.

**Flujo alternativo:** Si el pedido no está disponible, el sistema informa que no fue posible consultar su estado.

**Postcondición:** El usuario puede conocer el estado actual del pedido.

## CU-15. Preparar la factura

**Actor:** Cajero

**Historia relacionada:** HU-15

**Requerimientos:** RF28, RF29 y RF30

**Precondición:** Debe existir información de un pedido para generar la factura.

**Flujo principal:**

1. El cajero ingresa al módulo de facturación.

2. El cajero selecciona el pedido.

3. El sistema consulta la información correspondiente.

4. El cajero selecciona la opción de generar factura.

5. El sistema genera la factura y calcula los impuestos.

6. Si corresponde, el cajero registra un descuento.

7. El sistema aplica el descuento y actualiza el valor.

8. El sistema muestra la factura.

**Flujo alternativo:** Si la factura, los impuestos o el descuento no pueden procesarse, el sistema informa el problema al cajero.

**Postcondición:** La factura queda generada con los impuestos y descuentos correspondientes.

## CU-16. Registrar pago y emitir comprobante

**Actor:** Cajero

**Historia relacionada:** HU-16

**Requerimientos:** RF31 y RF32

**Precondición:** Debe existir una factura.

**Flujo principal:**

1. El cajero consulta la factura.

2. El cajero selecciona la opción de registrar pago.

3. El cajero ingresa la información correspondiente.

4. El cajero confirma la operación.

5. El sistema guarda el pago.

6. El cajero selecciona la opción de emitir comprobante.

7. El sistema genera y muestra el comprobante.

8. El cajero entrega el comprobante al cliente.

**Flujo alternativo:** Si el pago o el comprobante no pueden procesarse, el sistema informa el problema al cajero.

**Postcondición:** El pago queda registrado y el comprobante queda generado.

## CU-17. Consultar ventas y productos más vendidos

**Actor:** Administrador

**Historia relacionada:** HU-17

**Requerimientos:** RF33 y RF34

**Precondición:** El administrador debe haber iniciado sesión.

**Flujo principal:**

1. El administrador ingresa al módulo de reportes.

2. El administrador selecciona la consulta de ventas por periodo.

3. El administrador indica el periodo que desea consultar.

4. El sistema muestra las ventas correspondientes.

5. El administrador selecciona la consulta de productos más vendidos.

6. El sistema procesa la información registrada.

7. El sistema muestra los productos más vendidos.

**Flujo alternativo:** Si no existe información para la consulta, el sistema informa que no hay datos disponibles.

**Postcondición:** El administrador puede consultar las ventas del periodo y los productos más vendidos.

## CU-18. Consultar consumo de inventario y ocupación de mesas

**Actor:** Administrador

**Historia relacionada:** HU-18

**Requerimientos:** RF35 y RF36

**Precondición:** Debe existir información sobre el consumo de inventario y el uso de las mesas.

**Flujo principal:**

1. El administrador ingresa al módulo de reportes.

2. El administrador selecciona la consulta de consumo de inventario.

3. El administrador establece los datos de la consulta.

4. El sistema muestra la información disponible.

5. El administrador selecciona la consulta de ocupación de mesas.

6. El administrador establece los datos de la consulta.

7. El sistema muestra la información sobre la ocupación.

**Flujo alternativo:** Si no existe información para alguna consulta, el sistema informa que no hay datos disponibles.

**Postcondición:** El administrador puede consultar el consumo de inventario y la ocupación de las mesas.

## CU-19. Consultar indicadores financieros

**Actor:** Administrador

**Historia relacionada:** HU-19

**Requerimiento:** RF37

**Precondición:** El administrador debe haber iniciado sesión.

**Flujo principal:**

1. El administrador ingresa al módulo de reportes.

2. El administrador selecciona la opción de indicadores financieros.

3. El sistema consulta la información disponible.

4. El sistema procesa los indicadores.

5. El sistema muestra los resultados.

6. El administrador revisa la información financiera.

**Flujo alternativo:** Si no existe información financiera, el sistema informa que no hay datos disponibles.

**Postcondición:** El administrador puede consultar los indicadores financieros del restaurante.
