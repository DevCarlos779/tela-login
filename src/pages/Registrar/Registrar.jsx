import { Link } from "react-router-dom";
import { useState } from "react";

import { FaUser, FaLock } from "react-icons/fa";

function Registrar({ handleSubmit}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(username, password)
        
    }


    return (
        <div className="container">
            <form onSubmit={submit}>
                <h1>Criar Conta</h1>
                <div className="input_field">
                    <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div className="input_field">
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon" />
                </div>

                
                <button type="submit">Registrar</button>
                
        
                <div className="signup-link">
                    <p>
                        Já tem uma conta?
                        <a href="#">Entrar</a>
                    </p>
                </div>
                        
            </form>
        </div>
    )
}

export default Registrar;