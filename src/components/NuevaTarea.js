import React,{useState} from 'react'
import './NuevaTarea.css'

const NuevaTarea = ({userName, listaTareas, setListaTareas}) =>{
    const [id, setID] = useState("")
    const [errorID,setErrorId] = useState(false)
    const [desCorta,setDesCorta] = useState("")
    const desCortaMax = 33
    const [errorDesCorta,setErrorDesCorta] = useState(false)
    const [desLarga,setDesLarga] = useState("")
    const desLargaMax = 99
    const [errorDesLarga,setErrorDesLarga] = useState(false)

    const contador = (actual,max) => {
        return max - actual;
    }

    const validarTarea = () =>{
        setErrorId(listaTareas.includes(id))
        setErrorDesCorta(desCorta.length > desCortaMax )
        setErrorDesLarga(desLarga.length > desLargaMax)

        if(!errorID && !errorDesCorta && !errorDesLarga){
            listaTareas.push({
                id: id.trim(),
                desCorta: desCorta.trim(),
                desLarga: desLarga.trim(),
                creador:userName,
                estado: "pendiente",
                encargado: null
            })
            setListaTareas(listaTareas)
            setID("")
            setDesCorta("")
            setDesLarga("")
        }
    }

    return(
        <div className="nuevaTarea_contenedor">
            
            <p className="nuevaTarea_label"> ID</p>
            {errorID? <p className="nuevaTarea_error">El id ya existe</p> :null  }
            <input 
                type = "text"
                className = "nuevaTarea_input"
                placeholder = "ID"
                value = {id}
                onChange = { e => setID(e.target.value)}
            />
            <p className="nuevaTarea_label"> Descripcion corta max {contador(desCorta.length,desCortaMax)}/{desCortaMax}</p>
            {errorDesCorta? <p className="nuevaTarea_error">Supero el maximo</p>:null   }
            <input 
                type = "text"
                className = "nuevaTarea_input"
                placeholder = "descripcion corta"
                value = {desCorta}
                onChange = { e => setDesCorta(e.target.value)}
            />
            <p className="nuevaTarea_label"> Descripcion corta max {contador(desLarga.length,desLargaMax)}/{desLargaMax}</p>
            {errorDesLarga? <p className="nuevaTarea_error">Supero el maximo</p>:null   }
            <textarea 
                className = "nuevaTarea_input"
                cols = "7"
                rows = "3"
                placeholder = "descripcion larga"
                value = {desLarga}
                onChange = { e => setDesLarga(e.target.value)}
            />
            <input 
                type = "button"
                className = "nuevaTarea_crear"
                value = "create"
                onClick = {validarTarea}
            />
        </div>
    )
}

export default NuevaTarea