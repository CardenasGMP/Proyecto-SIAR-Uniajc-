# SIAR — Sistema Integral de Administración para Restaurantes

Proyecto de semestre de Ingeniería de Software II — UNIAJC.

## ¿De qué trata el proyecto?

Con este proyecto vamos a desarrollar una aplicación web para apoyar la administración de un restaurante. La idea es reunir en un mismo sistema la información de los usuarios, el menú, las mesas, los pedidos, el inventario y la facturación. También incluiremos reservas, reportes y un dashboard para consultar información general del negocio.

Buscamos facilitar el trabajo del personal y mantener organizada la información de las actividades diarias del restaurante.

## Objetivo general

Desarrollar una aplicación web que permita gestionar los principales procesos de un restaurante, aplicando arquitectura en capas, patrones de diseño, pruebas de software y trabajo colaborativo con Git y GitHub.

## Funcionalidades previstas

| Módulo | Funciones principales 
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

## Organización propuesta de carpetas

Esta estructura es inicial y podrá ajustarse cuando definamos las tecnologías del proyecto.

| Ruta | Contenido |
| --- | --- |
| `README.md` | Presentación del proyecto, alcance y forma de trabajo. |
| `docs/inicio/` | Problema, justificación, objetivos, alcance y cronograma. |
| `docs/requerimientos/` | Requerimientos funcionales y no funcionales, historias de usuario y casos de uso. |
| `docs/diseno/` | Diagramas de casos de uso y clases, modelo entidad-relación, arquitectura y patrones. |
| `docs/pruebas/` | Plan y matriz de pruebas, resultados y evidencias. |
| `docs/manuales/` | Manual técnico y manual de usuario. |
| `docs/entregas/` | Evidencias por corte e informe final. |
| `frontend/` | Pantallas e interfaz de la aplicación web. |
| `backend/` | Lógica del sistema y acceso a los datos, organizados en capas. |
| `database/` | Scripts de creación, migraciones y datos de prueba. |
| `tests/` | Pruebas automatizadas; su ubicación definitiva dependerá de las tecnologías elegidas. |
| `.gitignore` | Archivos locales que no se deben incluir en el repositorio. |


