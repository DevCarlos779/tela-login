import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaUser, FaLock } from "react-icons/fa";

function Registrar({ handleSubmit}) {

    const navigate = useNavigate();

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
            })
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})       
    }

    const submit = (e) => {
        e.preventDefault();
        
       const usersExitent = users.filter((u) => u.email == user.email);

        if(usersExitent.length == 0) {
           console.log("usuario criado");
           handleSubmit(user)
           navigate("/",{ state: { message: 'usuario criado com sucesso!' } })  
            
        } else {
            console.log("usuario ja existe");

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