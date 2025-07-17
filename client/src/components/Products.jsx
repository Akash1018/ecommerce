import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product'
import axios from 'axios';
import { mobile } from '../responsive';
import { fetchProducts } from '../redux/productActions';

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
  const dispatch = useDispatch();
  const { products, loading, error, total } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      { products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products