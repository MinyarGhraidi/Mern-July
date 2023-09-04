import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Create = () => {

    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [IsImportant, setIsImpotant] = useState(true)
    const [errors, setErrors] = useState([]);


    const nav = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(Title, Content, IsImportant)
        const objToBeSent = {
            Title,
            Content,
            IsImportant
        }
        axios.post("http://localhost:5000/api/notes", objToBeSent)
            .then(res => {
                nav("/")
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; 
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
            
                setErrors(errorArr);

            })
    }












    return (
        <div>
            Create
            <p style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>


            <form onSubmit={onSubmitHandler}>
                <label for="exampleFormControlInput1" className="form-label" >Title</label>
               <input type="string"  className="form-label" onChange={(e) => { setTitle(e.target.value) }} value={Title} /><br /><br /><br />
               <label for="exampleFormControlInput1" className="form-label" >Content</label>
                 <textarea type="string" className="form-label"  onChange={(e) => { setContent(e.target.value) }} value={Content}></textarea><br /><br /><br />

                IsImportant 📢🔔: 
                <input type="checkbox" onChange={(e) => { setIsImpotant(e.target.checked) }} />
                <button >Create</button>
            </form>
        </div>
    )
}

export default Create;
