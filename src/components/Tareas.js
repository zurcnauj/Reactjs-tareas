import React from 'react'
import './Tareas.css'
// Components
import TareaListado from './TareaListado'
const Tareas = ({username,listaTareas,setListaTareas}) =>{

    const resetLista = () => {
        setListaTareas([...listaTareas])
    }

    return(
        <div className="tareas_contenedor">
            <div className="tareas_tarealistado">
                <TareaListado 
                    username = {username}
                    nombre = {"Pendientes"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "pendiente"))}
                    resetLista = {resetLista}
                />
            </div>
            <div className ="tareas_tarealistado">
                <TareaListado 
                     username = {username}
                    nombre = {"En proceso"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "proceso"))}
                    resetLista = {resetLista}
                />
            </div>
            <div className="tareas_tarealistado">
                <TareaListado 
                    username = {username}
                    nombre = {"Terminadas"} 
                    listaTareas = { listaTareas.filter(e => ( e.estado === "complelto"))}
                    resetLista = {resetLista}
                />
            </div>
            
        </div>
    )
}

export default Tareas