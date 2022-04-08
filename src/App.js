import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar';
import Home from './components/Home b';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <h1 style={{ color: 'red', fontSize:'bold'}}>MON SUPER TITRE</h1>
    </div>
  );
}

export default App;
