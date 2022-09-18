import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #dee0d1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Desc = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const Thanks = styled.div`
  font-size: 20px;
  ${mobile({ textAlign: "center" })}
`;

const About = () => {
  return (
    <Container>
      <Desc>
        CLOTHING THAT SPEAKS TO THE THINGS THAT MEAN THE MOST TO US: FAITH &
        FAMILY
      </Desc>
      <Thanks>
        <em>Thank you for shopping Meaningful Apparel.</em>
      </Thanks>
    </Container>
  );
};

export default About;
