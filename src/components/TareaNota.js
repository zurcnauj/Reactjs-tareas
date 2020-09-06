import React, {useState}from 'react'
// Css
import './TareaNota.css'

const TareaNota = ({username, tarea, resetLista}) => {
    const [activo,setActivo] = useState(true)

    const tomarTarea = () => {
        tarea.encargado = username
        tarea.estado = "proceso"
        resetLista()
    }

    const completarTarea = () => {
        tarea.estado = "complelto"
        resetLista()
    }

    const botonera = () =>{
        let retu = null
        if(tarea.estado === "pendiente"){
            retu = 
                <div className = "tareaNota_extra">
                    <input type="button" className="tareaNota_boton" onClick={tomarTarea} value="tomar"/>
                </div>
        }
        else if(tarea.estado === "proceso"){
            retu = 
                <div className = "tareaNota_extra">
                    <p>encargado: {tarea.encargado}</p>
                    <input type="button" className="tareaNota_boton"  onClick={completarTarea} value="completar"/>
                </div>
        }
        else{
            retu =
                <div className = "tareaNota_extra">
                    <p>encargado: {tarea.encargado}</p>
                </div>
        }
        return retu
    }

    return(
        <div 
            className = "TareaNota_contenedor"
            onMouseEnter = {() => setActivo(false)}
            onMouseLeave = {() => setActivo(true)}
        >
            <div className="TareaNota_id">{tarea?.id} </div>
            
            {
                activo?
                    <p>{tarea.desCorta} </p>:
                    <div>
                        <p>{tarea.desLarga}</p>
                        {botonera()}
                    </div>
            }
        </div>
    )
}

export default TareaNota