import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './App.css'
import Login from './Components/Login/Login'
import Registrar from "./pages/Registrar/Registrar";
import Logado from "./pages/Logado/Logado";


function App() {

  

  const [users, setUsers] = useState([])

  function createAcount(user) {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
  })
      .then((resp) => resp.json())
      .then((data) => {
          //navigate("/projects",{ state: { message: 'Projeto criado com sucesso!' } })
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
            }
          })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <Router>
        
        

          <Routes>
            <Route exact path="/" element={<Login handleSubmit={verificarAcount} />}></Route>
            <Route path="/registrar" element={<Registrar handleSubmit={createAcount}/>}></Route>
            <Route path="/logado" element={<Logado />}></Route>
            
          </Routes>
        
      </Router>
    </div>
    
  )
}

export default App
