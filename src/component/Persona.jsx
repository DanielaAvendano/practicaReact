import React, {useState, Fragment}from 'react'

export const Persona = () => {

    const[nombre, setNombre]=useState("carlos")
    const[cambio,setCambio]=useState("Mi nombre actual")
    const[edad, setEdad]=useState(42)


    return (
        <Fragment>
            <div>
                <p>{cambio}:{nombre} y mi edad es {edad}</p>
                
                <button onClick={(e)=>{
                    setNombre("juan")
                    setCambio("Me cambie el nombre a ")
                    setEdad(18)
                    console.log(`Me cambie el Nombre a ${nombre}`)
                }}>Mostrar</button>
                
               
            </div>
        </Fragment>
    )
}
export default Persona
