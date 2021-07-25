import React from 'react'
import { useState } from 'react'

const Note = () => {



	const [valueTitle, setValueTitle] = useState('');
	const [valueHashTag, setValueHashTag] = useState('');
	const [valueDescription, setValueDescription] = useState('');

	const note={
		title: 'Helping the Poor',
		description: 'calling sisterdadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadada',
		hashtags: ['yo','ahaha','adada']
	}



    return (


<div className="container mt-5">
	<div className="row justify-content-center">
		<div className="card form-box" style={{width: '35vw'}}>
			<div className="card-body">
				<div className="row">
					<div className="col-6 col-md-2">
						<a className="nav-link" style={{color:'black'}} href="#">
						 <span className="fa fa-arrow-left fa-lg"></span>
						</a>
					</div>
					<div className="col-6 col-md-8">
						<h3 className="card-title mx-auto text-center">{note.title}</h3>
					</div>
				</div>

						<h6 className="card-subtitle mb-2 text-muted">
							<div className="d-flex justify-content-center">
								{note.hashtags.map(tag=>(
								<span className="tag badge rounded-pill mr-1 bg-secondary text-light">{tag}</span>
								))}
							</div>
						</h6>
				<hr></hr>
				<p className="card-text mt-3">{note.description}</p>
			</div>
		</div>


	</div>
</div>
    )
}

export default Note
