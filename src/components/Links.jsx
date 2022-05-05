import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  a {
    text-decoration: none;
    color: #16161b;
    font-weight: bold;
    font-size: 20px;
  }
`;

const Links = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/productlist">ProductList</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </Container>
  );
};

export default Links;
