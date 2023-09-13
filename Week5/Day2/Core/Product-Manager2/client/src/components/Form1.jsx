import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Form1 = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      Title: title,
      Price: price,
      Description: description,
    };

    axios.post('http://localhost:5000/api/product', newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
        setTitle('');
        setPrice('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
      
  };
 
  return (
    <div className="container">
      <h1 className="my-4">Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      <div className="mt-4">
        <h2>Product List</h2>
        <ul>
          {products.map((products) => (
            <li key={products.id}>
                 <Link to={"/Details"}> <h3>Title {products.Title}</h3></Link>
              <p>Price: {products.Price}</p>
              <p>Description: {products.Description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form1;
