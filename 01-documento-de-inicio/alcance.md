# Alcance

SIAR será una aplicación web para organizar la información de un restaurante. Queremos reunir los datos de sus actividades para que cada trabajador pueda consultar y actualizar lo que le corresponde.

Por ahora estamos preparando la documentación y el diseño. Las funciones que describimos son las que esperamos desarrollar.

## Usuarios y roles

El sistema tendrá cuatro roles:

| Rol | Qué podrá hacer |
| --- | --- |
| Administrador | Manejar usuarios y permisos, revisar la información del restaurante y consultar reportes. |
| Mesero | Registrar pedidos, consultar mesas y revisar cómo va la atención. |
| Cocinero | Ver los pedidos enviados a cocina y actualizar su preparación. |
| Cajero | Preparar facturas, registrar pagos y entregar comprobantes. |

Los permisos de cada función se explican en los [requerimientos funcionales](../02-ingenieria-de-requerimientos/03-requerimientos-funcionales.md).

## Menú

Permitirá registrar productos, cambiar sus datos, organizarlos por categorías y señalar cuáles están disponibles. Los productos que dejen de ofrecerse se podrán desactivar, conservando sus ventas anteriores.

## Mesas y reservas

Permitirá registrar mesas, consultar su capacidad y saber si están libres, ocupadas o reservadas. También se podrán registrar, modificar y cancelar reservas, y marcar la llegada de los clientes.

## Pedidos

Permitirá registrar lo que solicita una mesa, agregar productos, corregir el pedido cuando siga pendiente y enviarlo a cocina. Se podrá consultar su estado: Pendiente, En preparación, Listo, Entregado o Facturado.

También se propone el estado Cancelado para dejar registro de los pedidos que no continúen. Las condiciones para modificarlos o cancelarlos están en los requerimientos.

## Inventario

Permitirá registrar insumos, anotar entradas y salidas, consultar las cantidades disponibles y revisar cuáles están por debajo del mínimo. El consumo se registrará manualmente; por ahora no se calculará a partir de recetas.

## Facturación

Permitirá generar la factura de un pedido, calcular impuestos, aplicar descuentos autorizados y registrar el pago. Se podrá consultar o imprimir el comprobante. La propuesta maneja una factura por pedido y un pago completo por factura.

## Reportes y dashboard

El administrador podrá consultar las ventas, los productos más vendidos, el consumo de insumos y la ocupación de las mesas. El dashboard será una pantalla de resumen con información del restaurante, como pedidos activos, reservas y alertas del inventario.

## Lo que no incluiremos por ahora

- Conexión con plataformas externas de pago.
- Una aplicación móvil independiente.
- Conexión con sistemas contables externos.
- Domicilios a través de plataformas externas.
- Funciones de inteligencia artificial.

Algunas reglas de inventario y reservas todavía se deben revisar con la docente. Las dejamos señaladas en los documentos para ajustarlas cuando se definan.
