
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer SaludoInicial={"Elige tus productos y sé parte de nuestra comunidad"}/>
      
    </div>
  );
}

export default App;
