# SIAR — Sistema Integral de Administración para Restaurantes

Proyecto de Ingeniería de Software II — UNIAJC.

SIAR será una aplicación web para organizar la atención y la información de un restaurante. Reunirá usuarios, menú, mesas, pedidos, inventario, reservas y cobros. El administrador podrá consultar ventas y un resumen de la operación.

## Módulos

| Módulo | Función principal |
| --- | --- |
| Usuarios y roles | Administrar cuentas y permisos. |
| Menú | Registrar productos, categorías, precios y disponibilidad. |
| Mesas | Consultar capacidad, ocupación y liberación. |
| Pedidos | Registrar pedidos y seguir su preparación y entrega. |
| Inventario | Registrar insumos y movimientos manuales; avisar cuando queden pocos. |
| Facturación | Calcular el cobro, aplicar descuentos autorizados y registrar pagos. |
| Reservas | Organizar horarios y registrar la llegada de los clientes. |
| Reportes | Consultar ventas, consumo y ocupación. |
| Dashboard | Mostrar indicadores y alertas del restaurante. |

Los roles serán **administrador, mesero, cocinero y cajero**. Los clientes no necesitan una cuenta.

## Documentación

| Carpeta | Contenido |
| --- | --- |
| [Documento de inicio](01-documento-de-inicio/) | Problema, justificación, objetivos y alcance. El cronograma queda para el final. |
| [Ingeniería de requerimientos](02-ingenieria-de-requerimientos/) | Historias, casos de uso y requisitos funcionales y no funcionales. |
| [Modelado](03-modelado/) | [Casos de uso](03-modelado/diagrama_casos_uso.md), [clases](03-modelado/diagrama_clases.md) y [entidad-relación](03-modelado/modelo_entidad_relacion.md). |
| [Diseño](04-diseno/) | [Arquitectura](04-diseno/arquitectura-del-sistema.md), [patrones](04-diseno/patrones-de-diseno.md) y [justificación](04-diseno/justificacion-de-patrones.md). |

La [relación con el documento del proyecto](relacion-con-documento.md) indica las equivalencias y los ajustes pendientes en el PDF.

Estamos en la documentación del sistema; aún no hay una aplicación ejecutable. Las propuestas de inventario, reservas y dashboard se revisarán con la docente.

## Organización del trabajo

Usaremos Git y GitHub para guardar los avances y revisarlos mediante Pull Requests. `main` contiene la versión revisada, `develop` reúne avances y las ramas de trabajo permiten preparar cada cambio. Si un cambio parte de `main` para conservar una actualización reciente, se indicará en su solicitud.

El diseño propone una arquitectura cliente-servidor de tres capas, con Singleton, Facade y Observer. Las tecnologías están pendientes. Los requisitos incluyen adaptación a distintas pantallas, disponibilidad mínima del 95 %, respuesta menor a 3 segundos bajo la carga acordada, protección de datos y al menos 70 % de cobertura de pruebas. Se comprobarán cuando exista la aplicación.

## Integrantes

Santiago López Ramírez, José David Cárdenas Tovar y Nicole Segovia Cortes.
