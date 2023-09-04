import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => 
{
    const [note, setNote] = useState({})
    const navigate = useNavigate()
    const {id} = useParams() 
    useEffect(()=>
    {
    
        axios.get("http://127.0.0.1:5000/api/notes/"+id)
        .then(res=>
        {
            console.log(res.data)
            setNote(res.data)
        })
        .catch(err=>console.log(err))
    },[id])
    const updateNote = (e)=>
    {
        e.preventDefault()
        console.log(note)
        axios.put("http://127.0.0.1:5000/api/notes/"+id, note)
        .then(res=>
            {
            console.log(res.data)
            navigate("/notes")
            })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container m-6'>
        <h4>Note ID: {id}</h4>
        <form onSubmit={updateNote}>
           <div className='form-group'>
                <label htmlFor ="">Title</label>
                <input className='form-control' 
                onChange={(e)=>setNote({...note, title:e.target.value})} 
                value={note.Title}
                />
            </div>
            <div className='form-group'>
            <label htmlFor ="">Content</label>
            <input className='form-control'
            onChange={(e)=>setNote({...note, content:e.target.value})} 
                value={note.Content}
                />
            </div>
            <div className='form-group'>
            <input type="checkbox" 
            onChange={(e)=>setNote({...note,isImportant:e.target.checked})}
            checked={note.IsImportant}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor ="">Is Important</label>
            </div>
            <br/>
            <input type ="submit" className="btn btn-primary mb-3" value ="update"/>
        </form>

        
    </div>
  )
}

export default Update;