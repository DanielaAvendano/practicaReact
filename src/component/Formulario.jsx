import React, {useState }from 'react'
import '../assets/css/form.css'

export const Formulario = () => {
    const[nombre,setNombre]=useState("")
    const[estudio,setEstudio]=useState("")
    return (
        <div className='forms jumbotron'>
            <form>
            <h1 className='text-center mb-3'>Datos de persona</h1>
                <label><strong>Nombres y apellidos</strong></label>
                <input type='text' className="form-control"/>
                <label className='mt-1'><strong>Estudio</strong></label>
                <select className='form-control'>
                    <option value='Sin estudio'>Sin estudio</option>
                    <option value='Primaria'>Primatia</option>
                    <option value='Secundaria'>Secundaria</option>
                    <option value='Tecnico'>Tecnico</option>
                    <option value='Tecnologo'>Tecnologo</option>
                    <option value='Profesional'>Profesional</option>
                    <option value='Posgrado'>Profesional</option>

                
                </select>
                <div className='text-center'>
                    <button className='btn btn-primary mt-3'>Mostrar</button>
                </div>
                <div>
                    <h1 className='text-center'>Datos Personas</h1>
                    <p>Nombre:{nombre}</p>
                    <p>Estudio:{estudio}</p>
                </div>
            </form>
        </div>
    )
}

export default Formulario