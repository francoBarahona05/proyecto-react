import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import ItemDetailContainer from './components/ItemDetailContainer'
import ContextContainer from './components/ContextContainer';



function App() {
  return (
    <div>
      <ContextContainer>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path=':' element={<Body/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idcategory/' element={<ItemListContainer/>} />
        <Route path='/item/:iditem/' element={<ItemDetailContainer/>} />
      </Routes>  
      <Footer/>
      </BrowserRouter>
      </ContextContainer>
    </div>
  );
}

export default App;