import {useState} from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';
import NewNote from './components/NewNote';
import Note from './components/Note'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Search from "./components/Search";
import Hashtag from "./components/Hashtag";
import AllTags from "./components/AllTags";


function App() {
	let Notes=[{id:1,Title:"Calling my Wife", DateCreated:"01/12/2018",Tags:["tag1"],Description:"desc1"},
    {id:2,Title:"Calling my Girlfriend", DateCreated: "12/04/2019",Tags:["tag2"],Description:"desc2"},
    {id:3,Title:"Calling my Ex Wife", DateCreated: "18/06/2019",Tags:["tag3"],Description:"desc3"},
    {id:4,Title:"Calling my Ex Girlfriend", DateCreated: "18/06/2020",Tags:["tag4"],Description:"desc4"},
    {id:5,Title:"Calling my Homie", DateCreated: "23/06/2020",Tags:["tag5"],Description:"desc5"},
    {id:6,Title:"Calling my Husband", DateCreated: "26/06/2020",Tags:["tag6"],Description:"desc6"}]

	let loggedIn=true
	//keyword passed to parent(home and search) through that search function defined in app.js
    //search_function searches titles and matches substrings and does islower to match case.
    //makes state in app.js for result array
    //pass result array to search component.

	const[results,setResults] = useState([])
	const[keyWord, setKeyWord]= useState('')
	let ans=[];
  const search = ()=>{
	var kw=keyWord.toLowerCase();
	for(let i=0;i<Notes.length;i++)
	{
		var note=Notes[i].Title.toLowerCase();
		console.log(note,kw);
		if(note.includes(kw))
		{
			ans.push(Notes[i]);
		}
	}
	setResults(ans)
	}






  return (
    <div className={App}>
    <Router>
      <Navbar loggedIn={loggedIn}></Navbar>

    <Route path='/' exact render={(props)=>(
      <>
        <Home searchfunc={search} setKeyWord={setKeyWord} Notes={Notes}></Home>
      </>
    )}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/tags/:id' component={Hashtag}/>
    <Route path='/tags' exact component={AllTags}/>
	<Route path='/add' component={NewNote}/>
	<Route path='/note/:id'render ={(props)=>(
		<>
		<Note Notes={Notes}></Note>
		</>
	)}/>
    <Route path='/search' render={(props)=>(
      <>
        <Search searchfunc={search} searchResults={results} setKeyWord={setKeyWord}></Search>
      </>
    )}/>
    <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
