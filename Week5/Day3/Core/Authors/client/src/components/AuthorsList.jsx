import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteAuthors } from '../../../server/controllers/authors.controllers';

function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {authors.map(author =>
        <div key={author._id}>
          <h2>{author.name}</h2>
          <Link to={`/edit/${author._id}`}>Edit</Link>
          <button onClick={() => deleteAuthors(author._id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default AuthorsList;
