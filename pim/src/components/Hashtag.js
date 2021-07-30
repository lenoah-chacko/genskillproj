import NoteView from "./NoteView"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Hashtag({Notes}) {


	//if notes empty, display no notes added yet. DONE
	// for search, if result array and length zero, no notes matching something something. DONE

	// hi {username} displayed on home page left side of logout. DONE
	// if password incorrect/username incorrect validation.  DONE


	let {id}=useParams();
    //copy paste dummy data to app.js.
    //make unique index for data. access data from child component.
    //run a function that does linear search in use effect.
    //change state and display details when found.
    return (
        <div className="homebg page">
            <div className="container pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-2"></div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>
                            <h2 className="text-center"><u>{id}</u></h2>
							{Notes.map(note=>(
								<Link to={'/note/'+note.notesid} style={{ textDecoration: 'none' }}>
									<NoteView key={note.notesid} Title={note.title} DateCreated={note.date}>
									</NoteView>
								</Link>
							))}
                    </div>
            </div>
        </div>
    )
}
