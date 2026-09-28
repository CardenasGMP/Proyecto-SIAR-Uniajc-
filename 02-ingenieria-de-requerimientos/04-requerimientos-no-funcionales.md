# Requerimientos no funcionales

Estos requisitos explican cómo debe funcionar SIAR: qué tan rápido debe responder, cómo cuidará los datos y cómo organizaremos el trabajo.

Conservamos los diez códigos de la guía. El 95 % de disponibilidad, el tiempo menor a 3 segundos y el 70 % de cobertura de pruebas vienen de ella. Las formas de comprobarlos son propuestas que debemos revisar con la docente. Todavía no son resultados alcanzados.

## RNF01 — Adaptarse a distintas pantallas

**Qué necesitamos:** La aplicación debe poder usarse desde un celular, una tableta y un computador.

**Cómo lo revisaremos:** Proponemos revisar pantallas de 360, 768 y 1366 píxeles de ancho. Deben verse los textos y botones completos, sin quedar unos encima de otros. Revisaremos ingreso, menú, mesas, pedidos y cobro. Una tabla grande puede tener su propio desplazamiento.

**Qué guardaremos como evidencia:** Capturas y una lista con lo revisado en cada pantalla.

## RNF02 — Disponibilidad mínima del 95 %

**Qué necesitamos:** El sistema debe estar disponible al menos el 95 % del tiempo que acordemos revisar.

**Cómo lo revisaremos:** Proponemos observarlo durante 30 días, comprobando cada 5 minutos si responde. Calcularemos: comprobaciones correctas / comprobaciones programadas × 100. El tiempo de mantenimiento contará como caída; si falla la herramienta que comprueba, lo anotaremos aparte. Esta revisión da una aproximación, porque no observa cada segundo.

**Qué guardaremos como evidencia:** El registro de las comprobaciones y el cálculo. Solo podremos hacerlo cuando la aplicación esté publicada.

## RNF03 — Responder en menos de 3 segundos

**Qué necesitamos:** Las tareas habituales deben responder en menos de 3 segundos con la carga de prueba acordada.

**Cómo lo revisaremos:** Proponemos probar con 10 usuarios al mismo tiempo, 100 productos, 20 mesas y 1000 pedidos anteriores. Haremos al menos 100 repeticiones de ingreso, consulta de menú y mesas, guardar pedidos y consultar ventas. Anotaremos el menor tiempo, el promedio, el mayor y el percentil 95, que indica el tiempo dentro del que quedó el 95 % de las respuestas. Para aprobar esta prueba, ninguna respuesta medida debe llegar a 3 segundos.

**Qué guardaremos como evidencia:** Resultados de tiempos y errores, junto con el equipo, la conexión, el entorno y los datos usados. La carga propuesta debe acordarse con la docente.

## RNF04 — Proteger las contraseñas

**Qué necesitamos:** Las contraseñas no deben quedar guardadas como texto que alguien pueda leer.

**Cómo lo revisaremos:** La guía habla de contraseñas cifradas. Para aclararlo, proponemos usar un hash: un resultado calculado a partir de la contraseña que sirve para comprobarla sin guardar su texto original. Se usa una sal diferente en cada contraseña para protegerla mejor. Revisaremos la base de datos, las respuestas y los registros del sistema para evitar que aparezcan contraseñas. Si se olvida una, se cambia por otra; no se envía la anterior.

**Qué guardaremos como evidencia:** Revisión del almacenamiento y pruebas de ingreso y recuperación. La herramienta y sus opciones se elegirán en el diseño.

## RNF05 — Respetar los permisos de cada rol

**Qué necesitamos:** Cada persona debe poder hacer solo las tareas permitidas para su rol.

**Cómo lo revisaremos:** Probaremos cada función con el rol correcto, uno que no tenga permiso y sin iniciar sesión. También intentaremos enviar la solicitud directamente al servidor. Si no hay permiso, la acción debe rechazarse sin cambiar datos.

**Qué guardaremos como evidencia:** Una tabla con rol, acción, resultado y evidencia.

## RNF06 — Guardar quién hace los cambios

**Qué necesitamos:** Debe quedar registro de quién hizo una operación importante, cuándo la hizo y sobre qué dato.

**Cómo lo revisaremos:** Revisaremos cambios de usuarios, roles, menú, mesas, pedidos, reservas, inventario, descuentos y pagos. Cada registro tendrá responsable, fecha, acción, dato afectado y resultado. No guardará contraseñas ni enlaces de recuperación. Los usuarios que atienden el restaurante no podrán editar ni borrar estos registros.

**Qué guardaremos como evidencia:** Ejemplos de operaciones y sus registros, además de la revisión de permisos.

## RNF07 — Separar las partes del sistema

**Qué necesitamos:** Las pantallas, las reglas del negocio y el acceso a los datos deben tener responsabilidades separadas. Esto se llama arquitectura en capas.

**Cómo lo revisaremos:** Primero revisaremos los diagramas y qué hace cada parte. Cuando haya código, seguiremos un pedido hasta el pago para comprobar que las pantallas no accedan directamente a la base de datos y que las reglas estén en la parte que les corresponde.

**Qué guardaremos como evidencia:** El diagrama de arquitectura, la explicación de responsabilidades y después la revisión del código.

## RNF08 — Usar Git

**Qué necesitamos:** Los documentos y el código deben tener un historial de cambios en el repositorio.

**Cómo lo revisaremos:** Revisaremos que los cambios se guarden con mensajes claros, ramas y solicitudes de revisión. Cada integrante debe registrar sus propios aportes. No se presentará el trabajo de otra persona o de una herramienta como si fuera el aporte individual de un compañero.

**Qué guardaremos como evidencia:** Historial de commits, diferencias entre versiones y Pull Requests.

## RNF09 — Alcanzar al menos 70 % de cobertura de pruebas

**Qué necesitamos:** Las pruebas automáticas deben recorrer al menos el 70 % del código que se defina para medir.

**Cómo lo revisaremos:** La guía no indica qué tipo de cobertura usar. Proponemos medir líneas de código de la aplicación, dejando fuera las librerías externas y el código generado automáticamente. Se deben mostrar esas exclusiones. Tener cobertura no significa que el programa esté libre de errores, por eso también revisaremos los resultados de las pruebas.

**Qué guardaremos como evidencia:** Un reporte de cobertura y los resultados de pruebas unitarias, de integración y funcionales. La herramienta se escogerá cuando definamos las tecnologías.

## RNF10 — Mantener la documentación

**Qué necesitamos:** Los documentos deben explicar qué hace el sistema, cómo está organizado y cómo se usa.

**Cómo lo revisaremos:** Revisaremos problema, justificación, objetivos, alcance, cronograma, requisitos, historias, casos de uso y diagramas. También deben explicarse la arquitectura y los patrones elegidos. Cuando exista la aplicación, agregaremos instalación, configuración, API, base de datos, pruebas, publicación y manuales. Comprobaremos que los enlaces y códigos correspondan a los documentos correctos.

**Qué guardaremos como evidencia:** Una lista de los documentos y su revisión. El cronograma sigue pendiente y lo haremos al final.

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
