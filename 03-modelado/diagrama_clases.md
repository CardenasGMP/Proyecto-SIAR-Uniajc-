# Diagrama de clases

El modelo muestra las **16 clases del dominio**, sus datos principales y las operaciones propuestas. Las vistas son partes del mismo modelo: una clase repetida representa la misma clase. Todavía no hay código implementado.

`1` indica uno; `0..1`, uno opcional; y `0..*`, ninguno o varios. `+` indica acceso público y `-`, privado. Los nombres corresponden a las entidades del [modelo entidad-relación](modelo_entidad_relacion.md), donde se detallan todos los campos y claves.

## 1. Usuarios y seguridad

```mermaid
classDiagram
    direction TB
    class Rol {
        +int idRol
        +string nombre
        +permite(accion) bool
    }
    class Usuario {
        +int idUsuario
        +string correo
        -string passwordHash
        +bool activo
        +int versionSesion
        +cambiarRol(rol)
        +desactivar()
    }
    class RecuperacionAcceso {
        +int idRecuperacion
        -string tokenHash
        +datetime venceEn
        +datetime usadoEn
        +estaVigente() bool
        +marcarUsado()
    }
    class Auditoria {
        +int idAuditoria
        +datetime fechaHora
        +string accion
        +string entidad
        +string resultado
        +registrar()
    }
    Rol "1" -- "0..*" Usuario : asignado
    Usuario "1" -- "0..*" RecuperacionAcceso : solicita
    Usuario "0..1" -- "0..*" Auditoria : responsable
```

## 2. Mesas y reservas

```mermaid
classDiagram
    direction TB
    class Mesa {
        +int idMesa
        +int numero
        +int capacidad
        +consultarEstado(inicio, fin) string
        +puedeLiberarse() bool
    }
    class HorarioMesa {
        +int idHorario
        +datetime inicio
        +datetime fin
        +contiene(fecha) bool
    }
    class Reserva {
        +int idReserva
        +string nombreContacto
        +int personas
        +datetime inicio
        +datetime fin
        +string estado
        +modificar(inicio, fin, personas)
        +cancelar(motivo)
        +marcarAtendida()
    }
    class Pedido
    Mesa "1" -- "0..*" HorarioMesa : habilitada
    Mesa "1" -- "0..*" Reserva : recibe
    Mesa "1" -- "0..*" Pedido : atiende
    Reserva "0..1" -- "0..1" Pedido : origina
```

## 3. Menú y detalle del pedido

```mermaid
classDiagram
    direction TB
    class Categoria {
        +int idCategoria
        +string nombre
        +renombrar(nombre)
    }
    class Producto {
        +int idProducto
        +string nombre
        +decimal precioActual
        +bool disponible
        +bool activo
        +actualizarPrecio(precio)
        +cambiarDisponibilidad(valor)
        +desactivar()
    }
    class DetallePedido {
        +int idDetalle
        +string nombreProductoVenta
        +int cantidad
        +decimal precioUnitario
        +string observaciones
        +calcularSubtotal() decimal
    }
    class Pedido
    Categoria "1" -- "0..*" Producto : agrupa
    Producto "1" -- "0..*" DetallePedido : referencia
    Pedido "1" -- "0..*" DetallePedido : contiene
```

## 4. Pedido e historial

```mermaid
classDiagram
    direction TB
    class Pedido {
        +int idPedido
        +string estado
        +datetime creadoEn
        +datetime enviadoCocinaEn
        +datetime mesaLiberadaEn
        +int version
        +agregarProducto(producto, cantidad)
        +editarDetalle(detalle)
        +enviarACocina()
        +cambiarEstado(estado)
        +cancelar(motivo)
        +liberarMesa()
        +calcularSubtotal() decimal
    }
    class HistorialPedido {
        +int idHistorial
        +string estadoAnterior
        +string estadoNuevo
        +datetime fechaHora
        +string motivo
        +registrarCambio()
    }
    class Usuario
    Pedido "1" -- "0..*" HistorialPedido : conserva
    Usuario "1" -- "0..*" Pedido : mesero
    Usuario "0..1" -- "0..*" Pedido : liberador
    Usuario "1" -- "0..*" HistorialPedido : responsable
    Usuario "0..1" -- "0..*" HistorialPedido : autorizador
```

## 5. Factura y pago

```mermaid
classDiagram
    direction TB
    class Factura {
        +int idFactura
        +string numero
        +datetime emitidaEn
        +string moneda
        +decimal subtotal
        +decimal descuento
        +decimal tasaImpuesto
        +decimal valorImpuesto
        +decimal total
        +aplicarDescuento(valor, autorizador)
        +calcularTotal() decimal
        +estaPagada() bool
    }
    class Pago {
        +int idPago
        +datetime pagadoEn
        +string medioPago
        +decimal importeRecibido
        +decimal cambio
        +string claveOperacion
        +confirmar()
        +obtenerComprobante()
    }
    class Pedido
    class Usuario
    Pedido "1" -- "0..1" Factura : genera
    Factura "1" -- "0..1" Pago : recibe
    Usuario "1" -- "0..*" Factura : cajero
    Usuario "0..1" -- "0..*" Factura : autoriza descuento
    Usuario "1" -- "0..*" Pago : cajero
```

## 6. Inventario

```mermaid
classDiagram
    direction TB
    class Insumo {
        +int idInsumo
        +string codigo
        +string nombre
        +string unidadMedida
        +decimal stockMinimo
        +calcularExistencias() decimal
        +estaEnMinimo() bool
    }
    class MovimientoInventario {
        +int idMovimiento
        +string tipo
        +decimal cantidad
        +datetime fechaHora
        +string motivo
        +string referencia
        +string claveOperacion
        +registrar()
        +corregir(motivo)
    }
    class Usuario
    class Pedido
    Insumo "1" -- "0..*" MovimientoInventario : registra
    Usuario "1" -- "0..*" MovimientoInventario : responsable
    Pedido "0..1" -- "0..*" MovimientoInventario : referencia opcional
    MovimientoInventario "0..1" -- "0..*" MovimientoInventario : origen de ajustes
```

## Reglas del modelo

- Cada usuario tiene un rol. Las operaciones requieren los permisos definidos en los requisitos; un método de clase no concede permisos por sí mismo.
- Reserva también se relaciona con un usuario creador obligatorio y un cancelador opcional. Estas relaciones se detallan en el modelo de datos.
- Puede haber muchos pedidos históricos por mesa, pero solo uno sin liberar. Una reserva origina como máximo un pedido de la misma mesa.
- El pedido guarda el nombre y precio de cada producto al agregarlo. Solo se edita Pendiente; para enviarlo debe tener productos disponibles. Los cambios de estado conservan su historial.
- El pedido y su historial se guardan juntos. Registrar la llegada también debe guardar el pedido y la reserva atendida en una sola operación.
- Solo un pedido Entregado genera factura. La factura admite un pago completo; confirmarlo cambia el pedido a Facturado. La mesa se libera por separado.
- Los descuentos necesitan autorización. Después del pago no se cambian la factura ni los productos cobrados.
- El inventario se calcula a partir de movimientos manuales y no admite saldo negativo. Corregir crea un ajuste, sin borrar el original. Cancelar un pedido no repone insumos automáticamente.
- Reportes y dashboard consultan estos datos; no son nuevas entidades. Las ventas se cuentan por la fecha de pago.

Las validaciones de permisos, horarios cruzados y cambios simultáneos se coordinarán en la capa de servicios. La organización de esa capa se explica en la [arquitectura del sistema](../04-diseno/arquitectura-del-sistema.md). Las herramientas siguen pendientes de elección.

## Relación con los requisitos

| Vista | Requisitos |
| --- | --- |
| Usuarios y seguridad | RF01–RF06; RNF04–RNF06. |
| Mesas y reservas | RF12–RF16; RF38–RF42. |
| Menú y pedidos | RF07–RF11; RF17–RF22. |
| Factura y pago | RF28–RF32. |
| Inventario | RF23–RF27. |
| Consultas derivadas | RF33–RF37; RF43–RF44. |

Las propuestas de inventario, reservas y dashboard conservan los puntos pendientes de revisión de los requerimientos.
