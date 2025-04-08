import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Login from './Components/Login/Login'
import Registrar from "./pages/Registrar/Registrar";


function App() {

  function createAcount(username, password) {
    console.log("Conta criada" + username);
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
