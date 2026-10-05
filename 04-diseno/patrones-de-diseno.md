# Patrones de diseño seleccionados

Proponemos tres patrones para organizar SIAR. Son decisiones de diseño; todavía no hay código.

| Patrón | Cómo se aplicará | Ejemplo |
| --- | --- | --- |
| Modelo–Vista–Controlador (MVC) | Separar la información y sus reglas, las pantallas y la recepción de solicitudes. | La vista muestra un pedido; el controlador recibe el cambio y lo envía al servicio. |
| Capa de servicios (Service Layer) | Coordinar una operación, sus permisos y los cambios que deben guardarse juntos. | El servicio de reservas comprueba disponibilidad y registra la reserva. |
| Repositorio (Repository) | Reunir las consultas y el guardado de cada grupo de datos. | El repositorio de pedidos busca un pedido y guarda sus cambios. |

En MVC, el modelo incluye los datos y las reglas del sistema; no se limita a las tablas. Los servicios y las clases del dominio forman parte de esa organización.

Los controladores no harán consultas directas a la base de datos. Los repositorios tampoco decidirán si un mesero puede cobrar: esa validación corresponde al servicio.

La [arquitectura](arquitectura-del-sistema.md) muestra cómo se conectan estas partes y la [justificación](justificacion-de-patrones.md) explica su elección.
