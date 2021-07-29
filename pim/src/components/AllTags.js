import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect} from 'react'

export default function AllTags({Tags,setHashTag,searchfunc}) {


	const onClick=(e)=>
	{
		setHashTag(e.target.id)
	}
	useEffect(() => {
	    setHashTag('');

		})
    return (
        <div className="homebg page">
            <div className="container pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-2"></div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>
                    <div>
                            <h2 className="text-center"><u>Tags</u></h2>
                            <div className="text-light">
                                    <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
                                {Tags.map(tag=>(
                                    <Link to={"/tags/"+tag.name}>
                                    	<h3 onClick={onClick} id={tag.name} className="text-light hov mt-4" key={tag.id}>{tag.name}</h3>
                                    </Link>

                                ))}
                                </div>
                            </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
