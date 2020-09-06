import React from 'react'
import './TareaListado.css'
// Components
import TareaNota from './TareaNota'

const TareaListado = ({username,nombre, listaTareas,resetLista}) =>{
    return(
        <div className="tareaListado_contenedor">
            <p className="tareasListado_nombre">{nombre}</p>
            <div className="tareaListado_listado">
                {
                    listaTareas.map( tarea => ( 
                        <TareaNota
                            username = {username}
                            key = {tarea.id}
                            tarea = {tarea}
                            resetLista = {resetLista}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TareaListado