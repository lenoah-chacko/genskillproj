
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar></Navbar>
      
    <Route path='/' exact component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    </Router>
    </div>
  );
}

export default App;
