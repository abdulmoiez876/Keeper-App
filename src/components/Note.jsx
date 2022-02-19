import React from 'react';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button
                onClick={function() {
                    props.onDelete(props.id);
                }}
            >-</button>
        </div>
    )
}

export default Note;