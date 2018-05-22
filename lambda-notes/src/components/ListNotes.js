import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ListNotes.css';

export default class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        console.log(this.props.notes)
        return ( 
            <div>
                <h2 className="main-header">Your Notes:</h2> 
                <div className="note-list">
                    {this.props.notes.map(note => (
                        <NoteDetails key={note.id} note={note} />
                    ))}
                </div>
            </div>
         )
    }
}
 

function NoteDetails({ note }) {
    const { title, body } = note;
    return (
        <div>
            <div className="note-card">
                <Link to={`/notes/${note.id}`} >
                    <h2>{title}</h2>
                    <p>{body}</p>
                </Link>
            </div>
        </div>
    )
}
