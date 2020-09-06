import React from 'react'
import './Menu.css'

const Menu = ({setVistaActual,username}) =>{
    return(
        <div className = "menu_contenedor">
            <p className = "menu_username">{username}</p>
            <ul className = "menu_items">
                <li 
                    className = "menu_item menu_boton"
                    onClick = {() => setVistaActual(1)}
                >
                    Tareas
                </li>
                <li 
                    className = "menu_item menu_boton"
                    onClick = {() => setVistaActual(2)}
                >
                    Nueva Tarea
                </li>
            </ul>
            <p 
                className="menu_logout menu_boton"
                onClick = {() => setVistaActual(0)}
            >
                Log out
            </p>
        </div>
    )
}

export default Menu