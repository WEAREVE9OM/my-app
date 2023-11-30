import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnClick =()=>{
    // console.log("Uppercase was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" Converted to UPPERCASE!","success")
  }
  
  const handleLoClick =()=>{
    let new1Text = text.toLowerCase()
    setText(new1Text)
    props.showAlert(" Converted to lowercase!","success")

  }

  const handleClearClick =()=>{
    let new1Text = ""
    setText(new1Text)
    props.showAlert(" Text Has been Cleared!","success")
  }

  const handleOnChange =(event)=>{
    // console.log("Handle on change")
    setText(event.target.value)
  }

  const handleCopyClick =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" copied to Clipboard","success")
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2><b><i>Your summary here</i></b></h2>
        <p>{text.split(" ").length}words and {text.length} Character</p>
        <p>you can read above Text in {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in to the textbox above to preview"}</p>
      </div>
    </>
  )
}
