import React, {useState} from 'react'
export default function TextForm (props) {
const handleupClick = ()=>{
    console.log("Upper case was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText)
}
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
}
const handleclearclick = (event)=>{
    let newText = '';
    setText(newText)
    
}
const handlebold = (event)=>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
    
}
const [text, setText] =useState("Enter Text")

    return  (
        <>
        <div className='container'>
            
            <h1>{props.headings}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="3"></textarea>
            </div>
            <button className='btn btn-primary mx=1' onClick={handleupClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleclearclick}>Clear</button>
            <button className='btn btn-primary mx-1' onClick={handlebold}>lowercase</button>



        </div>
        <div className='container my-2'>
            <h1>your text summary</h1>
            <p>{text.split(" ").length}words,{text.length}charachters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}