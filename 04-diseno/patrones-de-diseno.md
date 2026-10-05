# Patrones de diseño seleccionados

Se seleccionan **Singleton, Facade y Observer**, de acuerdo con el documento del proyecto: uno creacional, uno estructural y uno de comportamiento. Son decisiones de diseño, todavía sin implementar.

| Patrón | Categoría | Uso en SIAR |
| --- | --- | --- |
| Singleton | Creacional | Mantener una única instancia de configuración general por proceso del servidor. |
| Facade | Estructural | Ofrecer operaciones como crear pedido o registrar pago, coordinando los servicios necesarios. |
| Observer | Comportamiento | Notificar cambios confirmados en pedidos para actualizar las vistas del mesero y de cocina. |

## Singleton

La configuración compartirá valores generales, como la zona horaria del restaurante. **El usuario y su sesión se mantendrán separados por persona**, no en una instancia global del servidor. Si se usa una instancia para la sesión en el navegador, será solo local y no sustituirá la validación del servidor.

## Facade

La fachada de pedidos coordinará la revisión de la mesa, la disponibilidad de productos y el registro del pedido. La de facturación coordinará el cobro mediante los servicios. Las transacciones guardarán juntos los cambios relacionados; Facade por sí solo no evita registros incompletos.

## Observer

Después de guardar un cambio, se notificará a los componentes interesados. Por ejemplo, al marcar un pedido Listo, se actualizará la vista del mesero.

Para llegar a navegadores diferentes se necesitará un mecanismo de comunicación, que se definirá al elegir las tecnologías. Cada conexión deberá respetar los permisos. Si se pierde un aviso, la vista volverá a consultar el estado guardado; no se repetirá el pago ni el pedido.

Ver [arquitectura](arquitectura-del-sistema.md) y [justificación](justificacion-de-patrones.md).
