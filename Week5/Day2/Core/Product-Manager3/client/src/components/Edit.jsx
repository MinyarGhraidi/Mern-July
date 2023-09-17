import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  
  const [updatedProduct, setUpdatedProduct] = useState({
    Title: '',
    Price: '',
    Description: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setUpdatedProduct({
          Title: response.data.Title,
          Price: response.data.Price,
          Description: response.data.Description,
        });
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/product/${id}`, updatedProduct)
      .then(() => {
        // Handle success, e.g., show a success message or redirect
        history.push('/');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Edit Product</h1>
      <form onSubmit={handleUpdate}>
        {/* Edit product form with input fields */}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Edit;
