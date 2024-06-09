import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick=()=>{
      //  console.log("UpperCase was clicked: " + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }

    const handleLoClick=()=>{
      //  console.log("UpperCase was clicked: " + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success");
    }

    const handleClearClick=()=>{
      
        let newText=('');
        setText(newText)
        props.showAlert("Text cleared!","success");
    }

    const handleCpClick=(TextForm)=>{
      
      let newText= text.charAt(0).toUpperCase() + text.slice(1);

      setText(newText)
      
      props.showAlert("Text capitalized!","success");

  }

 
    const handleOnChange=(event)=>{
       // console.log("on change");
        setText(event.target.value)
       
    }

    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to Clipboard!","success");
    
    }

const handleExtraSpace =()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success");
}

    const [text,setText]=useState('');
    // text = "new text"; //wrong way to change state
    //setText("new text"); //correct way to change the state


  return (
    <>
  {/* use ctrl+f  for the change globaly for ex. class to the className*/}
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1> {props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}}   id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-1" onClick={handleUpClick}>  Convert to Uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick}>  Convert to Lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleCpClick}>  CapiTaliZed Text</button>
 <button className="btn btn-primary mx-1" onClick={handleCopy}>  Copy Text</button>
 <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra Spaces</button>
 <button className="btn btn-primary mx-1" onClick={handleClearClick}>  Clear</button>


    </div >
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
