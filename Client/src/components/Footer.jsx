import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  letter-spacing: 0.2px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: gold;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  letter-spacing: 0.2px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 400;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: gold;
    transform: skewY(5deg);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#000", color: "#fff" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;

const Payment = styled.img`
  width: 90%;
`;

const Footer = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Left>
        <Logo>Meaningful Apparel</Logo>
        <Desc>
          We are an on-demand production company, which means everything is made
          to order, creating less waste than conventional manufacturing.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem
            onClick={() => {
              navigate(`/`);
            }}
          >
            Home
          </ListItem>
          <ListItem
            onClick={() => {
              navigate(`/cart`);
            }}
          >
            Cart
          </ListItem>
          <ListItem
            onClick={() => {
              navigate(`/login`);
            }}
          >
            My Account
          </ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem
            onClick={() => {
              navigate(`/products/FAITH`);
            }}
          >
            Faith
          </ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem
            onClick={() => {
              navigate(`/products/FAMILY`);
            }}
          >
            Family
          </ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem
            onClick={() => {
              navigate(`/products/ADOPTION`);
            }}
          >
            Adoption
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          123 Peach Lane, Sacramento, CA, USA 95826
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 567 8900
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          Info@MeaningfulApparel.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
