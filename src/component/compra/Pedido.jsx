import React,{useEffect,useState} from 'react'
import { consumirApiProductoGet } from '../../assets/js/api'

const Pedido = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        console.log("Se activo useEffect")
    },[])

    return (
        <div>
            <button onClick={(e)=>{setData(1)}}>Cambiar</button>
            {
               
            }
        </div>
    )
}

export default Pedido
