
import Navbar from "./components/Navbar";
import Register from './components/Register';
import Login from './components/Login';
import NewTask from './components/NewTask';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
	  <NewTask/>
    </div>
  );
}

export default App;
