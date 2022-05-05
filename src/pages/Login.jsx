import React from "react";
import styled from "styled-components";
import Links from "../components/Links";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eecd58;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
`;

const Login = () => {
  return (
    <div>
      <Links />

      <Container>
        <Wrapper>
          <Title>Create an ACCOUNT</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>Login</Button>
            <Link href="#">Forget password?</Link>
            <Link href="#">Create a new account</Link>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
