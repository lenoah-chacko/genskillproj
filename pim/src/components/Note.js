import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";



const Note = ({Notes}) => {

	// console.log(Notes)
	let history = useHistory();
	let  {id}  = useParams();

	const [note,setNote]=useState({
		id:0,
		Title:'',
		DateCreated:'00/00/0000',
		Tags:[],
		Description:'',
	})

	useEffect(() => {
		//console.log(Notes,id)
	const findnote =(Notes)=>{
			for(var i=0;i<Notes.length;i=i+1)
			{
				if(id==Notes[i].id)
				{
					setNote(Notes[i]);
					break;
				}
			}
		}
		findnote(Notes)
	},[id,Notes])

    return (
<div className="container mt-5 page">
	<div className="row justify-content-center">
		<div className="card form-box" style={{width: '35vw'}}>
			<div className="card-body">
				<div className="row">
					<div className="col-6 col-md-2">
						<div className="btn" style={{color:'black'}} onClick={() => history.goBack()}>
						 <span className="fa fa-arrow-left fa-lg"></span>
						</div>
					</div>
					<div className="col-6 col-md-8">
						<h3 className="card-title mx-auto text-center">{note.Title}</h3>
					</div>
				</div>
						<h6 className="card-subtitle mb-2 text-muted">
							<div className="d-flex justify-content-center">
								{note.Tags.map((tag,index)=>(
								<span key={index} className="tag badge rounded-pill mr-1 bg-secondary text-light">{tag}</span>
								))}
							</div>
						</h6>
				<hr></hr>
				<p className="card-text mt-3">{note.Description}</p>
			</div>
		</div>
	</div>
</div>
    )
}

export default Note
