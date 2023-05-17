import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/human-vs-ai.svg";
import "../../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="header">
      <Container>
        <Link className="shake" to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ color: "#fff", fontWeight: "bold" }}>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Human vs AI: Logo"
            />
            {" Human vs AI"}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} className="navbar-toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="nav-link-style header-button">Home</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
