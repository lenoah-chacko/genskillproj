import NoteView from "./NoteView"

export default function Search({searchfunc}) {
    let Notes=[{Title:"Calling my Wife", DateCreated:"01/12/2018"},
    {Title:"Calling my Girlfriend", DateCreated: "12/04/2019"},
    {Title:"Calling my Ex Wife", DateCreated: "18/06/2019"},
    {Title:"Calling my Ex Girlfriend", DateCreated: "18/06/2020"},
    {Title:"Calling my Homie", DateCreated: "23/06/2020"},
    {Title:"Calling my Husband", DateCreated: "26/06/2020"}]
    return (
        <div className="homebg page">
            <div className="container pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-2"></div>
                    <div id="searchbar"className="md-col-4 sm-col-8">
                        <div className="input-group mb-3">
                        <input id="search" type="text" className="form-control" placeholder="Search Notes"/>
                            <div className="input-1-append">
                                <button className="btn btn-outline-secondary teal-outline" type="submit" onClick={searchfunc}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>
                            <h2 className="text-center">Search results</h2>
                            {Notes.map(note=>(<NoteView Title={note.Title} DateCreated={note.DateCreated}></NoteView>))}
                    </div>
                </div>
            </div>
    )
}
