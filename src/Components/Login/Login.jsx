import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import "./Login.css"

function Login({ message, type,handleSubmit }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(username, password);
        
    }

    return (
        <div className="container">
            <form onSubmit={submit}>
                <h1>Acesse o sistema</h1>
                <div className="input_field">
                    <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div className="input_field">
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                {message && (
                    <p className={`message ${type}`}>{message}</p>
                )}

                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta?
                        <Link to="/registrar">Registrar</Link>
                    </p>
                </div>
                
            </form>
        </div>
    )
}

export default Login;