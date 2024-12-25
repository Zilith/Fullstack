#### 2.1: Información del curso paso 6 **Hecho**

Terminemos el código para renderizar el contenido del curso de los ejercicios 1.1 - 1.5. Puedes comenzar con el código de las respuestas modelo. Las respuestas modelo para la parte 1 se pueden encontrar yendo al [sistema de envío](https://studies.cs.helsinki.fi/stats/courses/fullstackopen), haciendo clic en _my submissions_ en la parte superior, y en la fila correspondiente a la parte 1, bajo la columna _solutions_, haciendo clic en _show_. Para ver la solución al ejercicio de _información del curso_, haz clic en _index.js_ bajo _kurssitiedot_ ("kurssitiedot" significa "información del curso").

**Ten en cuenta que si copias un proyecto de un lugar a otro, es posible que debas eliminar el directorio _node_modules_ e instalar las dependencias nuevamente con el comando _npm install_ antes de poder iniciar la aplicación.**

En general, no se recomienda copiar todo el contenido de un proyecto y/o agregar el directorio _node_modules_ al sistema de control de versiones.

Cambiemos el componente _App_ de la siguiente manera:

```js
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
```

Define un componente responsable de formatear un solo curso llamado _Course_.

La estructura de componentes de la aplicación puede ser, por ejemplo, la siguiente:

App
  Course
    Header
    Content
      Part
      Part
      ...
copy

Por lo tanto, el componente _Course_ contiene los componentes definidos en la parte anterior, que son responsables de renderizar el nombre del curso y sus partes.

La página renderizada puede verse, por ejemplo, de la siguiente manera:

![captura de pantalla de la aplicación Half Stack](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png)

Aún no necesitas la suma de los ejercicios.

La aplicación debe funcionar _independientemente del número de partes que tenga un curso_, así que asegúrate de que la aplicación funcione si agregas o quitas partes de un curso.

¡Asegúrate de que la consola no muestre errores!

#### 2.2: Información del curso paso 7 **Hecho**

Muestra también la suma de los ejercicios del curso.

![nueva característica añadida de suma de ejercicios](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png)

#### 2.3*: Información del curso paso 8 **Hecho**

Si aún no lo has hecho, calcula la suma de los ejercicios con el método de array [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

**Consejo profesional:** cuando tu código se ve así:

```js
const total = 
  parts.reduce((s, p) => someMagicHere)
```

y no funciona, vale la pena usar _console.log_, que requiere que la función de flecha se escriba en su forma más larga:

```js
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere 
})
```

**¿No funciona? :** Utiliza tu motor de búsqueda para buscar cómo se utiliza _reduce_ en un **Array de Objetos**.

#### 2.4: Información del curso paso 9 **Hecho**

Ampliemos nuestra aplicación para permitir un _número arbitrario_ de cursos:

```js
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // ...
    </div>
  )
}
```

La aplicación puede, por ejemplo, verse así:

![característica adicional de número arbitrario de cursos](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png)

#### 2.5: Módulo separado paso 10 **Hecho**

Declara el componente _Course_ como un módulo separado, que se importa en el componente _App_. Puedes incluir todos los subcomponentes del curso en el mismo módulo.