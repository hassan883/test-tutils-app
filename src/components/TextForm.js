import React, { useState } from 'react';

const TextForm = (props) => {

    const handleUpClick = ()=>{
        console.log("Handle on click is Clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange = (event)=>{
        console.log("Handle on Change");
        setText(event.target.value);

    }
    const handleDelClick = () =>{
        setText("");
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const [text, setText] = useState("Enter Text here");
    return (
        <>
        <div class = "container">
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-danger " onClick={handleDelClick}>Remove</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    );
}

export default TextForm;
