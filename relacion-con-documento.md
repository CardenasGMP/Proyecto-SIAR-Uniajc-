# Relación con el documento del proyecto

Referencia: **Proyecto SIAR.pdf**, versión compartida el 5 de octubre de 2026. El documento y este repositorio describen el mismo sistema; esta tabla permite relacionarlos.

| Tema | Relación |
| --- | --- |
| Propósito y alcance | Aplicación web para organizar la atención y la información de un restaurante. |
| Roles | Administrador, mesero, cocinero y cajero. |
| Arquitectura | Cliente-servidor con presentación, lógica de negocio y datos. |
| Patrones | Singleton, Facade y Observer. |
| Requisitos de calidad | Se conservan RNF01–RNF10 y las metas de 95 % de disponibilidad, menos de 3 segundos y 70 % de cobertura. |
| Cronograma | El PDF ya lo incluye; su incorporación al repositorio queda pendiente. |

## Historias y casos de uso

El PDF tiene 19 historias y 19 casos de uso. El repositorio tiene 22 de cada uno y agrupa algunas funciones de otra manera. Los números no siempre representan la misma función.

En la tabla, cada número corresponde a la historia HU y al caso CU del mismo número en su respectiva versión.

| PDF | Función | Repositorio |
| --- | --- | --- |
| 01–02 | Usuarios y roles | 01 |
| 03 | Inicio de sesión | 02 |
| 04 | Recuperación de contraseña | 03 |
| 05–06 | Productos y categorías | 04 |
| 07 | Disponibilidad del menú | 05 |
| 08 | Administrar mesas | 06 |
| 09 | Consultar mesas | 07 |
| 10 | Reservar y liberar mesas | 20 para reservas; 07 para liberar |
| 11 | Crear pedido y agregar productos | 08 |
| 12 | Modificar o cancelar pedido | 08 para editar; 09 para cancelar |
| 13 | Enviar a cocina | 10 |
| 14 | Consultar estado del pedido | 11 |
| 15–19 | Facturación, pago y reportes | 15–19 |

Los casos 12–14 del repositorio detallan inventario; 20–21, reservas; y 22, dashboard. Son funciones previstas en el alcance, con reglas propuestas para revisión.

El PDF enumera RF01–RF22 y RF28–RF37. El repositorio conserva esos códigos y agrega RF23–RF27 y RF38–RF44 para completar esos módulos. No deben confundirse esas propuestas con requisitos ya aprobados.

## Ajustes necesarios en el PDF

- **Patrones, páginas 27–31:** aclarar que una sesión no se comparte entre todos los usuarios del servidor. Singleton se aplicará a configuración; Facade necesita transacciones y Observer necesita comunicación entre servidor y navegadores.
- **Entidad-relación, página 21:** el bloque con `id_producto` debe llamarse Producto, no Pedido; el bloque con `id_pago` debe llamarse Pago, no Factura.
- **Relaciones:** cada línea del pedido corresponde a un producto. Cada pedido puede tener como máximo una factura y cada factura, un pago; ambos pueden no existir todavía.
- **Clases y datos:** el descuento se guarda en Factura; el inventario usa Insumo y MovimientoInventario. Los reportes se calculan mediante consultas, sin necesidad de guardar cada resultado como otra entidad.
- **Modelado:** el diagrama entidad-relación del PDF es parcial; el del repositorio también incluye reservas, inventario, auditoría y recuperación de acceso.

Los nombres y códigos del [repositorio](README.md) se conservan para mantener sus enlaces y relaciones. Esta equivalencia no modifica el PDF.
