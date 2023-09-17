import axios from 'axios';
import { useState } from 'react';

function CreateAuthor() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/authors', { name })
      .then(() => window.location = '/')
      .catch(err => setError('Name must be at least 3 characters long'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      {error && <p>{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateAuthor;
