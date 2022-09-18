import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  return (
    <Container>Free Shipping for all orders shipping within the USA!</Container>
  );
};

export default Announcement;
