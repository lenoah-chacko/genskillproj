import {useState, useEffect} from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';
import NewNote from './components/NewNote';
import Note from './components/Note'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route,useHistory} from 'react-router-dom'
import Search from "./components/Search";
import Hashtag from "./components/Hashtag";
import AllTags from "./components/AllTags";
import EditNote from "./components/EditNote";
function App() {



	const[Notes,setNotes] = useState([])
	const[Tags,setTags]= useState([])

	useEffect(()=>{

		setNotes([{id:1,Title:"Calling my Wife", DateCreated:"01/12/2018",Tags:["Math"],Description:"desc1"},
	    {id:2,Title:"Calling my Girlfriend", DateCreated: "12/04/2019",Tags:["Chemistry"],Description:"desc2"},
	    {id:3,Title:"Calling my Ex Wife", DateCreated: "18/06/2019",Tags:["Math"],Description:"desc3"},
	    {id:4,Title:"Calling my Ex Girlfriend", DateCreated: "18/06/2020",Tags:["Math"],Description:"desc4"},
	    {id:5,Title:"Calling my Homie", DateCreated: "23/06/2020",Tags:["Friend"],Description:"desc5"},
	    {id:6,Title:"Calling my Husband", DateCreated: "26/06/2020",Tags:["Math"],Description:"desc6"}]
		)

		setTags([
			{id:1, name:"Math"},
			{id:2, name:"Family"},
			{id:3, name:"Chemistry"},
			{id:4, name:"Friend"},
			{id:5, name:"Prize"},
			{id:6, name:"Tragedy"},
			{id:7, name:"Birthday"},
			{id:8, name:"Deep thoughts"}]
		)

	},[])


	let loggedIn=true
	//keyword passed to parent(home and search) through that search function defined in app.js
    //search_function searches titles and matches substrings and does islower to match case.
    //makes state in app.js for result array
    //pass result array to search component.

	const[results,setResults] = useState([])
	const[keyWord, setKeyWord] = useState('')
	const[hashTag,setHashTag] = useState('');
	const[tagResults,setTagResults]=useState([])
	const[editValue,setEditValue]=useState({})

	let ans=[];
	let tagAns=[];

	const history=useHistory();

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

	useEffect(() =>{
		findTagNotes();

	},[hashTag])

	const findTagNotes=()=>{
		for(let i=0;i<Notes.length;i++)
		{
			let ntags=Notes[i].Tags;

			for(let j=0;j<ntags.length;j++)
			{
				if(hashTag===ntags[j])
				{
					tagAns.push(Notes[i]);
					break;
				}
			}
		}
		setTagResults(tagAns);
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
	<Route path='/edit' render={(props)=>(
			<>
			<EditNote Value={editValue} Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></EditNote>
			</>
		)}/>
    <Route path='/tags/:id' render={(props)=>(
			<>
			<Hashtag hashTag={hashTag} Notes={tagResults}></Hashtag>
			</>)}/>
    <Route path='/tags' exact render={(props)=>(
		<>
		<AllTags Tags={Tags} setHashTag={setHashTag} searchfunc={findTagNotes}></AllTags>
		</>
	)}/>
<Route path='/add' component={(props)=>(
		<>
		<NewNote Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></NewNote>
		</>
	)}/>
	<Route path='/note/:id'render ={(props)=>(
		<>
		<Note Notes={Notes} setNotes={setNotes} editValue={editValue} setEditValue={setEditValue}></Note>
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
