import React, { useState } from 'react';

const TextForm = (props) => {

    const handleUpClick = ()=>{
        console.log("Handle on click is Clicked");
    }
    const handleOnChange = ()=>{
        console.log("Handle on Change");
    }
    const [text, setText] = useState("Enter Text here");
    return (
        <form>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </form>
    );
}

export default TextForm;
