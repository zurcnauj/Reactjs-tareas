import React from 'react'
import './TareaListado.css'
// Components
import TareaNota from './TareaNota'

const TareaListado = ({nombre, listaTareas}) =>{
    return(
        <div className="tareaListado_contenedor">
            <p className="tareasListado_nombre">{nombre}</p>
            <div className="tareaListado_listado">
                {
                    listaTareas.map( tarea => ( 
                        <TareaNota
                            key = {tarea.id}
                            tarea = {tarea}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TareaListado