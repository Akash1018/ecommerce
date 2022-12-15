import React from 'react'
import styled from 'styled-components'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
import { mobile } from '../responsive';


const Container = styled.div`
 display:flex;
 background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
 ${mobile({flexDirection: 'column'})};
`

const Left = styled.div`
  flex:1;
  displat:flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    widht: 40px;
    height: 40px;
    boorder-radius: 50%;
    color: white;
    background-color: #{(props) => props.color};
    displat:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:'none'})};
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
flex:1;
padding: 20px;
`

const ContactItem =styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: center;    
`
const Payment = styled.img`
  width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>StyleRo.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, incidunt iusto? Suscipit, voluptates vel nemo quae deserunt facilis magnam quibusdam aut error voluptas autem fugiat nisi, vero maiores facere magni.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                 <Facebook />
                </SocialIcon>
          <     SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <   Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                 <Pinterest />
                </SocialIcon>
                </SocialContainer>
        </Left>
        <Center>
            <Title>Usefil links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer