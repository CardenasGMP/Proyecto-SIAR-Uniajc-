# Requerimientos no funcionales

Estos requisitos definen la calidad y organización de SIAR.

Conservamos los diez códigos de la guía. El 95 % de disponibilidad, el tiempo menor a 3 segundos y el 70 % de cobertura de pruebas vienen de ella. Las formas de comprobarlos son propuestas que debemos revisar con la docente. Todavía no son resultados alcanzados.

## RNF01 — Adaptarse a distintas pantallas

**Requisito:** La aplicación debe poder usarse desde un celular, una tableta y un computador.

**Verificación:** Proponemos revisar pantallas de 360, 768 y 1366 píxeles de ancho. Deben verse los textos y botones completos, sin quedar unos encima de otros. Revisaremos ingreso, menú, mesas, pedidos y cobro. Una tabla grande puede tener su propio desplazamiento.

**Evidencia:** Capturas y una lista con lo revisado en cada pantalla.

## RNF02 — Disponibilidad mínima del 95 %

**Requisito:** El sistema debe estar disponible al menos el 95 % del tiempo que acordemos revisar.

**Verificación:** Proponemos observarlo durante 30 días, comprobando cada 5 minutos si responde. Calcularemos: comprobaciones correctas / comprobaciones programadas × 100. El tiempo de mantenimiento contará como caída; si falla la herramienta que comprueba, lo anotaremos aparte. Esta revisión da una aproximación, porque no observa cada segundo.

**Evidencia:** El registro de las comprobaciones y el cálculo. Solo podremos hacerlo cuando la aplicación esté publicada.

## RNF03 — Responder en menos de 3 segundos

**Requisito:** Las tareas habituales deben responder en menos de 3 segundos con la carga de prueba acordada.

**Verificación:** Proponemos probar con 10 usuarios al mismo tiempo, 100 productos, 20 mesas y 1000 pedidos anteriores. Haremos al menos 100 repeticiones de ingreso, consulta de menú y mesas, guardar pedidos y consultar ventas. Anotaremos el menor tiempo, el promedio, el mayor y el percentil 95, que indica el tiempo dentro del que quedó el 95 % de las respuestas. Para aprobar esta prueba, ninguna respuesta medida debe llegar a 3 segundos.

**Evidencia:** Resultados de tiempos y errores, junto con el equipo, la conexión, el entorno y los datos usados. La carga propuesta debe acordarse con la docente.

## RNF04 — Proteger las contraseñas

**Requisito:** Las contraseñas no deben quedar guardadas como texto que alguien pueda leer.

**Verificación:** La guía habla de contraseñas cifradas. Para aclararlo, proponemos usar un hash: un resultado calculado a partir de la contraseña que sirve para comprobarla sin guardar su texto original. Se usa una sal diferente en cada contraseña para protegerla mejor. Revisaremos la base de datos, las respuestas y los registros del sistema para evitar que aparezcan contraseñas. Si se olvida una, se cambia por otra; no se envía la anterior.

**Evidencia:** Revisión del almacenamiento y pruebas de ingreso y recuperación. La herramienta y sus opciones se elegirán en el diseño.

## RNF05 — Respetar los permisos de cada rol

**Requisito:** Cada persona debe poder hacer solo las tareas permitidas para su rol.

**Verificación:** Probaremos cada función con el rol correcto, uno que no tenga permiso y sin iniciar sesión. También intentaremos enviar la solicitud directamente al servidor. Si no hay permiso, la acción debe rechazarse sin cambiar datos.

**Evidencia:** Una tabla con rol, acción, resultado y evidencia.

## RNF06 — Guardar quién hace los cambios

**Requisito:** Debe quedar registro de quién hizo una operación importante, cuándo la hizo y sobre qué dato.

**Verificación:** Revisaremos cambios de usuarios, roles, menú, mesas, pedidos, reservas, inventario, descuentos y pagos. Cada registro tendrá responsable, fecha, acción, dato afectado y resultado. No guardará contraseñas ni enlaces de recuperación. Los usuarios que atienden el restaurante no podrán editar ni borrar estos registros.

**Evidencia:** Ejemplos de operaciones y sus registros, además de la revisión de permisos.

## RNF07 — Separar las partes del sistema

**Requisito:** Las pantallas, las reglas del negocio y el acceso a los datos deben tener responsabilidades separadas. Esto se llama arquitectura en capas.

**Verificación:** Primero revisaremos los diagramas y qué hace cada parte. Cuando haya código, seguiremos un pedido hasta el pago para comprobar que las pantallas no accedan directamente a la base de datos y que las reglas estén en la parte que les corresponde.

**Evidencia:** El diagrama de arquitectura, la explicación de responsabilidades y después la revisión del código.

## RNF08 — Usar Git

**Requisito:** Los documentos y el código deben tener un historial de cambios en el repositorio.

**Verificación:** Revisaremos que los cambios se guarden con mensajes claros, ramas y solicitudes de revisión. Cada integrante debe registrar sus propios aportes.

**Evidencia:** Historial de commits, diferencias entre versiones y Pull Requests.

## RNF09 — Alcanzar al menos 70 % de cobertura de pruebas

**Requisito:** Las pruebas automáticas deben recorrer al menos el 70 % del código que se defina para medir.

**Verificación:** La guía no indica qué tipo de cobertura usar. Proponemos medir líneas de código de la aplicación, dejando fuera las librerías externas y el código generado automáticamente. Se deben mostrar esas exclusiones. Tener cobertura no significa que el programa esté libre de errores, por eso también revisaremos los resultados de las pruebas.

**Evidencia:** Un reporte de cobertura y los resultados de pruebas unitarias, de integración y funcionales. La herramienta se escogerá cuando definamos las tecnologías.

## RNF10 — Mantener la documentación

**Requisito:** Los documentos deben explicar qué hace el sistema, cómo está organizado y cómo se usa.

**Verificación:** Revisaremos problema, justificación, objetivos, alcance, cronograma, requisitos, historias, casos de uso y diagramas. También deben explicarse la arquitectura y los patrones elegidos. Cuando exista la aplicación, agregaremos instalación, configuración, API, base de datos, pruebas, publicación y manuales. Comprobaremos que los enlaces y códigos correspondan a los documentos correctos.

**Evidencia:** Una lista de los documentos y su revisión. El cronograma sigue pendiente y lo haremos al final.

## Dónde se revisa cada requisito

| Requisitos | Dónde los revisaremos |
| --- | --- |
| RNF01–RNF03 | En las pantallas y tareas de los módulos, con las condiciones de prueba que acordemos. |
| RNF04 | En las cuentas, el ingreso y la recuperación de contraseña. |
| RNF05 | En todas las funciones según los permisos de cada rol. |
| RNF06 | En las operaciones que cambian datos. Solo personal autorizado podrá consultar esos registros. |
| RNF07–RNF10 | En el proyecto completo. |

## Situaciones que debemos probar

- Dos personas reservan la misma mesa en horarios que se cruzan: solo una reserva debe confirmarse.
- Dos solicitudes intentan sacar las últimas unidades de un insumo: no debe quedar una cantidad negativa.
- Se confirma dos veces un pago: se guarda uno solo y el pedido pasa una sola vez a Facturado.
- Un mesero intenta hacer una tarea del administrador directamente desde una solicitud: el sistema la rechaza.
- Cocina empieza a preparar mientras el mesero cambia el pedido: no se aceptan dos cambios que se contradigan.
- Falla el registro de una llegada, un pago o un movimiento de inventario: no queda solo una parte del cambio guardada.

Estas situaciones complementan los [criterios de los requisitos funcionales](03-requerimientos-funcionales.md). Las pruebas se realizarán cuando tengamos el sistema.

## Por acordar

Debemos confirmar cuánto tiempo mediremos la disponibilidad, cuántos usuarios usaremos para medir rendimiento, qué cobertura de pruebas se tomará y cómo funcionarán la recuperación de contraseña y el registro de cambios. Las herramientas se elegirán en el diseño.
