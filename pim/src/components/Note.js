import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory,Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const Note = ({Notes,setNotes,setEditValue,editValue}) => {

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


	const deleteNote=()=>
	{
		console.log('deleting note '+id);
		for(let i=0;i<Notes.length;i++)
		{
			if(Notes[i].id==id)
			{
				let n=Notes;
				n.splice(i,1)
				setNotes(n);

			}
		}
	}
	const editNote=(e)=>
	{
		console.log('Editing note '+id);
		for(let i=0;i<Notes.length;i++)
		{
			if(Notes[i].id==id)
			{
				console.log(Notes[i]);
				setEditValue(Notes[i]);
				console.log(editValue);
			}
		}
	}



    return (
<div className="container mt-5 page">
	<div className="row justify-content-center">
		<div className="card form-box" style={{width: '35vw'}}>
			<div className="card-body">
				<div className="row">
					<div className="col-5 col-md-2">
						<div className="btn" style={{color:'black'}} onClick={() => history.goBack()}>
						 <span className="fa fa-arrow-left fa-lg"></span>
						</div>
					</div>
					<div className="col-5 col-md-8">
						<h3 className="card-title mx-auto text-center">{note.Title}</h3>
					</div>
					<div className="col-2 col-md-2">
						<div onClick={editNote}>
							<Link to={'/edit'} style={{ color:'black',textDecoration: 'none' }}>
							<span className="fa fa-edit fa-lg mt-3" style={{cursor:'pointer'}}></span>
							</Link>
						</div>
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
			<div className="row">
				<div className="offset-10 col-2 ml-auto" onClick={deleteNote}>
					<Link to={'/'} style={{ color:'black',textDecoration: 'none' }}>
					<span className="fa fa-trash fa-lg mt-3" style={{cursor:'pointer'}}></span>
					</Link>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Note
