import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Login from './Components/Login/Login'
import Registrar from "./pages/Registrar/Registrar";


function App() {

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

  return (
    <div className='App'>
      <Router>
        
        

          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/registrar" element={<Registrar handleSubmit={createAcount}/>}></Route>
          </Routes>
        
      </Router>
    </div>
    
  )
}

export default App
