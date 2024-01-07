import React from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  Badge,
  Dropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navbarStyle = {
    backgroundColor: "rgb(239, 79, 95)",
    height: "3vw",
  };
  return (
    <>
      <Navbar style={navbarStyle} variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <p className="logoTxt">Zomato</p>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search a dishes.."
              className="m-auto"
              aria-label="Search"
              //   style={{width:5vw}}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Nav>
            <Dropdown >
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontFamily="10px"/>
              <Badge className="bdg" style={{fontSize: '1vw', color: "#5cb85c !important"}} variant="success">{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth: 360}}>
                <span style={{padding:"0.5vw"}}>Cart Is empty! </span>
            </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
