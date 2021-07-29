import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const NewNote= () => {
	let history = useHistory();

	const [showTitleWarning, setShowTitleWarning] = useState(false);
	const [showDescriptionWarning, setShowDescriptionWarning] = useState(false);
	const [showHashTagWarning, setShowHashTagWarning] = useState(false);

	const [valueTitle, setValueTitle] = useState('');
	const [valueHashTag, setValueHashTag] = useState('');
	const [valueDescription, setValueDescription] = useState('');
	const handleChangeTitle = (event) => {
		setValueTitle(event.target.value);
		setShowTitleWarning(false)
		console.log(valueTitle);
	};


	const handleChangeHashTag = (event) => {
		setValueHashTag(event.target.value)
		setShowHashTagWarning(false)
	};


	const handleChangeDescription = (event) => {
		setValueDescription(event.target.value);
		setShowDescriptionWarning(false)
	};


	const csvtoarr=(tag)=>{
		var arr2=tag.split(',')
			arr2=arr2.map(word=>word.trim())
			return arr2
	}
	function onClick(event){
		event.preventDefault()
		var arr;
		if(valueHashTag!=='')
		{
			 arr=csvtoarr(valueHashTag)

		}

		console.log(arr)
		if(valueTitle===''|| valueHashTag===''|| valueDescription==='')
		{
			setShowTitleWarning(true)
			setShowHashTagWarning(true)
			setShowDescriptionWarning(true)
		}
}
	function onClear(event){
		setValueTitle('')
		setValueHashTag('')
		setValueDescription('')


	}

	async function postNote()
	{
		fetch()
	}


    return (
        <div className="container mt-5 page">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="form-box">
						<div className="form-row">
							<div className="col-6 col-md-2">
							<div className="btn" style={{color:'black'}} onClick={() => history.goBack()}>
									<span className="fa fa-arrow-left fa-lg"></span>
								</div>
							</div>
							<div className="col-6 col-md-4 offset-2">
								<h2 style={{color:'black'}}>New Note</h2>
							</div>
						</div>
						<div className="form-row mt-2 justify-content-center">
							<div className="col-11 form-group">
								<input type="text" className="form-control" name="ntitle" id="ntitle" placeholder="Title"
								value={valueTitle} onChange={handleChangeTitle}></input>
								{(valueTitle===''&&showTitleWarning)&&<span className="text-danger">Please enter a Title</span>}
							</div>
							<div className="col-11 form-group">
								<input type="text" className="form-control" name="ntag" id="ntag"
								placeholder="Enter hashtags separated by ',' .    eg: #tag1,#tag2"
								 onChange={handleChangeHashTag}></input>
								{(valueHashTag===''&&showHashTagWarning)&&<span className="text-danger">Please enter a Tag</span>}

							</div>
							<div className="col-11 form-group">
								<textarea className=" form-control mr-1" name="ndescription" id="ndescription" rows="8" placeholder="Description"
								value={valueDescription} onChange={handleChangeDescription}></textarea>
								{(valueDescription===''&&showDescriptionWarning)&&<span className="text-danger">Please enter a Description</span>}
							</div>
						</div>

						<div className="form-row justify-content-center">
							<div className="col-8">
								<button type="button" className="col-5 btn btn-secondary btn-sm" onClick={onClear}>Clear</button>
								<button type="submit" className="col-5 btn offset-sm-1 btn-info btn-sm" onClick={onClick}>Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
        </div>
    )
}

export default NewNote
