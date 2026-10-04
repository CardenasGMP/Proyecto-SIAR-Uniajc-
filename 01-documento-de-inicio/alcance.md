# Alcance

SIAR será una aplicación web para un restaurante. Actualmente se documentan sus funciones y diseño; todavía no se está programando.

| Área | Funciones previstas |
| --- | --- |
| Usuarios | Cuentas y permisos para administrador, mesero, cocinero y cajero. |
| Menú | Productos, categorías, precios y disponibilidad; desactivación sin borrar ventas anteriores. |
| Mesas y reservas | Capacidad, ocupación, liberación, reservas y registro de llegada. |
| Pedidos | Crear, editar mientras estén pendientes, enviar a cocina y seguir preparación y entrega. |
| Inventario | Insumos, entradas y salidas manuales, existencias y avisos de mínimo. |
| Facturación | Impuestos, descuentos autorizados, pago completo y comprobante. |
| Reportes y dashboard | Ventas, productos vendidos, consumo, ocupación, pedidos activos y reservas. |

El pedido pasa por Pendiente, En preparación, Listo, Entregado y Facturado. También puede terminar Cancelado según las reglas de autorización. Se propone un pedido sin liberar por mesa, una factura por pedido y un pago completo por factura.

No se incluyen pagos divididos, recetas para descontar inventario automáticamente, devoluciones, aplicación móvil independiente, inteligencia artificial ni conexiones con pasarelas de pago, sistemas contables o plataformas de domicilios. La factura es interna para el proyecto; no incluye facturación electrónica.

Las funciones propuestas de inventario, reservas y dashboard se revisarán con la docente. Los permisos y criterios están en los [requerimientos funcionales](../02-ingenieria-de-requerimientos/03-requerimientos-funcionales.md).
