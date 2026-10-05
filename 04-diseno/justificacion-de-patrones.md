# Justificación de los patrones

| Patrón | Por qué lo elegimos | Ejemplo |
| --- | --- | --- |
| Singleton | Evita crear varias copias de la misma configuración durante la ejecución. | Los módulos consultan la misma zona horaria del restaurante. |
| Facade | Simplifica procesos que necesitan varios componentes y evita que la interfaz conozca todos sus pasos internos. | Registrar un pago desde una sola operación de la fachada de facturación. |
| Observer | Permite actualizar varias vistas cuando cambia un pedido, sin que cocina tenga que llamar directamente a la pantalla del mesero. | Mostrar que un pedido ya está Listo. |

Los tres patrones se integran en la arquitectura de presentación, lógica de negocio y datos. Las sesiones siguen siendo individuales, los cambios relacionados se guardan mediante transacciones y los avisos se envían después de confirmar el guardado.

Esta organización facilita separar responsabilidades y probar cada parte. Su funcionamiento se comprobará cuando exista la aplicación.

Ver [patrones seleccionados](patrones-de-diseno.md) y [arquitectura](arquitectura-del-sistema.md).
