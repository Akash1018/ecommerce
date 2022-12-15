import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  import { mobile } from '../responsive'

  const Info = styled.div`
   color:black;
   font-size:10px;
   margin: 4px;
  `;
  
  const Container = styled.div`
    margin:2px;
    min-width: 300px;
    height: 300px;
    display: flex;
    flex-direction:column;
    ${mobile({
      minWidth:'100px',
      height:'150px',
    })}
  `;
  
  const Image = styled.img`
    width:80%;
    height:80%;
  `;

  const ExploreItem = ({ item }) => {
    return (
        <Link to={`/product/${item._id}`} style = {{textDecoration:'none'}}>
      <Container >
        <Image src={item.img} />
        <Info>
        <h1 style={{textDecoration:'none'}}>{item.title}</h1>
        <p style={{fontSize:'20px'}}>{item.price}</p>
        </Info>
      </Container>
      </Link>
    );
  };
  
  export default ExploreItem;