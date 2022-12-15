import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product'
import axios from 'axios';
import { mobile } from '../responsive';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    ${mobile({
      padding:'5px'
    })};
`

const Products = () => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          
             `http://localhost:5000/api/products`
        );
        
        setProducts(res.data);
        
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      { products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products