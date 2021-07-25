
export default function NoteView({Title, DateCreated}) {
    return (
        <div className="row mt-3">
        <div className="col-2"></div>
            <div className="item card col-8">
                <div className="card-body">
				<h5 className="card-title text-dark ">{Title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{DateCreated}</h6>
                </div>
            </div>
        </div>
    )
}
