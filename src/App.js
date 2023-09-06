import './App.css';
import Nav from './components/nav';
import Nav2 from './components/nav2';
import Header from './components/header';
import Home from './components/home';
import Contact from './components/Contact';
import About from './components/About'
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  return (
 <>
<BrowserRouter >
<header className='header'>
  
   <Header />
    <Nav />
   <Nav2 />
</header>
<Routes>
   <Route path='/' element={<Home />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/about' element={<About />} />
  </Routes> 

   </BrowserRouter>
 </>
  );
}

export default App;
