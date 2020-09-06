import React,{useState} from 'react'
import './Login.css'

const Login = ({setVistaActual,setUsername}) =>{
    const [error, setError] = useState(false)
    const [user, setUser] = useState("")

    const validar = () =>{
        if( user.length === 0){
            setError(true)
        }
        else{
            setError(false)
            setUsername(user)
            setVistaActual(1)
        }
    }

    const validaEnter = event =>{
        if( event.key === 'Enter'){
            validar()
        }
    }
    return(
        <div className="login_contenedor">
            { error ? <p className="login_error">El usuarios esta vacio</p>:null  }
            <input 
                type ="text" 
                className = "login_username" 
                placeholder = "Username"
                onChange = {e => {setUser(e.target.value.trim())}}
                onKeyPress = { validaEnter}
            />
            <input 
                type="button"
                className="login_login" 
                value="Log in" 
                onClick = {validar}
            />
        </div>
    )
}

export default Login