import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30vh;
  background-color: #dee0d1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px", textAlign: "center" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dedede;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 20px;

`;

const Button = styled.button`
  flex: 2;
  border: none;
  background: #000;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Get 10% Off Your Next Purchase</Title>
      <Desc>
        Plus, other deals and flash sales sent to your inbox every week!
      </Desc>
      <InputContainer>
        <Input placeholder="Your Email..." />
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
