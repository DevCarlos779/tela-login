import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import "./Login.css"

function Login({ Message, type, handleSubmit }) {

    const [users, setUsers] = useState([]);
    const [Type, setType] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    if(location.state) {
        setMessage(location.state.message);
    }

    useEffect(() => {
            fetch('http://localhost:5000/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setUsers(data);
                    setMessage(Message);
                    setType(type);
                })
                .catch((err) => console.log(err))
        }, [])

    const submit = (e) => {
        e.preventDefault();
        const emailExistent = users.filter((u) => {
            if(u.email == username) {
                return u;
            }      
            
        })

        if(emailExistent.length > 0 && emailExistent[0].password == password) {
            handleSubmit(username, password);
            navigate("/logado");
            setMessage("");
        } else if(emailExistent.length > 0 && emailExistent[0].password != password) {
            setMessage("Senha Incorreta");
            setType("error");
        } else {
            setMessage("Usuario não existe");
            setType("error");
        }
        
        
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
                    <p className={`message ${Type}`}>{message}</p>
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