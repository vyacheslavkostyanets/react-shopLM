import styled from "styled-components";
import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fbfb;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="" />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
