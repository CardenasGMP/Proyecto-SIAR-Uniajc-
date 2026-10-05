# Justificación

## Patrón Singleton

Singleton se selecciona porque SIAR necesita mantener algunos datos compartidos durante la ejecución de la aplicación sin crear varias copias con información diferente.

Este patrón permitirá:

- Mantener una única referencia de la sesión actual.

- Evitar información duplicada entre los módulos.

- Centralizar la configuración general.

- Facilitar el acceso a información compartida.

- Reiniciar la información cuando el usuario cierre sesión.

- Reducir inconsistencias entre las diferentes partes del sistema.

Su aplicación será especialmente útil para las funciones de inicio de sesión, consulta del rol y presentación de las opciones correspondientes a cada usuario.

## Patrón Facade

Facade se selecciona porque varias funciones de SIAR requieren ejecutar operaciones relacionadas con diferentes componentes.

Este patrón permitirá:

- Simplificar la comunicación entre la presentación y la lógica del negocio.

- Evitar que las interfaces conozcan todos los detalles internos.

- Centralizar los procesos principales.

- Reducir la dependencia entre los módulos.

- Coordinar operaciones relacionadas.

- Mantener un manejo uniforme de los errores.

- Facilitar las pruebas de los flujos completos.

- Evitar que una operación quede ejecutada parcialmente.

Su aplicación será especialmente útil en la creación de pedidos, la facturación, el registro de pagos y la preparación de información para los reportes.

## Patrón Observer

Observer se selecciona porque diferentes usuarios necesitan consultar información actualizada sobre la operación del restaurante.

Este patrón permitirá:

- Reflejar los cambios de los pedidos.

- Mantener comunicados al mesero y al cocinero.

- Actualizar varias vistas a partir de un mismo cambio.

- Reducir la dependencia directa entre componentes.

- Reutilizar el mecanismo de actualización.

- Facilitar la incorporación de nuevos observadores.

- Mejorar el seguimiento de los procesos.

- Evitar que cada vista tenga que conocer todos los componentes internos.
