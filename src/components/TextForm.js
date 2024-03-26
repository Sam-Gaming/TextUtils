import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
};
    
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
  };

   const handleClearClick = () => {
      let newText = ''
    setText(newText);
    props.showAlert("Cleared!", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!", "success")
  }

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`}
            value={text}
            onChange={handleOnChange}
            
            style={{backgroundColor: props.mode==='dark'?'#212529':'white'}}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
       </div>
          <div className="container my-3">
              <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >Your text summary</h2>

              <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >{text.split(" ").length} words and {text.length} characters</p>
              <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >Reading time in minutes {0.008 * text.split(" ").length}</p>

              <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >Preview</h2>
              <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length>0?text:'Enter text to preview it here!'}</p>

          </div>
    </>
  );
}
