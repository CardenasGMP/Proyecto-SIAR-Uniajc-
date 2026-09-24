# Requerimientos no funcionales

Estos requisitos describen las condiciones de calidad, seguridad y organización del proyecto SIAR. Se conservan los diez identificadores de la guía. Los umbrales 95 %, menos de 3 segundos y 70 % proceden de ella; los métodos de medición, cargas y reglas detalladas son propuestas para acordar con la docente.

**Estado:** definidos para revisión. En el primer corte se documentan; no se afirma que existan una aplicación desplegada, pruebas ejecutadas o métricas alcanzadas.

## RNF01 — Sistema web responsivo

- **Requisito:** La interfaz debe adaptarse a celular, tableta y computador.
- **Forma propuesta de verificación:** Propuesta de prueba: anchos de 360, 768 y 1366 píxeles. Revisar acceso, menú, mesas, pedidos y cobro; todos los controles deben poder utilizarse sin superposición ni pérdida de contenido. Las tablas extensas pueden tener desplazamiento interno.
- **Evidencia esperada:** Capturas y lista de verificación por pantalla y ancho.

## RNF02 — Disponibilidad mínima del 95 %

- **Requisito:** La aplicación desplegada debe estar disponible al menos el 95 % del periodo evaluado.
- **Forma propuesta de verificación:** Propuesta: medir durante 30 días continuos con una consulta de salud cada 5 minutos. Disponibilidad = verificaciones exitosas / verificaciones programadas × 100. Contar mantenimientos como indisponibilidad y reportar aparte las fallas del monitor. Esta medición es una aproximación por muestreo.
- **Evidencia esperada:** Registro del monitor, intervalo observado y cálculo; antes del despliegue se registra como pendiente, no como cumplido.

## RNF03 — Respuesta menor a 3 segundos

- **Requisito:** Las operaciones habituales deben responder en menos de 3 segundos bajo la carga acordada.
- **Forma propuesta de verificación:** Propuesta inicial: 10 usuarios simultáneos, 100 productos, 20 mesas y 1000 pedidos históricos. Medir al menos 100 ejecuciones por operación de login, consulta de menú, mesas, guardar pedido y consulta de ventas. Informar mínimo, promedio, percentil 95 y máximo. Para aprobar, ninguna operación medida debe alcanzar 3 segundos; la carga debe confirmarse con la docente.
- **Evidencia esperada:** Resultados de tiempos, tasa de error, datos de prueba, equipo, red y entorno usados.

## RNF04 — Protección de contraseñas

- **Requisito:** Las contraseñas no deben almacenarse ni registrarse en texto legible.
- **Forma propuesta de verificación:** La guía usa la expresión «contraseñas cifradas». Se propone precisar almacenamiento mediante hash de contraseña con sal individual y función apropiada, sin recuperación del valor original. Revisar base de datos, respuestas y logs para verificar que no exponen contraseñas. La contraseña se restablece, no se envía la anterior.
- **Evidencia esperada:** Revisión técnica del almacenamiento y pruebas de acceso y recuperación; función y parámetros se definirán en Diseño.

## RNF05 — Control de acceso por roles

- **Requisito:** La autorización debe comprobarse en el servidor para cada operación protegida.
- **Forma propuesta de verificación:** Probar cada permiso de la matriz funcional con el rol autorizado, uno no autorizado y sin sesión, incluyendo solicitudes directas. El acceso indebido debe rechazarse y no modificar datos.
- **Evidencia esperada:** Matriz rol/operación/resultado y evidencias de pruebas negativas.

## RNF06 — Registro de auditoría

- **Requisito:** Las operaciones relevantes deben conservar quién actuó, cuándo, sobre qué registro y con qué resultado.
- **Forma propuesta de verificación:** Verificar creación, edición y baja de usuarios; cambios de rol, menú y mesas; pedidos, reservas, inventario, descuentos y pagos. Registrar identificador del responsable, fecha y hora, acción, entidad y resultado; no guardar contraseñas ni enlaces de recuperación. Los roles operativos no pueden editar o borrar la auditoría.
- **Evidencia esperada:** Muestras de eventos relacionadas con operaciones de prueba y verificación de permisos.

## RNF07 — Arquitectura en capas

- **Requisito:** El diseño debe separar presentación, lógica de negocio y acceso a datos.
- **Forma propuesta de verificación:** Revisar un flujo completo de pedido a pago y comprobar que la presentación no consulta directamente la base de datos y que las reglas de negocio están en la capa correspondiente. En el primer corte se evalúa el diseño; después, la implementación.
- **Evidencia esperada:** Diagrama de arquitectura y revisión de responsabilidades; posteriormente, revisión del código.

## RNF08 — Uso obligatorio de Git

- **Requisito:** La documentación y el código deben conservar su historial en el repositorio Git.
- **Forma propuesta de verificación:** Verificar commits con mensajes que describan el cambio, ramas y revisiones de integración. Cada integrante debe realizar sus propios aportes; un cambio hecho mediante asistencia no se atribuye como trabajo individual de otra persona.
- **Evidencia esperada:** Historial de commits, diferencias y Pull Requests.

## RNF09 — Cobertura mínima de pruebas del 70 %

- **Requisito:** La implementación debe alcanzar al menos 70 % de cobertura automatizada.
- **Forma propuesta de verificación:** La guía no especifica la métrica. Se propone cobertura de líneas del código de aplicación, excluyendo dependencias y código generado, con exclusiones visibles. La herramienta se elegirá con las tecnologías. La cobertura no reemplaza la revisión de casos ni demuestra ausencia de errores.
- **Evidencia esperada:** Reporte de cobertura y resultados de pruebas unitarias, de integración y funcionales. No aplica como resultado ejecutado mientras solo exista documentación.

## RNF10 — Documentación técnica completa

- **Requisito:** La documentación debe permitir comprender, instalar, utilizar y mantener el sistema según la etapa.
- **Forma propuesta de verificación:** En este corte: revisar documento de inicio, requisitos, historias, casos de uso, diagramas, arquitectura y patrones. En entregas posteriores: agregar instalación, configuración, API, base de datos, pruebas, despliegue y manuales. Cada enlace e identificador debe corresponder a un documento vigente.
- **Evidencia esperada:** Lista de entregables y revisión de coherencia; el cronograma se completará al final por acuerdo del equipo.

## Aplicación a los módulos

| Condición | Módulos donde se verifica |
| --- | --- |
| RNF01–RNF03 | Todos los módulos con interfaz u operaciones, usando los escenarios y la carga acordados. |
| RNF04 | Usuarios, inicio de sesión y recuperación de acceso. |
| RNF05 | Todas las operaciones según la matriz de roles. |
| RNF06 | Operaciones que cambian información; consultas de auditoría solo para personal autorizado. |
| RNF07–RNF10 | Proyecto completo y entregables de cada etapa. |

## Escenarios críticos para las futuras pruebas

- Dos usuarios intentan reservar la misma mesa en un intervalo superpuesto: solo una reserva puede confirmarse.
- Dos solicitudes intentan consumir el último saldo de un insumo: ninguna combinación deja saldo negativo.
- Se repite la confirmación de pago: queda un único pago y un único cambio a Facturado.
- Un mesero intenta una operación exclusiva del administrador mediante una solicitud directa: se rechaza.
- Cocina inicia preparación mientras el mesero intenta editar: se conserva una versión coherente y se rechaza el cambio incompatible.
- Falla una operación de llegada, cobro o inventario: no quedan estados o saldos parcialmente actualizados.

Estos escenarios complementan los [criterios funcionales](03-requerimientos-funcionales.md); todavía no son resultados de pruebas.

## Pendientes de validación

Confirmar el periodo de disponibilidad, la carga para rendimiento, la métrica de cobertura, el mecanismo de recuperación de cuenta y el alcance de auditoría. Las tecnologías y herramientas se escogerán en Diseño. El cronograma se realizará al final.
