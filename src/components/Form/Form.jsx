import { useState } from "react"

const Form=()=>{

    const [error,setError] = useState('')
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        
        
        if(nombre.length < 3){
            
            console.error("revise el nombre ingresado")
            setError("Revise el nombre ingresado")
          }
          else if(email < 6  ){
              console.error("el campo tiene que contener @")
              setError("el campo tiene que contener @")
          }
          else{
          
          setError()
          
          setSubmitedValues({ 
              nombre,
              email,
          })
          setNombre('')
          setEmail('')
        }
       }
return(
      <>
    Para mas info Completa el siguiente Form y nos comunicaremos con vos:
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nombre"> Nombre completo:</label>
      <input
      id="nombre"
      placeholder='Ingrese su nombre'
      value={nombre}
      onChange={handleChangeNombre}
        required
    /> 
    
    <label htmlFor="email"> Email:</label>
      <input
      id="email"
      placeholder='Ingrese su correo'
      value={email}
      onChange={handleChangeEmail}
        required
    /> 
    </div>
    <button type="submit">Enviar</button>
    </form>
    </>
)

}
export default Form