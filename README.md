# forms-uitesis

[forms-uitesis page](https://begandroide.github.io/forms-uitesis)

En la necesidad de crear formularios "dinámicos" como los de Google Forms, se buscaron las distintas librerías disponibles para ello.

Se usará Angular ya que se tiene experiencia con este framework UI, además servirá para enfocarnos en el núcleo del problema (que es hacer encuestas como las de Google Forms).

Dentro de las librerías existentes para Angular encontramos:
- @ng-dynamic-forms-core
- formio
- ng-formly
- ngx-forms
- otras

Según las estadísticas de [npmtrends](https://www.npmtrends.com/@ngx-formly/core-vs-formio-vs-ng-formly-vs-ngx-forms-vs-@ng-dynamic-forms/core) podemos ver que la comunidad desarrolladora ha usado durante varios años con más frecuencia `@ngx-formly/core`. En segundo lugar está `formio` y luego entontramos a `@ng-dynamic-forms/core`. Podemos notar una extrema diferencia en las tendencias.

![npmtrends dynamic forms](images/npmtrends.png)

Dadas las tendencias entre los desarrolladores, se ejecutó una prueba con las tres librerías en donde las tres satisfacen los requisitos en cuanto al objetivo. Por otro lado, en cuanto a la configuración y extensión de controles personalizados la mejor es `@ngx-formly/core`.

Lo otro muy bueno de ngx-formly es su variedad de frameworks UI, teniendo disponible `Material UI`, `Bootstrap`, `ng-zorro-antd`, `KendoUI`. En donde todas ellas son muy renombradas en el ámbito de la ingeniería frontend en el extranjero.

Por lo anterior, se trabajará con `@ngx-formly/core` dado su facilidad de extensión y uso, además de la potencialidad de tener un abanico de frameworks UI.

En cuanto a los frameworks UI disponibles, de momento hay preferencia por `ng-zorro-antd`, dada la diversidad de controles que posee. Además se está evaluando usar `TailwindCss` para desarrollar más rápido el esqueleto de la aplicación.

## Controles Necesarios

### Sección
Agrupan un formulario con título y descripción del formulario; además posee la funcionalidad de duplicar, mover o eliminar la sección.


### Pregunta
Esta pertenece a una sección y tiene un campo de texto en donde se añade la pregunta. Permite añadir una imagen.

Posee un selector en donde uno puede elegir el tipo de control o de pregunta, los disponibles son:

1. Respuesta corta
2. Párrafo
3. Varias opciones: Radio group vertical que deja seleccionar solo un elemento.
4. Casillas: Checkboxes verticales que deja seleccionar múltiples elementos.
5. Desplegable: select
6. Subir archivos
7. Escala lineal (radios horizontales)
8. Cuadrícula de varias opciones (matriz de radios)
9. Cuadrícula de casillas
10. Fecha
11. Hora

Además posee las funcionalidades:
- Pregunta se puede mover de lugar en el formulario
- Tiene botón eliminar y duplicar.
- Tiene switch de si es obligatorio o no.

## RoadMap

- [X] Incluir Tailwindcss
- [ ] Crear módulo de gestión de encuestas.
- [ ] Crear Componente Sección
- [ ] Crear Componente que añadirá controles a las secciones.
- [ ] Crear Servicio de formularios dinámicos para manejar índices

## Ideas para seguir

Existe una librería para angular llamada ngx-formly-desinger, la cual implementa la creación de un formulario usando bootstrap.
La idea es intentar extender la librería o adaptarla para nz-ant-design para homologar la UI.
