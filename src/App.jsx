
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Packages from './components/pages/Packages';










function App() {
  

  return (
  <> 
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/packages' element={<Packages/>}/>

  </Routes>

  </>

   
 
   
  
  );
}

export default App;
