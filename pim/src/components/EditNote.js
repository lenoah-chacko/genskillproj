import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const NewNote= ({Value,setNotes,Notes,addTags,setAddTags}) => {
	let history = useHistory();

	const [showTitleWarning, setShowTitleWarning] = useState(false);
	const [showDescriptionWarning, setShowDescriptionWarning] = useState(false);
	const [showHashTagWarning, setShowHashTagWarning] = useState(false);

	const [valueTitle, setValueTitle] = useState('');
	const [valueHashTag, setValueHashTag] = useState('');
	const [valueDescription, setValueDescription] = useState('');

	const arrtocsv=(arr)=>{
		let str='';
		let i=0;
		for(;i<(arr.length-1);i++)
		{
			str+=arr[i]+',';
		}
		str+=arr[i];
		return str;
	}

	useEffect(()=>{
		console.log('changing')
		setValueTitle(Value.Title);
		setValueDescription(Value.Description);
		// console.log(Value.Tags);
		let str=''
		str=arrtocsv(Value.Tags);
		// console.log(str);
		setValueHashTag(str);
	},[])



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
		else{
			console.log(arr);
			let NotesNew=Notes
			console.log(Value.id-1)
			for(let i=0;i<Notes.length;i++)
			{
				if(NotesNew[i].id==Value.id)
				{
					NotesNew[i].Title=valueTitle;
					NotesNew[i].Tags=arr;
					NotesNew[i].Description=valueDescription;
					console.log(NotesNew);
					setNotes(NotesNew)
					break;
				}
			}

			var missing=[]
			console.log('missing',missing)

			let flag=1;
			console.log("Nuts",Notes)
			console.log("Thugs",addTags)
			for(var i=0;i<arr.length;i++)
			{
				for(var j=0;j<addTags.length;j++)
				{
					if(addTags[j].name==arr[i])
					{
						flag=0;
					}
				}
				console.log(addTags);
				if(flag==1)
				{
					setAddTags([...addTags,{id:addTags.length+1,name:arr[i]}]);
					console.log(addTags);
				}
				else {
					flag=1;
				}
			}


			 history.goBack()

		}

}
	function onClear(event){
		setValueTitle('')
		setValueHashTag('')
		setValueDescription('')
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
								placeholder="Enter hashtags separated by ',' .    eg: #tag1,#tag2" value={valueHashTag}
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
