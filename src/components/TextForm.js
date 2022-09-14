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
    const handleCopy = ()=>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter Text here");
    return (
        <>
        <div class = "container">
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-2 my-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-danger my-3" onClick={handleDelClick}>Remove</button>
            <button className="btn btn-success mx-2 my-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success  my-3" onClick={handleExtraSpaces}>Remove Spaces</button>


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
