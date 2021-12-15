import React,{useEffect,useState} from 'react'
import { consumirApiProductoGet } from '../../assets/js/api'

const Efecto = () => {

  

const[nombre,setNombre]=useState("")
const[visible,setVisible]=useState(0)

useEffect(()=>{
    console.log("Activo UseEffect por cambio de estado")
    if (nombre.length>0){
        setVisible(1)
    }
    else{
        setVisible(0)
    }
},[nombre])

    return (
        <div>
            <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
            <p>nombre{nombre}</p>
            <p>visible {visible}</p>
            {
                visible===0 && <p class="text-danger">Campo Visible!!</p>
            }
        </div>
    )
}

export default Efecto
