import React from "react"
import { useNavigate } from "react-router-dom"
import "./Path.css"

function Path(props){
    const Navigate = useNavigate()
    function clicked(){
        Navigate("/")
    }

    return <div className="path-container">
        <div className="path">
            <h1 className="page-title">{props.path}</h1>
            <div className="full-path">
                <span className="path-text" onClick={clicked}>HOME</span> / {props.path}
            </div>
        </div>
    </div>
}

export default Path