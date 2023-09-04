import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const DisplayAll = () => {
    const [allNotes, setAllNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/notes")
            .then(res => {
                console.log(res.data)
                setAllNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const justDelete = (noteId) => {
        axios.delete(`http://localhost:5000/api/notes/${noteId}`)
        //1:filter 
        const filteredNotes = allNotes.filter((eachNote) => {
            if (eachNote._id == noteId) {
                return false
            } else {
                return true

            }
        })
        setAllNotes(filteredNotes)
    }
    return (
        <div >
            {
                allNotes.map((OneNote) => {
                    return (<div >

                        <h3>{OneNote.IsImportant ? "📌" : "No Complete"
                            - - OneNote.Title
                        }</h3>
                        <p>{OneNote.Content}</p>
                        <p>date : {OneNote.createdAt}</p>
                        <Link to={`notes/${OneNote._id}/edit`}>Edit</Link>
                        <button onClick={() => { justDelete(OneNote._id) }}>Delete</button>

                    </div>)




                })
            }

        </div>
    )
}

export default DisplayAll