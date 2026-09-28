# SIAR — Sistema Integral de Administración para Restaurantes

Proyecto de Ingeniería de Software II — UNIAJC.

## ¿De qué trata?

Queremos crear una aplicación web que ayude a organizar las actividades de un restaurante. La idea es reunir en un mismo lugar la información de los usuarios, el menú, las mesas, los pedidos, el inventario, las reservas y los cobros.

Así, cada trabajador podrá consultar y actualizar los datos que necesita. También queremos que el administrador pueda revisar las ventas y ver un resumen de cómo va el restaurante.

## Funciones del sistema

| Módulo | Qué queremos hacer |
| --- | --- |
| Usuarios y roles | Crear cuentas, actualizar sus datos y definir qué puede hacer cada trabajador. |
| Menú | Registrar productos, organizarlos por categorías y señalar si están disponibles. |
| Mesas | Registrar mesas y consultar si están libres, ocupadas o reservadas. |
| Pedidos | Tomar pedidos, enviarlos a cocina y seguir su preparación hasta el cobro. |
| Inventario | Registrar insumos, entradas y salidas, y consultar cuánto queda. |
| Facturación | Preparar facturas, calcular impuestos y descuentos autorizados, y registrar pagos. |
| Reportes | Consultar ventas, productos más vendidos, consumo de insumos y uso de las mesas. |
| Reservas | Organizar las reservas y registrar la llegada de los clientes. |
| Dashboard | Mostrar una pantalla de resumen con los datos del restaurante. |

Los roles serán administrador, mesero, cocinero y cajero.

## Organización del proyecto

Seguimos los apartados del documento que nos compartió la docente.

| Carpeta | Qué contiene |
| --- | --- |
| [01-documento-de-inicio](01-documento-de-inicio/) | Problema, justificación, objetivos, alcance y espacio para el cronograma. |
| [02-ingenieria-de-requerimientos](02-ingenieria-de-requerimientos/) | Historias de usuario, casos de uso y requisitos funcionales y no funcionales. |
| [03-modelado](03-modelado/) | Archivos para los diagramas de casos de uso, clases y modelo entidad-relación. |
| 04-diseno — pendiente | Arquitectura del sistema, patrones de diseño y explicación de por qué los elegimos. |

Los archivos .md permiten escribir texto con títulos, listas, tablas y diagramas que podemos consultar en GitHub.

## Cómo nos organizaremos

Usaremos Git para guardar el historial de cambios y GitHub para compartir el trabajo.

- **main:** versión revisada del proyecto.
- **develop:** rama para reunir los avances del equipo.
- **Ramas de trabajo:** sirven para preparar cambios, como docs-requerimientos o docs-modelado.

La idea es trabajar desde develop y pedir una revisión antes de unir los cambios. Esa solicitud se llama Pull Request. Para pasar los avances revisados a main también usaremos una solicitud. Si un cambio parte de main para conservar archivos recientes, se indicará en su solicitud.

Cada integrante guardará sus aportes con un mensaje claro, por ejemplo: docs: agregar historias de usuario de pedidos. Podemos marcar una versión revisada con una release, que sirve para identificar ese avance.

## Cómo pensamos construirlo

Separaremos las pantallas, las reglas del sistema y el manejo de los datos. Esta organización se llama arquitectura en capas. En el diseño explicaremos las tareas de los controladores, servicios y repositorios, y los patrones que decidamos usar.

Aún debemos elegir las herramientas para crear la interfaz, programar el servidor, guardar los datos, hacer pruebas y publicar la aplicación.

## Condiciones que debemos cumplir

La guía pide que el sistema se adapte a distintos tamaños de pantalla, tenga una disponibilidad mínima del 95 % y responda en menos de 3 segundos bajo las condiciones de prueba que acordemos.

También pide proteger las contraseñas, controlar los permisos, guardar quién realiza los cambios, usar Git, mantener la documentación y alcanzar al menos un 70 % de cobertura de pruebas. Esto último indica qué parte del código fue recorrida por las pruebas automáticas.

Estas son metas del proyecto. Su cumplimiento se comprobará cuando exista la aplicación.

## Lo que llevamos

Ya tenemos redactados el problema, la justificación, los objetivos, el alcance, los requerimientos y el modelo entidad-relación. Seguimos preparando la documentación; todavía no hemos programado el sistema.

Los archivos de diagramas de casos de uso y de clases están creados, pero falta desarrollarlos. También falta el apartado de Diseño. El cronograma lo haremos al final.

La guía no detalla todas las funciones de inventario, reservas y dashboard. Por eso, lo que agregamos para completar esos módulos está marcado como propuesta para revisar con la docente.

## Integrantes

Santiago Lopez, Nicol segovia, Jose Cardenas

## Instalación y uso

Escribiremos estos pasos cuando tengamos una versión de la aplicación que se pueda ejecutar.
