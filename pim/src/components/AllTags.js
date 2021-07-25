import React from 'react'
import { Link } from 'react-router-dom'

export default function AllTags() {
    let Tags=[
        {id:1, name:"Math"},
        {id:2, name:"Family"},
        {id:3, name:"Chemistry"},
        {id:4, name:"Friend"},
        {id:5, name:"Prize"},
        {id:6, name:"Tragedy"},
        {id:7, name:"Birthday"},
        {id:8, name:"Deep thoughts"},
    ]
    return (
        <div className="homebg page">
            <div className="container pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-2"></div>
                    <div className="md-col-6 sm-col-2"></div>
                    </div>
                    <div>
                            <h2 className="text-center">Tags</h2>
                            <div className="text-light">
                                    <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
                                {Tags.map(tag=>(
                                    <Link to={"/tag/"+tag.name}>
                                    <h3 className="text-light hov mt-4" key={tag.id}>{tag.name}</h3>
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
