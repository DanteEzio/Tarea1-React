import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNvidia from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div id="1" className="App">
      <NavbarNvidia />
      <ItemListContainer welcomePage={"Bienvenidos"}/>
    </div>
  );
}

export default App;
