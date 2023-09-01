import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form1 = () => {
  const [title, setTitle] =useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [AllProduct, setAllProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/product');
      
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
};

    axios.post('http://localhost:5000/api/product')
      .then(res => {
  
        console.log(res);
      })
      .catch(err => {
        
        console.log(err);
      });



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Product Manager</h1>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default Form1;
