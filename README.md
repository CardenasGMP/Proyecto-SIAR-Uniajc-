# SIAR — Sistema Integral de Administración para Restaurantes

Proyecto de semestre de Ingeniería de Software II — UNIAJC.

## ¿De qué trata el proyecto?

Con este proyecto vamos a desarrollar una aplicación web para apoyar la administración de un restaurante. La idea es reunir en un mismo sistema la información de los usuarios, el menú, las mesas, los pedidos, el inventario y la facturación. También incluiremos reservas, reportes y un dashboard para consultar información general del negocio.

Buscamos facilitar el trabajo del personal y mantener organizada la información de las actividades diarias del restaurante.

## Objetivo general

Desarrollar una aplicación web que permita gestionar los principales procesos de un restaurante, aplicando arquitectura en capas, patrones de diseño, pruebas de software y trabajo colaborativo con Git y GitHub.

## Funcionalidades previstas

| Módulo | Funciones principales |
| 

| Usuarios y roles | Registrar, editar y eliminar usuarios; iniciar sesión, recuperar contraseña y controlar permisos.
|

| Menú | Crear, modificar, eliminar y categorizar productos; gestionar su disponibilidad.
|

| Mesas | Crear y modificar mesas, consultar su estado, reservarlas y liberarlas. 
|

| Pedidos | Crear, modificar y cancelar pedidos, agregar productos, enviarlos a cocina y consultar su estado. 
|

| Inventario | Controlar el inventario del restaurante; los requisitos detallados están pendientes de completar.
|

| Facturación | Generar facturas, calcular impuestos, aplicar descuentos, registrar pagos y emitir comprobantes.
|

| Reportes | Consultar ventas por periodo, productos más vendidos, consumo de inventario, ocupación de mesas e indicadores financieros. 
|

| Reservas | Gestionar las reservas, coordinadas con la disponibilidad de mesas. 
|

| Dashboard | Mostrar información general e indicadores para la administración.
|

Los roles establecidos son administrador, cajero, mesero y cocinero. Los permisos de cada rol se detallarán en los documentos de requerimientos.

## Alcance 

En el primer corte realizaremos únicamente la planeación y documentación de todos los módulos del sistema. La programación se realizará en etapas.
Prepararemos el problema, la justificación, los objetivos, el alcance y el cronograma. Para cada módulo documentaremos su propósito, los usuarios que lo utilizarán, los requerimientos funcionales, las historias de usuario, sus criterios de aceptación y los casos de uso. También elaboraremos los requerimientos no funcionales del sistema, los diagramas, la propuesta de arquitectura y la selección justificada de patrones de diseño.

Los módulos que se documentarán son usuarios y roles, menú, mesas, pedidos, inventario, facturación, reportes, reservas y dashboard.

La distribución de la programación entre las siguientes entregas se actualizará cuando se confirme el cronograma con la docente.

## Organización de carpetas del primer corte

Organizaremos la documentación siguiendo los cuatro apartados del documento del proyecto. El `README.md` principal estará en la raíz del repositorio, junto a estas carpetas:

| Carpeta | Archivos propuestos |
| --- | --- |
| `01-documento-de-inicio/` | `01-problema-identificado.md`, `02-justificacion.md`, `03-objetivos.md`, `04-alcance.md`, `05-cronograma.md` |
| `02-ingenieria-de-requerimientos/` | `01-historias-de-usuario.md`, `02-casos-de-uso.md`, `03-requerimientos-funcionales.md`, `04-requerimientos-no-funcionales.md` |
| `03-modelado/` | `01-diagrama-de-casos-de-uso.md`, `02-diagrama-de-clases.md`, `03-modelo-entidad-relacion.md` |
| `04-diseno/` | `01-arquitectura-del-sistema.md`, `02-patrones-de-diseno-seleccionados.md`, `03-justificacion-de-cada-patron.md` |

La numeración conserva el orden del Word. Los nombres de carpetas y archivos se escribirán sin tildes y con guiones para facilitar su uso en el repositorio; dentro de los documentos se usarán títulos con su ortografía normal.

Los archivos de Ingeniería de Requerimientos abarcarán todos los módulos: usuarios y roles, menú, mesas, pedidos, inventario, facturación, reportes, reservas y dashboard. Las historias de usuario, los casos de uso y los requisitos funcionales se organizarán por módulo dentro de sus respectivos archivos. Los requisitos no funcionales describirán las condiciones de calidad del sistema y señalarán cuando alguna aplique a un módulo específico.

Los archivos de Modelado contendrán la explicación de cada diagrama y su imagen o enlace al archivo correspondiente. Las imágenes y los archivos editables de los diagramas se guardarán en la misma carpeta de Modelado.

Los archivos `.md` son una propuesta para escribir y revisar la documentación directamente en GitHub. Si un entregable se elabora en Word, Excel u otra herramienta, se guardará en la carpeta correspondiente con su extensión original.

Git registra archivos, por lo que las carpetas se crearán al agregar sus documentos. Las carpetas de código se incorporarán cuando comience la programación.

## Arquitectura prevista

Se utilizará una arquitectura en capas que separe la presentación, la lógica de negocio y el acceso a datos. En el backend proponemos organizar controladores, servicios y repositorios. Los patrones de diseño se seleccionarán y justificarán en la documentación antes de su implementación.

## Trabajo colaborativo con Git

Proponemos utilizar estas ramas durante la documentación:

- `main`: documentación revisada y lista para entregar.
- `develop`: integración de los avances del equipo.
- `docs-inicio`: elaboración del documento de inicio.
- `docs-requerimientos`: ingeniería de requerimientos de todos los módulos.
- `docs-modelado`: elaboración de los diagramas.
- `docs-diseno`: arquitectura y patrones de diseño.

Las ramas de documentación se crearán a partir de `develop`. Cada integrante realizará commits con mensajes claros y abrirá un Pull Request hacia `develop` para revisar e integrar su trabajo. Al completar y revisar la documentación del corte, se abrirá un Pull Request de `develop` hacia `main` y se creará una release de la entrega.

Las ramas son versiones de trabajo del repositorio; no son carpetas. Un ejemplo de mensaje de commit es `docs: agregar historias de usuario de pedidos`.

## Requisitos de calidad

La guía establece una aplicación web responsiva, disponibilidad mínima del 95 %, tiempos de respuesta menores a 3 segundos, protección de contraseñas, control de acceso por roles y registro de auditoría. También exige arquitectura en capas, uso de Git, documentación técnica completa y cobertura mínima de pruebas del 70 %.

Estos son objetivos que se deberán comprobar durante el desarrollo; todavía no representan resultados alcanzados.

## Tecnologías

Pendientes de definir por el equipo:

- Frontend.
- Backend.
- Base de datos.
- Herramientas de pruebas.
- Servicio de despliegue.

Usaremos Git para el control de versiones y GitHub para compartir el repositorio y revisar los cambios.

## Estado actual

Estamos en la etapa de planeación y documentación de todos los módulos. El siguiente paso es completar el documento de inicio, distribuir los módulos entre los integrantes y elaborar sus requisitos, historias de usuario y casos de uso.

La guía menciona inventario en el alcance, pero no incluye el detalle del módulo 5 ni los requisitos RF23 a RF27. Este punto debe aclararse con la docente para completar su documentación. También se precisará la relación entre las funciones de mesas y reservas para evitar duplicar requisitos.

## Integrantes

Pendiente: agregar los nombres de los integrantes y sus responsabilidades.

## Instalación y ejecución

Se documentarán cuando exista una primera versión ejecutable y estén definidas las tecnologías.
