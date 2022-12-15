import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { mobile } from '../responsive';
import ExploreItem from './ExploreItem';

const Container = styled.div`
    padding:30px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-item:center;
    ${mobile({
      padding:'5px'
    })};
`

const Explore = () => {

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
      { products.slice(0, 8).map((item) => <ExploreItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Explore;