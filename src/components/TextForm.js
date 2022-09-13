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
    const [text, setText] = useState("Enter Text here");
    return (

        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    );
}

export default TextForm;
