import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditAuthor() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`/api/authors/${id}`)
      .then(res => setName(res.data.name))
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/api/authors/${id}`, { name })
      .then(() => window.location = '/')
      .catch(err => setError('Name must be at least 3 characters long'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      {error && <p>{error}</p>}
      <button type="submit">Update</button>
    </form>
  );
}

export default EditAuthor;
