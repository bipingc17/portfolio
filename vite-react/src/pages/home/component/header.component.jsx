import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.module.css";
import { NavLink, Link } from "react-router-dom";
const CounterComponent = () => {
  return (<>

  </>)
}

const HomeHeader = () => {

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <NavLink className={"navbar-brand"} to='/'>
              Logo
            </NavLink>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
  
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
  
                <NavDropdown title="Categories" id="categories">
                  <NavDropdown.Item href="/category/smart-phones">
                    Smart Phones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/category/electronics">
                    Electronics
                  </NavDropdown.Item>
                  <NavDropdown title="SubCategory" id="subcat1">
                    <NavDropdown.Item href="/category/sub-category/sub-cat-2">SubCat 2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Brands" id="brands">
                  <NavLink className={"dropdown-item"} to="/brand/smart-phones">
                    Smart Phones
                  </NavLink>
                  <NavDropdown.Item href="#action/3.2">
                    Electronics
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/cart">
                  <FaShoppingCart size={20} /> (0)
                </Nav.Link>
                <NavLink className={"nav-link"} to="/login">
                    Login
                </NavLink>
                <NavLink className={"nav-link"} to="/register">
                  Register
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  };

export default HomeHeader;