import {useState, useEffect} from 'react'
import Navbar from "./components/Navbar";
import Register from './components/Register';
import Login from './components/Login';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, useHistory, Switch} from 'react-router-dom'
import NotFound from './components/NotFound';
import LoggedInWrapper from './components/LoggedInWrapper';


function App() {
	const history=useHistory();


	//keyword passed to parent(home and search) through that search function defined in app.js
    //search_function searches titles and matches substrings and does islower to match case.
    //makes state in app.js for result array
    //pass result array to search component.


	const[user,tweakUser] = useState(localStorage.getItem('userID'))
	const[name, setName] = useState('');




  return (
    <div className={App}>
    <Router>
      <Navbar user={user} name={name} tweakUser={tweakUser}></Navbar>
	<Switch>
    <Route path='/login'render ={(props)=>(
		<>
		<Login user={user} setName={setName} tweakUser={tweakUser}></Login>
		</>
	)}/>
    <Route path='/register'render ={(props)=>(
		<>
		<Register setName={setName} tweakUser={tweakUser} user={user} Notes={Register}></Register>
		</>
	)}/>
    <Route path='/' render ={(props)=>(
		<>
		<LoggedInWrapper user={user}></LoggedInWrapper>
		</>
	)}/>
	</Switch>
    <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
