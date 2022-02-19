import {React, useState} from 'react';

function AddNote(props) {
    let [inputTitle, setInputTitle] = useState('');
    let [inputDescription, setInputDescription] = useState('');

    // to tackle with the values typed in the input fields
    function handleChange(event) { 
        let eventName = event.target.name;
        let eventValue = event.target.value;
        if(eventName === "inputTitle") {
            setInputTitle(eventValue);
        } else {
            setInputDescription(eventValue);
        }
    }

    return (
        <form>
            <input type="text" name="inputTitle" placeholder="Add Title" value={inputTitle} onChange={handleChange}/>
            <input type="text" name="inputDescription" placeholder="Add Description" value={inputDescription} onChange={handleChange}/>
            <button
            type = 'button'
            onClick={() => {
                props.addToNotes(inputTitle, inputDescription);
                setInputTitle('');
                setInputDescription('');
            }}
            >Add</button>
        </form>
    )
}

export default AddNote;