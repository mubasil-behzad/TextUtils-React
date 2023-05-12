import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked ")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const handleLoClick = () =>{
        //console.log("Uppercase was clicked ")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase!", "success");
    }
    const handleOnChange = (event) =>{
        //console.log("UhandleOnChange was clicked")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{ backgroundColor : props.mode === 'light' ? 'light' : 'dark' }} id="myBox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>
            {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox bove to preview it here"}</p>
    </div>
    </>
  )
}
