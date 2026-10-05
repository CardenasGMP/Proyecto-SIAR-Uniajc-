# Arquitectura de sistemas:

Para el desarrollo de SIAR se utilizará una arquitectura cliente-servidor organizada en tres capas. Esta arquitectura permitirá que los usuarios interactúen con el sistema mediante una interfaz, mientras que las operaciones se procesan en una capa central y la información se conserva en una base de datos.

La arquitectura estará compuesta por:

1. Capa de presentación.

2. Capa de lógica de negocio.

3. Capa de datos.

Esta organización cumple el requerimiento RNF07, que establece que el proyecto debe presentar una separación identificable entre la presentación, la lógica del sistema y el acceso a los datos.

## Representación general

Usuarios de SIAR

↓ Capa de presentación

↓ Capa de lógica de negocio

↓ Capa de datos

↓ Base de datos

Los usuarios de SIAR serán el administrador, el mesero, el cocinero y el cajero. Cada usuario tendrá acceso únicamente a las funciones correspondientes al rol asignado.

## Capa de presentación

La capa de presentación corresponde a la interfaz mediante la cual los usuarios consultan información y realizan operaciones en SIAR.

Esta capa será responsable de:

- Mostrar los formularios y las opciones disponibles.

- Recibir la información ingresada por el usuario.

- Enviar las solicitudes para ser procesadas.

- Mostrar los resultados de las operaciones.

- Presentar mensajes de validación o error.

- Adaptar las opciones visibles al rol autenticado.

- Permitir la consulta de información desde diferentes tamaños de pantalla.

Las opciones disponibles dependerán del rol:

- El administrador gestionará usuarios, roles, productos y mesas, y consultará los reportes.

- El mesero consultará las mesas, registrará pedidos y los enviará a cocina.

- El cocinero consultará los pedidos enviados y actualizará su estado.

- El cajero preparará las facturas, registrará los pagos y emitirá los comprobantes.

La capa de presentación no realizará directamente operaciones sobre la base de datos ni contendrá las principales reglas del negocio.

## Capa de lógica de negocio

La capa de lógica de negocio será la parte central de SIAR. Su función será recibir las solicitudes de la capa de presentación, aplicar las reglas correspondientes y coordinar las operaciones necesarias.

Esta capa será responsable de:

- Validar los datos recibidos.

- Verificar la identidad y el rol del usuario.

- Controlar los permisos para cada operación.

- Gestionar los usuarios y sus roles.

- Administrar productos y categorías.

- Controlar la disponibilidad de los productos.

- Gestionar las mesas y las reservas.

- Crear, modificar y cancelar pedidos.

- Enviar los pedidos a cocina.

- Controlar los estados de los pedidos.

- Preparar facturas.

- Calcular impuestos y descuentos.

- Registrar pagos.

- Gestionar la información del inventario.

- Preparar los datos requeridos para los reportes.

En esta capa también se controlará el flujo de estados de los pedidos:

Pendiente

↓ En preparación

↓ Listo

↓ Entregado

↓ Facturado

La lógica de negocio determinará qué cambios puede realizar cada rol. Por ejemplo, el mesero registra el pedido, el cocinero actualiza su preparación y el pago permite dejarlo como facturado.

También se aplicarán reglas como la protección de contraseñas, el control de acceso por roles y el registro de las operaciones importantes, de acuerdo con los requerimientos no funcionales RNF04, RNF05 y RNF06.

## Capa de datos

La capa de datos será responsable de almacenar, consultar y actualizar la información utilizada por SIAR.

Esta capa permitirá:

- Registrar información.

- Consultar registros por identificador.

- Actualizar datos existentes.

- Eliminar o desactivar registros.

- Consultar información relacionada.

- Aplicar filtros.

- Obtener los datos necesarios para los reportes.

- Mantener las relaciones entre las entidades.

La base de datos conservará la información correspondiente a:

- Roles.

- Usuarios.

- Mesas.

- Reservas.

- Categorías de productos.

- Productos.

- Pedidos.

- Detalles de pedidos.

- Facturas.

- Descuentos.

- Pagos.

- Inventario.

- Movimientos de inventario.

Estas entidades corresponden al modelo entidad-relación y al diagrama de clases elaborados para SIAR. Los reportes se generarán mediante consultas sobre la información almacenada, por lo que no será necesario conservar cada reporte como un registro independiente.

La capa de datos no decidirá si una operación está permitida. Por ejemplo, podrá consultar los pedidos asociados con una mesa, pero la capa de lógica de negocio determinará si la mesa puede liberarse.

## Organización por módulos

Aunque SIAR utilizará una arquitectura sencilla de tres capas, sus funciones se organizarán mediante módulos para facilitar el desarrollo y el mantenimiento.

## Usuarios y seguridad

Este módulo manejará:

- Usuarios.

- Roles.

- Inicio de sesión.

- Recuperación de contraseña.

- Control de acceso.

## Menú y productos

Este módulo manejará:

- Productos.

- Categorías.

- Precios.

- Disponibilidad.

## Mesas y reservas

Este módulo manejará:

- Registro de mesas.

- Capacidad de las mesas.

- Estado de las mesas.

- Reservas.

- Liberación de mesas.

## Pedidos

Este módulo manejará:

- Creación de pedidos.

- Productos y cantidades.

- Modificación y cancelación.

- Envío a cocina.

- Estado de preparación.

## Inventario

Este módulo manejará:

- Insumos.

- Cantidades disponibles.

- Entradas y salidas.

- Movimientos del inventario.

- Consultas de consumo.

## Facturación y pagos

Este módulo manejará:

- Facturas.

- Impuestos.

- Descuentos.

- Pagos.

- Comprobantes.

## Reportes

Este módulo permitirá consultar:

- Ventas por periodo.

- Productos más vendidos.

- Consumo de inventario.

- Ocupación de mesas.

- Indicadores financieros.

## Flujo general de una operación

El funcionamiento general de SIAR será el siguiente:

1. El usuario inicia una operación desde la interfaz.

2. La capa de presentación envía la solicitud.

3. La capa de lógica de negocio recibe y valida la información.

4. El sistema verifica el rol y los permisos del usuario.

5. La lógica de negocio solicita la información necesaria a la capa de datos.

6. La capa de datos consulta o modifica la base de datos.

7. El resultado regresa a la capa de lógica de negocio.

8. La capa de presentación muestra el resultado al usuario.

La lógica de pedidos comprobará la información, registrará el pedido, asociará los productos seleccionados y solicitará la actualización correspondiente en la base de datos.

## Justificación de la arquitectura

La arquitectura cliente-servidor de tres capas fue seleccionada porque:

1. Es sencilla de comprender e implementar.

2. Es común en sistemas administrativos para restaurantes.

3. Cumple el requerimiento de arquitectura en capas.

4. Se ajusta al alcance académico de SIAR.

5. Mantiene una separación clara entre interfaz, lógica y datos.

6. Permite desarrollar los módulos progresivamente.

7. Facilita el mantenimiento del sistema.

8. Permite realizar pruebas sobre la lógica de negocio.

9. Evita que la interfaz acceda directamente a la base de datos.

10. Facilita el control de los roles y permisos.

11. Permite centralizar las reglas de los pedidos y la facturación.

12. Reduce la complejidad del despliegue.

13. No requiere dividir el sistema en aplicaciones independientes
