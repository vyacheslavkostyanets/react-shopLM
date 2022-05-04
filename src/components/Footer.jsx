import {
  Facebook,
  Instagram,
  Mail,
  Payment,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
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
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Pay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGO</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          delectus possimus incidunt, animi ab obcaecati dolorum et cumque
          ratione accusantium ipsum iste at vero sit dolore tempora laborum sint
          rerum.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#324C82">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#BE2F4C">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#4993CC">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#CC001D">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Women fashion</ListItem>
          <ListItem>Kids fashion</ListItem>
          <ListItem>Kids Toys</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut.
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 234 456 7890
        </ContactItem>
        <ContactItem>
          <Mail /> contact@test.me
        </ContactItem>
        <Pay>
          <Payment style={{ fontSize: "45px" }} />
          <Payment style={{ fontSize: "45px" }} />
          <Payment style={{ fontSize: "45px" }} />
          <Payment style={{ fontSize: "45px" }} />
          <Payment style={{ fontSize: "45px" }} />
        </Pay>
      </Right>
    </Container>
  );
};

export default Footer;
