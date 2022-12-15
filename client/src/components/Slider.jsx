import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined } from '@mui/icons-material'
import { ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile } from '../responsive'
import { tablet } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position:relative;
    overflow: hidden;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    ${mobile({
        height:'44vh'
    })};
    ${tablet({height:'56vh'})}
`;

const Wrapper = styled.div`
    height:100%;
    transform:translateX(${props => props.slideIndex*-100}vw);
`;

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items: center;
    ${mobile({
        width:'100vw',
        height:'90vw'
     })};
    ${tablet({height:'110vh',width:"90vw"})};
`;

const ImgContainer = styled.div`
    height: 90%;
    flex:1;
    ${mobile({
        height:'80%'
    })};
`;
const Image = styled.img`
height: 100%;
${mobile({
    height:'100%'
 })};
${tablet({height:'50%'})};
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 100px;
    ${mobile({
        padding:'10px'
     })};
    ${tablet({padding:'10px',position:'relative',bottom:'10rem'})};
`;

const Title = styled.h1`
 font-size:65px;
 ${mobile({
    fontSize:'26px'
 })};
`;

const Desc = styled.p`
 margin: 50px 0px;
 font-size: 26px;
 font-weight:500;
 letter-spacing:3px;
 ${mobile({
    fontSize:'12px',
    margin:'20px 1px'
 })};
 ${tablet({fontSize:'12px'})};
`;
const Button = styled.button`
    padding:10px;
    font-size:25px;
    background-color:transparent;
    cursor:pointer;
    ${mobile({
        fontSize:'16px'
     })};
`;

const Slider = () => {

  return (
    <Container>
        <Wrapper>
            {sliderItems.map(item => (
          <Slide>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={`/products/${item._id}`}>
                <Button>Shop Now</Button>
                </Link>
            </InfoContainer>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            </Slide>
              ))}
        </Wrapper>
    </Container>
  )
}

export default Slider;