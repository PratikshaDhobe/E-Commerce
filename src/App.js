import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Images from './Components/Images';
import Index1 from './Components/Index1';
import Men from './Components/Men';
import Menwatch from './Components/Menwatch';
import Navbar from './Components/Navbar';
import Warrenty from './Components/Warrenty';
import Womenwatches from './Components/Womenwatch';
import Bestseller from './Components/Bestseller.jsx';
 import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import Login from './Components/Login.jsx';


function App() {
  return (
    <>
     <BrowserRouter> 
       <Nav/>
       <Navbar/>
       <Routes> 
      
      <Route path="/"element={<Images/>} /> 
      <Route path="/Men"element={<Men/>}/>
      <Route path="/Menwatch"element={<Menwatch />}/>
      <Route path="/Womenwatch"element={<Womenwatches />}/>
      <Route path="/Bestseller"element={<Bestseller />}/>
      <Route path="/Index1"element={<Index1 />}/>
      <Route path="/Warrenty"element={<Warrenty />}/>
      <Route path="/Login"element={<Login/>}/>
     </Routes>
      <Bestseller />

      
      <Menwatch />
      <Womenwatches />
      <Index1 />
       <Warrenty />
       <Men/>
       <Footer />
       </BrowserRouter>
    </>
  );
}

export default App;