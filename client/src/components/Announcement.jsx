import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    ${mobile({
      height:'34px'
    })};
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on First Order.
    </Container>
  )
}

export default Announcement