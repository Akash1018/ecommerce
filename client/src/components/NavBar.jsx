import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

const Container = styled.div`
    height:100%;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    ${mobile({height: '50px'})};
`; 
const Wrapper = styled.div`
    padding:10px 20px;  
    display:flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({padding: '10px 0px'})};
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Nav = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    overflow: disable;
    background-color:black;
    color:white;
    z-index:1;
`;



const Butt1 = styled.button`
    border:none;
    background:none;
    color:white;
`

const Butt2 = styled.button`
    border:none;
    color:white;
    background:none;
    position:fixed;
    top:18px;
    left:15px;
`

const Input =styled.input`
    border:none;
    ${mobile({width: '50px'})};
`;

const Center = styled.div`
    flex:1;
    text-align: center;
    ${mobile({})};
`;
const Logo = styled.h1`
    font-weight : bold;
    ${mobile({fontSize: '22px'})};
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:'1'})};
`;
const MenuItem = styled.div`
    font-size:15px;
    cursor :pointer;
    margin-left:25px;
    border: none;
    
    ${mobile({fontSize: '12px',marginLeft: '10px'})};
`;
const NavBar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const [showNav, setShowNav] = useState(false);
    
    const listStyle = {
        display: "flex",
        flexDirection:"column",
        height:"100%",
        position:"fixed",
        top:"20%",
        left:"5%",
        listStyleType: "none",
        fontSize:"50px",
        gap:"20px",
        textAlign: "left",
    }
    showNav?document.body.style.overflow ="hidden" : document.body.style.overflow = "auto";

  return (
        <Container>
            <Wrapper>
             <Left>
                <Butt1 onClick={() => setShowNav(!showNav)}>
                    <ArrowForwardIcon style={{color:'black'}}/>
                    {showNav === true && (
                    <Nav >
                    <Butt2 onClick={() => setShowNav(!showNav)}>
                        <ArrowBackIcon />
                     </Butt2>
                       <ul style={listStyle}>
                        <Link to ="/" style={{color:"color",textDecoration:"none"}}>
                         <li >
                           shop
                         </li>
                        </Link>
                        <Link to="/product" style={{color:"white",textDecoration:"none"}}>
                         <li>
                          Collections
                         </li>
                         </Link>
                         <li>
                            About
                          </li>
                            </ul>
                        </Nav>
                    )}
                </Butt1>
             </Left>
             <Center>
               <Logo>StyleRo</Logo>
             </Center>
             <Right>
             <Link to ="/register" style={{color:'black',textDecoration:"none"}}>
                <MenuItem>
                    Register
                </MenuItem>
             </Link>
             <Link to ="/login" style={{color:'black',textDecoration:"none"}} >
                <MenuItem >
                    SignIn
                </MenuItem>
            </Link>
                <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                    <Link to ="/cart">
                     <ShoppingCartIcon style={{color:'black'}} />
                    </Link>
                </Badge>
                </MenuItem>
             </Right>
            </Wrapper>
        </Container>
      
  )
}
export default  NavBar;