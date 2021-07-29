import {  Route, useHistory, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';

import Home from './Home';
import NewNote from './NewNote'
import Note from "./Note";
import Search from "./Search";
import Hashtag from "./Hashtag";
import AllTags from "./AllTags";
import NotFound from './NotFound';
import EditNote from './EditNote'

export default function LoggedInWrapper({user,checkLoggedIn}) {
    const history=useHistory()
    const location=useLocation();

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
    useEffect(()=>{
        checkLoggedIn()
    },[user])
    let routes=['/','/home','/search','/tags','/add','note:id','tags:id']
	function checkLoggedIn(){
        console.log(location.pathname,location.pathname in routes)
        if(routes.includes(location.pathname))
        {
            if(!!user)
            {
                history.push('/home')
            }
            else{
                history.push('/login')
            }
        }
	}

    const[hashTag,setHashTag] = useState('');
	const[tagResults,setTagResults]=useState([])
	const[editValue,setEditValue]=useState({})

	let tagAns=[];

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
        <div>
            <Route path='/home' render={(props)=>(
            <>
                <Home searchfunc={search} setKeyWord={setKeyWord} Notes={Notes}></Home>
            </>
            )}/>
            <Route path='/tags/:id' render={(props)=>(
			<>
			<Hashtag user={user} hashTag={hashTag} Notes={tagResults}></Hashtag>
			</>)}/>
            <Route path='/edit' render={(props)=>(
			<>
			<EditNote Value={editValue} Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></EditNote>
			</>
		    )}/>
            <Route path='/tags' exact render={(props)=>(
            <>
            <AllTags user={user} Tags={Tags} setHashTag={setHashTag} searchfunc={findTagNotes}></AllTags>
            </>
            )}/>
            <Route path='/add' component={(props)=>(
            <>
            <NewNote user={user} Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></NewNote>
            </>
            )}/>
            <Route path='/note/:id' render ={(props)=>(
                <>
                <Note user={user} Notes={Notes} setNotes={setNotes} editValue={editValue} setEditValue={setEditValue}></Note>
                </>
            )}/>
            <Route path='/search' render={(props)=>(
            <>
                <Search user={user} searchfunc={search} searchResults={results} setKeyWord={setKeyWord}></Search>
            </>
            )}/>
            <Route path="/*" render={(props)=>(
              <>
                <NotFound></NotFound>
              </>
            )}/>
        </div>
    )
}
