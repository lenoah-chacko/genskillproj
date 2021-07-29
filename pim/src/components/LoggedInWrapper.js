import {  Route, useHistory, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';

import Home from './Home';
import NewNote from './NewNote'
import Note from "./Note";
import Search from "./Search";
import Hashtag from "./Hashtag";
import AllTags from "./AllTags";
import NotFound from './NotFound';

export default function LoggedInWrapper({user,checkLoggedIn}) {
    const history=useHistory()
    const location=useLocation();

	let Notes=[{id:1,Title:"Calling my Wife", DateCreated:"01/12/2018",Tags:["tag1"],Description:"desc1"},
    {id:2,Title:"Calling my Girlfriend", DateCreated: "12/04/2019",Tags:["tag2"],Description:"desc2"},
    {id:3,Title:"Calling my Ex Wife", DateCreated: "18/06/2019",Tags:["tag3"],Description:"desc3"},
    {id:4,Title:"Calling my Ex Girlfriend", DateCreated: "18/06/2020",Tags:["tag4"],Description:"desc4"},
    {id:5,Title:"Calling my Homie", DateCreated: "23/06/2020",Tags:["tag5"],Description:"desc5"},
    {id:6,Title:"Calling my Husband", DateCreated: "26/06/2020",Tags:["tag6"],Description:"desc6"}]

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

    console.log('lol')
    return (
        <div>
            <Route path='/home' render={(props)=>(
            <>
                <Home searchfunc={search} setKeyWord={setKeyWord} Notes={Notes}></Home>
            </>
            )}/>
            <Route path='/tags/:id' render ={(props)=>(
                <>
                {checkLoggedIn}
                <Hashtag user={user} Notes={Notes}></Hashtag>
                </>
            )}/>
            <Route path='/tags' exact render ={(props)=>(
                <>
                {checkLoggedIn}
                <AllTags user={user} Notes={Notes}></AllTags>
                </>
            )}/>
            <Route path='/add'render ={(props)=>(
                <>
                {checkLoggedIn}
                <NewNote user={user} Notes={Notes}></NewNote>
                </>
            )}/>
            <Route path='/note/:id' render ={(props)=>(
                <>
                {checkLoggedIn}
                <Note user={user} Notes={Notes}></Note>
                </>
            )}/>
            <Route path='/search' render={(props)=>(
            <>
                {checkLoggedIn}
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
