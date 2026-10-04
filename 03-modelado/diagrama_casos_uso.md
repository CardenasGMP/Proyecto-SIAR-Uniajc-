# Diagrama de casos de uso

Los actores son administrador, mesero, cocinero y cajero. **Usuario registrado** agrupa esos cuatro roles para ingresar y recuperar acceso; no es un rol adicional. El cliente recibe atención sin entrar al sistema.

Cada óvalo representa un caso de uso y cada línea indica participación, no el orden de los pasos. Las vistas pertenecen al mismo sistema. Los códigos CU coinciden con los [casos de uso](../02-ingenieria-de-requerimientos/02-casos-de-uso.md).

## 1. Acceso y cuentas

```mermaid
flowchart LR
    A["Administrador"]
    U["Usuario registrado"]
    subgraph SIAR["SIAR · Acceso y cuentas"]
        direction TB
        CU01(["CU01 · Administrar cuentas"])
        CU02(["CU02 · Iniciar sesión"])
        CU03(["CU03 · Recuperar acceso"])
    end
    A --- CU01
    U --- CU02
    U --- CU03
```

## 2. Menú y mesas

```mermaid
flowchart LR
    A["Administrador"]
    M["Mesero"]
    subgraph SIAR["SIAR · Menú y mesas"]
        direction TB
        CU04(["CU04 · Administrar el menú"])
        CU05(["CU05 · Controlar disponibilidad del menú"])
        CU06(["CU06 · Administrar mesas"])
        CU07(["CU07 · Consultar y liberar mesas"])
    end
    A --- CU04
    A --- CU05
    A --- CU06
    A --- CU07
    M --- CU07
```

## 3. Pedidos

```mermaid
flowchart LR
    M["Mesero"]
    A["Administrador"]
    C["Cocinero"]
    J["Cajero"]
    subgraph SIAR["SIAR · Pedidos"]
        direction TB
        CU08(["CU08 · Crear y editar pedidos"])
        CU09(["CU09 · Cancelar pedidos"])
        CU10(["CU10 · Enviar pedidos a cocina"])
        CU11(["CU11 · Seguir la preparación y entrega"])
    end
    M --- CU08
    M --- CU09
    M --- CU10
    A ---|"autoriza si empezó la preparación"|CU09
    M ---|"consulta y entrega"|CU11
    C ---|"consulta y prepara"|CU11
    A ---|"consulta"|CU11
    J ---|"consulta"|CU11
```

## 4. Inventario

```mermaid
flowchart LR
    A["Administrador"]
    subgraph SIAR["SIAR · Inventario"]
        direction TB
        CU12(["CU12 · Registrar insumos y entradas"])
        CU13(["CU13 · Registrar consumo de insumos"])
        CU14(["CU14 · Consultar inventario y alertas"])
    end
    A --- CU12
    A --- CU13
    A --- CU14
```

## 5. Facturación

```mermaid
flowchart LR
    J["Cajero"]
    A["Administrador"]
    subgraph SIAR["SIAR · Facturación"]
        direction TB
        CU15(["CU15 · Preparar la factura"])
        CU16(["CU16 · Registrar pago y comprobante"])
    end
    J --- CU15
    J --- CU16
    A ---|"autoriza descuentos"|CU15
```

## 6. Reportes y dashboard

```mermaid
flowchart LR
    A["Administrador"]
    subgraph SIAR["SIAR · Reportes y dashboard"]
        direction TB
        CU17(["CU17 · Consultar ventas y productos"])
        CU18(["CU18 · Consultar consumo y ocupación"])
        CU19(["CU19 · Consultar indicadores financieros"])
        CU22(["CU22 · Consultar dashboard"])
    end
    A --- CU17
    A --- CU18
    A --- CU19
    A --- CU22
```

## 7. Reservas

```mermaid
flowchart LR
    M["Mesero"]
    A["Administrador"]
    subgraph SIAR["SIAR · Reservas"]
        direction TB
        CU20(["CU20 · Registrar y modificar reservas"])
        CU21(["CU21 · Consultar, cancelar y atender reservas"])
    end
    M --- CU20
    M --- CU21
    A --- CU20
    A ---|"consulta y cancela"|CU21
```

## Reglas de participación

- Cada rol conserva sus permisos; el administrador no realiza automáticamente las tareas de los otros roles.
- En CU11, cocina marca En preparación y Listo; el mesero registra Entregado. El pago de CU16 deja el pedido Facturado.
- En CU21, solo el mesero registra la llegada y abre el pedido asociado a la reserva.
- Una autorización no reemplaza al actor que realiza la operación. No se cancela un pedido ya facturado.

Los detalles, errores y requisitos relacionados están en cada CU. Inventario, reservas y dashboard mantienen las propuestas pendientes de revisión indicadas en los requisitos.
