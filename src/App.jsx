import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './App.css'
import Login from './Components/Login/Login'
import Registrar from "./pages/Registrar/Registrar";
import Logado from "./pages/Logado/Logado";


function App() {

  const [type, setType] = useState("");

  const [message, setMessage] = useState("");

  const [users, setUsers] = useState([]);

  function createAcount(user, Message, typeMsg) {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
  })
      .then((resp) => resp.json())
      .then((data) => {
          setMessage(Message);
          setType(typeMsg);
      })
      .catch((err) => console.log(err))
  }

  function verificarAcount(username, password) {
    
    fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then((resp) => resp.json())
      .then((data) => {
          setUsers(data);
          users.map((user) => {
            if(user.email == username && user.password == password) {
                console.log("usuario encontrado");
                //Navegar para a pagina logado
            } else {
              setMessage("Usuario Não Existe");
              setType("error");
            }
          })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <Router>
        
        

          <Routes>
            <Route exact path="/" element={<Login message={message} type={type} handleSubmit={verificarAcount} />}></Route>
            <Route path="/registrar" element={<Registrar handleSubmit={createAcount}/>}></Route>
            <Route path="/logado" element={<Logado />}></Route>
            
          </Routes>
        
      </Router>
    </div>
    
  )
}

export default App
