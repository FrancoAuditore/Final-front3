Criterios de evaluacion
- Deberas desarrollar la aplicacion con Javascript + React
- Puedes utilizar librerias adicionales :D (pero tengan cuidado de no retrasarse por eso)
- deberas crear un proyecto PUBLICO, (preferentemente desde uno nuevo)

- Funcionalidades Obligatorias:
  - Rutas: la aplicacion debera contener cuatro secciones
    - Home
    - Contacto
    - Detalle
    - Destacados
    un footer nos acompañara en todo momento
    Un navbar nos acompañara en todo momento que nos permitira navegar entre Home, Contacto y Destacados
  - Conxtext: se manejara esta info
    - tema (claro u oscuro)
    - odontologos
      - https://jsonplaceholder.typicode.com/users
    - funciones necesarias para modificar dicha info
  - Estilos:
    - lo necesario para alternar entre tema claro y oscuro. (pueden ser estilo globales)
  - Home: /
    - debera pedirle al context que busque los odontologos cuando haga mount
    - mostrar un componente Card por cada odontologo
      - enviarle name, username, id y onClick
        - en el onClick se agrega al localStorage
  - Contacto: /contact
    - crear un formulario con la siguiente info
      - nombre
        - debe tener al menos 6 chars
      - email
        - debe tener formato valido (type="email")
    - al hacer submit validar la informacion
      - en caso de error, mostrar en pantalla un mensaje
      - en caso de exito, mostrar en pantalla
        - "Gracias {nombre}, te contactaremos a por {email}"
  - Detalle: /dentist/:id
    - se debera hacer una nueva busqueda para obtener el usuario en particular
      - https://jsonplaceholder.typicode.com/users/:id
    - se mostrara la siguiente informacion
      - Nombre
      - Email
      - Telefono
      - sitio web
  - Destacados: /favs
    - buscar en el localStorage la lista de odontologos
    - mostrar un componente Card por cada odontologo
      - enviarle name, username, id y onClick
        - en el onClick se elimina del localStorage
  - Card
    - recibe name, username, id, onclick
    - muestra los datos que recibe
    - muestra un link que lleva al detalle
    - muestra un boton que llama al onClick

- Funcionalidades opcionales
  (solo para los que necesiten nota)
  - Estilos
    - usar css modules para estilizar la card, el navbar y demas componentes
  - UseReducer
    - manejar el form sumbit con reducer
      - submitedErrors
      - submitedSuccess
  - Testing
    - testing de la card
      - que se muestre el user de forma correcta
      - que se muestre el userName de forma correcta
      - que se muestre el link correctamente
      - que se muestre el boton correctamente
      - que se llame al onClick correctamente
    