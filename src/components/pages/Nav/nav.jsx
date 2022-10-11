import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../img/logo.png";

function MenuNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ logo }
              width="150"
              height="60"
              className="d-inline-block align-top"
            />{" "}
           
          </Navbar.Brand>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Proveedores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Sobre Nosotros </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Contactanos</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuNav;
