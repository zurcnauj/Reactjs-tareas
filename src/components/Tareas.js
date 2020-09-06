import React from 'react'
import './Tareas.css'
// Components
import TareaListado from './TareaListado'
const Tareas = ({listaTareas,setListaTareas}) =>{
    
    return(
        <div className="tareas_contenedor">
            <div className="tareas_tarealistado">
                <TareaListado 
                    nombre = {"Pendientes"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "pendiente"))}
                />
            </div>
            <div className ="tareas_tarealistado">
                <TareaListado 
                    nombre = {"En proceso"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "proceso"))}
                />
            </div>
            <div className="tareas_tarealistado">
                <TareaListado 
                    nombre = {"Terminadas"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "completo"))}
                />
            </div>
            
        </div>
    )
}

export default Tareas