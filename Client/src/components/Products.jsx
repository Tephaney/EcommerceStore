import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const { collection } = useParams();
  console.log("my collection", collection);
  const filteredProducts = popularProducts.filter((p) => {
    if (!collection) return true;
    return p.collection === collection;
  });

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
