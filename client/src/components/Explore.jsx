import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { mobile } from '../responsive';
import ExploreItem from './ExploreItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../redux/productActions';
import { useParams } from 'react-router-dom';

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
  const { category } = useParams();
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      { products.slice(0, 8).map((item) => <ExploreItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Explore;