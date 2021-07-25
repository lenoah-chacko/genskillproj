
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';
import NewNote from './components/NewNote';
import Note from './components/Note'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
	  <Navbar></Navbar>
   	<Route path='/' exact component={Home}/>
	<Route path='/add' component={NewNote}/>
	<Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
	<Route path='/note/:id' component={Note}/>

    </Router>

    </div>
  );
}

export default App;
