import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab, Zoom} from "@mui/material";
function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [showTitle, setShowTitle] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input
                    style={{display: showTitle ? "":"none"}}
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    onClick={() => setShowTitle(true)}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows= {showTitle ? 3:1}
                />
                <Zoom in={showTitle}>
                <Fab onClick={submitNote} sx={{
                    ":hover": {
                        background: "#297188"
                    }
                }}>
                        <AddIcon/>
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
