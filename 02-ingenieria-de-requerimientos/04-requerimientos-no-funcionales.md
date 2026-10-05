# REQUERIMIENTOS NO FUNCIONALES:

Los requerimientos no funcionales establecen las condiciones de calidad, seguridad, rendimiento y organización técnica que debe cumplir SIAR. Estos requisitos se aplican de manera general a todos los módulos del sistema y permiten verificar aspectos como la disponibilidad, el tiempo de respuesta, la protección de la información, el control de acceso, la arquitectura, las pruebas y la documentación.

| RNF | Descripción del requerimiento | Criterio de aceptación |
| --- | --- | --- |
| RNF01 | El sistema debe ser una aplicación web responsiva. | La interfaz se adapta a diferentes tamaños de pantalla sin impedir el uso de las funciones principales. |
| RNF02 | El sistema debe tener una disponibilidad mínima del 95 %. | La disponibilidad registrada durante el periodo evaluado es igual o superior al 95 %. |
| RNF03 | El sistema debe tener un tiempo de respuesta menor a 3 segundos. | Las operaciones evaluadas responden en menos de 3 segundos bajo condiciones normales de funcionamiento. |
| RNF04 | Las contraseñas deben almacenarse de forma cifrada. | Las contraseñas almacenadas no pueden visualizarse como texto legible. |
| RNF05 | El sistema debe implementar control de acceso por roles. | Cada usuario accede únicamente a las funciones autorizadas para el rol asignado. |
| RNF06 | El sistema debe conservar un registro de auditoría. | Las operaciones auditadas permiten identificar la acción realizada y el usuario responsable. |
| RNF07 | El sistema debe desarrollarse con una arquitectura en capas. | El proyecto presenta una separación identificable entre presentación, lógica de negocio y acceso a datos. |
| RNF08 | El proyecto debe utilizar Git obligatoriamente. | El repositorio conserva el historial de cambios y los commits realizados durante el desarrollo. |
| RNF09 | El proyecto debe alcanzar una cobertura mínima de pruebas del 70 %. | El reporte de pruebas evidencia una cobertura igual o superior al 70 %. |
| RNF10 | El proyecto debe contar con documentación técnica completa. | La documentación permite comprender la arquitectura, configuración, ejecución y mantenimiento del sistema. |
