import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import  Header from './components/header/index.js'
import './index.css';
import './pages/MarcarConsulta/index.css'
import './pages/MarcarConsulta/indexbtn.css'

import Consultas from './pages/MarcarConsulta/index.js'



function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Consultas' element={<Consultas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
