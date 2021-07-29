import NoteView from "./NoteView"
import { Link } from "react-router-dom";
export default function Hashtag({hashTag,Notes}) {
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
                            <h2 className="text-center"><u>{hashTag}</u></h2>
							{Notes.map(note=>(
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
