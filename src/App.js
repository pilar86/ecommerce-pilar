import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings = " Beauty & Skin Care"/>
      
  {/*    
      <Carrousel/>
      <Products/>
      <Footer/>  
  */}  
    </div>
     
  );
}


export default App;
