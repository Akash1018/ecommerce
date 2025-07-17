import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  ${mobile({ flexDirection: "column" })};
  flex-direction: column;
  padding: 16px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  widht: 40px;
  height: 40px;
  boorder-radius: 50%;
  color: #393939;
  background-color: #{(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>StyleRo.</Logo>
      <SocialContainer>
        <SocialIcon color="black">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="black">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="000000">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
