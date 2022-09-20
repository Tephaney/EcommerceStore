import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  -webkit-text-stroke: 2px #000;
  color: #fff;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Button = styled.button`
  border: 3x solid #000;
  border-radius: 0.5rem;
  margin-bottom: 4.5px;
  padding: 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #000;
    color: gold;
  }
`;

const CategoryItem = ({ item }) => {
  let navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button
          onClick={() => {
            navigate(`/products/${item.title}`);
          }}
        >
          SHOP NOW
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
