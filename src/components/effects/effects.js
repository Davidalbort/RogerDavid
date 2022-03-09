import { useState } from "react"


function Effect () 
{

    const [input, setInput] = useState('Soy el valor por defecto')
    

    return (

      <div className="input-container">

        <input onInput = { event => setInput( event.target.value ) }/>

        <button> {input} </button>

      </div>  
      
    )

}

export default Effect