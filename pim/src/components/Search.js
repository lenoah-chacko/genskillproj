import NoteView from "./NoteView"
import { Link } from "react-router-dom"

export default function Search({searchfunc,searchResults,setKeyWord}) {


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
                        <input id="search" type="text" className="form-control" onChange={searchOnChange}placeholder="Search Notes"/>
                            <div className="input-1-append">
                                <button className="btn btn-outline-secondary teal-outline" type="submit" onClick={(e)=>searchfunc(e)}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>

                            <h2 className="text-center">Search results</h2>

                            {searchResults.map(note=>(
								<Link to={'/note/'+note.id} style={{ textDecoration: 'none' }}>
									<NoteView Title={note.Title} DateCreated={note.DateCreated}>
									</NoteView>
								</Link>
							))}

                    </div>
                </div>
            </div>
    )
}
