# Patrones de diseño seleccionado:

Para el desarrollo de SIAR se seleccionaron los patrones Singleton, Facade y Observer. Se eligió un patrón de cada categoría principal: creacional, estructural y de comportamiento.

Estos patrones se consideran apropiados porque responden a necesidades concretas del sistema, son sencillos de implementar y se adaptan a la arquitectura cliente-servidor de tres capas seleccionada para el proyecto.

Los patrones permitirán centralizar la información compartida, simplificar procesos que requieren varias operaciones y mantener actualizada la información presentada a los usuarios.

## Patrón Singleton

**Categoría:** Creacional.

El patrón Singleton garantiza que un componente tenga una sola instancia durante la ejecución de la aplicación y proporciona un punto común para acceder a ella.

En SIAR, este patrón se utilizará para administrar información general que debe ser compartida por los diferentes módulos, como la sesión actual y la configuración básica de la aplicación.

El componente podrá conservar información como:

- Usuario autenticado.

- Rol asignado.

- Estado de la sesión.

- Preferencias generales de la aplicación.

- Configuración requerida por los módulos.

Cuando el usuario inicie sesión, el sistema almacenará la información necesaria en una única instancia. Los módulos podrán consultar esta instancia para conocer el usuario actual y adaptar las opciones disponibles.

La autorización de las operaciones no dependerá exclusivamente de esta instancia. Cada acción protegida deberá validar nuevamente los permisos correspondientes, de acuerdo con el control de acceso por roles establecido para SIAR.

## Patrón Facade

**Categoría:** Estructural.

El patrón Facade ofrece una interfaz sencilla para ejecutar procesos que requieren la participación de varios componentes internos.

En lugar de que la capa de presentación se comunique directamente con cada componente, la fachada recibe la solicitud y coordina las operaciones necesarias.

Este patrón se utilizará principalmente en los procesos de pedidos y facturación.

Para registrar un pedido pueden intervenir las siguientes operaciones:

1. Consultar la mesa seleccionada.

2. Consultar los productos del menú.

3. Verificar la disponibilidad de los productos.

4. Crear el pedido.

5. Agregar los productos y las cantidades.

6. Calcular el total.

7. Actualizar el estado de la mesa.

Una fachada de pedidos permitirá coordinar estas operaciones a través de un único punto de acceso.

En el proceso de facturación pueden intervenir:

1. Consultar el pedido.

2. Generar la factura.

3. Calcular los impuestos.

4. Aplicar un descuento cuando corresponda.

5. Calcular el valor total.

6. Registrar el pago.

7. Generar el comprobante.

8. Actualizar el estado del pedido.

## Patrón Observer

**Categoría:** Comportamiento.

El patrón Observer permite que uno o varios componentes reciban una actualización cuando cambia la información de un objeto observado.

El componente observado informa que ocurrió un cambio y los observadores actualizan la información correspondiente sin quedar fuertemente conectados entre sí.

En SIAR, este patrón se utilizará principalmente para actualizar la información relacionada con los pedidos.

El flujo podrá funcionar de la siguiente manera:

1. El mesero registra y envía un pedido a cocina.

2. El pedido genera una actualización.

3. La interfaz de cocina muestra el nuevo pedido.

4. El cocinero cambia el estado a En preparación.

5. La información consultada por el mesero se actualiza.

6. El cocinero cambia el estado a Listo.

7. El mesero visualiza que el pedido puede ser entregado.

8. Después del pago, el pedido aparece como Facturado.

Los estados definidos para los pedidos son:

Pendiente

↓ En preparación

↓ Listo

↓ Entregado

↓ Facturado

Observer también podrá utilizarse para reflejar otros cambios, como:

- Disponibilidad de productos.

- Estado de las mesas.

- Cambios en las reservas.

- Registro de pagos.

- Actualización de consultas y reportes.

- Cambios relevantes en el inventario.
