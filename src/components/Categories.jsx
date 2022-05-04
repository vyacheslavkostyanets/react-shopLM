import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

import { categories } from "../data";

const Container = styled.div`
  background-color: #c4caeecd;
  display: flex;
  pad: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
