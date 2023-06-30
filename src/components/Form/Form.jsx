import { useState } from "react"

const Form=()=>{
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')

    const [nombreError, setNombreError] = useState("");
    const [emailError, setEmailError] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        
       // Validación del campo de nombre
    if (nombre.trim() === "") {
      setNombreError("Por favor, ingresa tu nombre completo");
      return;
    } else {
      setNombreError("");
    }

    // Validación del campo de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Por favor, ingresá un correo electrónico válido");
      return;
    } else {
      setEmailError("");
      console.log("Formulario enviado")
    }

    setNombre("");
    setEmail("");
    setNombreError("");
    setEmailError("");
  }
    return(
      <div>
     Para mas info Completa el siguiente Form y nos comunicaremos con vos:
    <br></br>
    <br></br>

    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nombre"> Nombre completo:</label>
      <input
      id="nombre"
      placeholder='Ingrese su nombre'
      value={nombre}
      onChange={(e)=> setNombre (e.target.value)}
      required
/> 
      {nombreError ? <span className="error">{nombreError}</span>:undefined}
    </div>
    <div>

    <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      {emailError ? <span className="error">{emailError}</span> :undefined} 
      </div>
    <button type="submit">Enviar</button>
    </form>
    </div>
)

}
export default Form