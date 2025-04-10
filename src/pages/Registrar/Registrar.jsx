import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaUser, FaLock } from "react-icons/fa";

function Registrar({ handleSubmit}) {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({});

    

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
                setMessage("");
            })
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})       
    }

    const submit = async (e) => {
        e.preventDefault();
        
        
        
       const usersExitent = users.filter((u) => u.email == user.email);

        if(usersExitent.length == 0) {
            
            let msg = "Usuario criado com sucesso";
            let typeMsg = "sucess";
            handleSubmit(user, msg, typeMsg)
            navigate("/");
            
        } else {
            console.log("usuario ja existe");
            setMessage("Email de Usuario Já está em uso!");
            typeMsg = "error";

        }
        
    }


    return (
        <div className="container">
            <form onSubmit={submit}>
                <h1>Criar Conta</h1>
                <div className="input_field">
                    <input name="email" type="email" placeholder="E-mail" required onChange={handleChange}/>
                    <FaUser className="icon" />
                </div>
                <div className="input_field">
                    <input name="password" type="password" placeholder="Senha" onChange={handleChange}/>
                    <FaLock className="icon" />
                </div>

                {message && (
                    <p className="message">{message}</p>
                )}
                
                <button type="submit">Registrar</button>
                
        
                <div className="signup-link">
                    <p>
                        Já tem uma conta?
                        <Link to="/">Entrar</Link>
                    </p>
                </div>
                        
            </form>
        </div>
    )
}

export default Registrar;