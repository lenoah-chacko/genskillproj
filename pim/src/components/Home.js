import NoteView from "./NoteView"
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'

export default function Home({searchfunc,Notes, setKeyWord}) {

	const [allNotes,setAllNotes]=useState([])
    useEffect(() => {
        setAllNotes(Notes)
    },[Notes])
	const searchOnChange=(e)=>
	{
		setKeyWord(e.target.value);
	}


    return (
        <div className="homebg page">
            <div className="container pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-2"></div>
                    <div id="searchbar"className="md-col-4 sm-col-8">
                        <div className="input-group mb-3">
                        <input id="search" type="text" className="form-control" onChange={searchOnChange} placeholder="Search Notes"/>
                            <div className="input-1-append">
                                <Link to='/search'>
                                <button className="btn btn-outline-secondary teal-outline" type="submit" onClick={(e)=>searchfunc(e)}>Search</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>
                            <h2 className="text-center">
                                Your Notes
                                <Link to='/add'>
                                    <div className="wrapper">
                                        <i className="fa fa-plus ml-2 text-light plus-grow"></i>
                                    </div>
                                </Link>
                            </h2>
                            {allNotes.map(note=>(
								<Link to={'/note/'+note.id} style={{ textDecoration: 'none' }}>
									<NoteView key={note.id} Title={note.Title} DateCreated={note.DateCreated}>
									</NoteView>
								</Link>
							))}
                    </div>
            </div>
        </div>
    )
}
