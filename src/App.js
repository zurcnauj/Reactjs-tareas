import React,{useState} from 'react';
// CSS
import './App.css'
// Components
import Login from './components/Login'
import Menu from './components/Menu'
import NuevaTarea from './components/NuevaTarea'
import Tareas from './components/Tareas'

function App() {
  const [vistaActual, setVistaActual] = useState(0)
  const [userName, setUserName] = useState("Zurcnauj")
  const [listaTareas, setListaTareas] = useState([
    { id:"tarea 1", desCorta: "Descripcion corta", desLarga: "Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga", creador:"Usuario 01", estado: "pendiente", encargado: null },
    { id:"tarea 2", desCorta: "Descripcion corta", desLarga: "Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga", creador:"Usuario 01", estado: "pendiente", encargado: null },
    { id:"tarea 3", desCorta: "Descripcion corta", desLarga: "Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga", creador:"Usuario 01", estado: "proceso", encargado: "Usuario 03" },
    { id:"tarea 4", desCorta: "Descripcion corta", desLarga: "Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga", creador:"Usuario 01", estado: "pendiente", encargado: "Usuario 03" },
    { id:"tarea 5", desCorta: "Descripcion corta", desLarga: "Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga Descripcion larga", creador:"Usuario 01", estado: "completo", encargado: "Usuario 03" }
  ])

  const establecerVista = () =>{
    let retu;
    switch(vistaActual){
      case 0:
        retu = 
          <Login
          setVistaActual = {setVistaActual}
          setUserName = {setUserName}
          />
        break;
      case 1:
        retu = 
          <Tareas 
            listaTareas = {listaTareas}
            setListaTareas = {setListaTareas}
          />
        break;
      case 2:
        retu = 
          <NuevaTarea 
          userName = {userName}
          listaTareas = {listaTareas}
          setListaTareas = {setListaTareas}
          />
        break;
      default:
        retu = null;
    }
    return retu
  }

  return (
    <div>
      {vistaActual !== 0?
        <Menu 
          setVistaActual = {setVistaActual}
          userName = {userName}
        />
        : null
      }
      <div>
        {establecerVista()}
      </div>
    </div>
  );
}

export default App;
