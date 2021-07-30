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


	const csvtoarr=(tag)=>{
		var arr2=tag.split(',')
			arr2=arr2.map(word=>word.trim())
			return arr2
	}

	const[empty,setEmpty]=useState('')

	async function getNotes()
	{
		console.log('user', user);
		var request={'id':user}
		const response = await fetch('/getallnotes', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		let data = await response.json();
		if(data.length==0)
		{
			setEmpty('You have no Notes')
		}
		data.forEach((note, i) => {
			var arr=csvtoarr(note.hashtags);
			note.hashtags=arr;
		});
		console.log(data);


		if(data.length>0)
		{
			setNotes(data);

		}
		console.log(data);
		return data;
	}

	async function getTags()
	{
		console.log('user', user);
		var request={'id':user}
		const response = await fetch('/hashtags', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})

		let data = await response.json();
		console.log('getting tags' , data);
		setTags(data);
	}


	useEffect(()=>{

		getNotes();
		getTags();


	},[])

    const[results,setResults] = useState([])
    const[keyWord, setKeyWord]= useState('')

    let ans=[];
    const search = ()=>{
    var kw=keyWord.toLowerCase();
    for(let i=0;i<Notes.length;i++)
    {
        var note=Notes[i].title.toLowerCase();
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
			let ntags=Notes[i].hashtags;

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
                <Home empty={empty} searchfunc={search} setKeyWord={setKeyWord} Notes={Notes}></Home>
            </>
            )}/>
            <Route path='/tags/:id' render={(props)=>(
			<>
			<Hashtag user={user} hashTag={hashTag} Notes={tagResults}></Hashtag>
			</>)}/>
            <Route path='/edit' render={(props)=>(
			<>
			<EditNote user={user} Value={editValue} Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></EditNote>
			</>
		    )}/>
            <Route path='/tags' exact render={(props)=>(
            <>
            <AllTags user={user} Tags={Tags} setHashTag={setHashTag} hashTag={hashTag} searchfunc={findTagNotes}></AllTags>
            </>
            )}/>
            <Route path='/add' component={(props)=>(
            <>
            <NewNote user={user} Notes={Notes} setNotes={setNotes} addTags={Tags} setAddTags={setTags}></NewNote>
            </>
            )}/>
            <Route path='/note/:id' render ={(props)=>(
                <>
                <Note setEmpty={setEmpty} user={user} Notes={Notes} setNotes={setNotes} editValue={editValue} setEditValue={setEditValue}></Note>
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
