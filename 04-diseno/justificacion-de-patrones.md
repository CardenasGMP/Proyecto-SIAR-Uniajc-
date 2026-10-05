# Justificación de los patrones

| Patrón | Por qué lo elegimos para SIAR |
| --- | --- |
| MVC | Permite cambiar una pantalla sin mezclar su presentación con las reglas del restaurante. También facilita repartir el trabajo por responsabilidades. |
| Capa de servicios | Evita repetir reglas en varios controladores. Permite coordinar tareas como registrar un pago y actualizar el pedido dentro de una misma transacción. |
| Repositorio | Mantiene las consultas en un lugar definido. Facilita ajustar el acceso a datos y probar los servicios con repositorios de prueba. |

Por ejemplo, si cambia la forma de mostrar las reservas, se ajusta la vista. Si cambia una regla de disponibilidad, se revisa el servicio. Si cambia una consulta, se modifica el repositorio.

Esta separación añade archivos, pero ayuda a ubicar los cambios. Usaremos solo las partes necesarias para los módulos definidos.

Los patrones apoyan RNF07 —separación de responsabilidades— y facilitan las pruebas de RNF09. Su uso no garantiza por sí solo el rendimiento ni la cobertura: eso debe comprobarse cuando exista la aplicación.

Ver [patrones seleccionados](patrones-de-diseno.md) y [arquitectura del sistema](arquitectura-del-sistema.md).
