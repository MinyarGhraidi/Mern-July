import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details based on the productId from the URL parameter
    axios
      .get(`http://localhost:5000/api/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  return (
    <div className="container">
      <h2>Product Details</h2>
      <h3>Title: {product.Title}</h3>
      <p>Price: {product.Price}</p>
      <p>Description: {product.Description}</p>
    </div>
  );
};

export default Details;
