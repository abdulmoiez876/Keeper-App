import {React, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddNote from './AddNote';

function App() {
    let [notes, setNotes] = useState([]);

    function addToNotes(title, content) {
        let newNote = {title: title, content: content};
        setNotes(prevVal => {
            return [...prevVal, newNote]
        })
    }

    function deleteFromNotes(key) {
        setNotes(notes.filter((note, index) => {
            return key != index;
        }))
    }
    return (
        <div>
            <Header/>
            <AddNote 
                addToNotes={addToNotes}
            />
            {notes.map((note, index) => 
                <Note
                    key = {index}
                    id = {index}
                    title={note.title}
                    description={note.content}
                    onDelete = {deleteFromNotes}
                />
            )}
            <Footer/>
        </div>
    )
}

export default App;