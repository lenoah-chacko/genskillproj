import NoteView from "./NoteView"
import { useParams } from "react-router-dom";
export default function Hashtag() {
    let  {id}  = useParams();
    let Notes=[{Title:"Calling my Wife", DateCreated:"01/12/2018"},
    {Title:"Calling my Girlfriend", DateCreated: "12/04/2019"},
    {Title:"Calling my Ex Wife", DateCreated: "18/06/2019"},
    {Title:"Calling my Ex Girlfriend", DateCreated: "18/06/2020"},
    {Title:"Calling my Homie", DateCreated: "23/06/2020"},
    {Title:"Calling my Husband", DateCreated: "26/06/2020"}]
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
                            {Notes.map(note=>(<NoteView Title={note.Title} DateCreated={note.DateCreated}></NoteView>))}
                    </div>
            </div>
        </div>
    )
}
