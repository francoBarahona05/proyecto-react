import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>,
      <Body/>,
      <ItemListContainer greeting={"hola mundo!!"} />,
      <Footer/>,
    </div>
  );
}

export default App;