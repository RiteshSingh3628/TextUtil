import React,{useState} from 'react'

export default function (props) {

    const [text,setText] = useState("")

    const handleUpClick = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to upper case","success")
    }
    const handleDownClick = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        

    }
    const handleCopy = ()=>{
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);

    }

    const handleExtraSpace= ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra space","success")
    }



    // unfilter Words
    let Wordarr = new Array()
    let textArr = text.split(' ')
    let sl = 1
    textArr.filter(item=>{
        let count = 0
        let flag = 1
        // checking if that item already present or not in word arr
        if(Wordarr.length >1){
            Wordarr.forEach(i=>{
                if(i.word == item){
                    flag = 0
                }
            })
        }
        // if condition is true that measn word is not present
        if(flag){
            // counts the number of times the word occur
            for(let i = 0;i < textArr.length; i++){
                if(item == textArr[i]){
                    count++
                }
            }
            Wordarr.push({Sl:sl,word:item,occ:count})
            sl++
      
    
        }
    
        
    })
  

    

    

    return (

        <>
        <div className='container'>
            <div className="heading"><h1>{props.heading}</h1></div>
            <div className="mb-3">
                <textarea className='form-control' id = 'myBox' rows='8' value={text} onChange={handleOnChange} placeholder='Enter your text here...'></textarea>
                
            </div>
            <button  className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>lowercase</button>
            <button  className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
            <button  className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove ExtraSpace</button>
        </div>

        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{Math.round(0.008* text.length)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to get preview "}</p>
            <h2>Unfilter Words</h2>
        </div>
        <table className="table table-striped">
            <tbody>
                <tr>
                    <th>SlNo</th>
                    <th>Word</th>
                    <th>occurance</th>
                </tr>
                    {
                        Wordarr.map(itm=>{
                            return(

                                <tr key={itm.Sl}>
                                    <td>{itm.Sl}</td>
                                    <td>{itm.word}</td>
                                    <td>{itm.occ}</td>
                                </tr>
                            )
                
                        })
                    }
            </tbody>
        </table>
        </>
    )
}
