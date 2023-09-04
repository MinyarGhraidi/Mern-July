import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ShowNote = () => {
  const [note, setNote] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`"http://127.0.0.1:5000/api/notes/"${id}/ShowOne`)
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container m-6">
           
           <div style={{backgroundColor:"yellow"}}>  
      <h4>Note ID: {id}</h4>
      <h4>{note.IsImportant} </h4>
      <h4>{note.Title}</h4>
      <h4>{note.Content}</h4>
      <h4>{note.CreatedAt}</h4>
    </div>
    </div>
  );
};

export default ShowNote;
