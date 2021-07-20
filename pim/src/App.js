
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Home/>
	  <Register/>
    </div>
  );
}

export default App;
