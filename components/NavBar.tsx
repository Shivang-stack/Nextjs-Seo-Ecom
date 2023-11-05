import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        {/* <Nav.Link as={Link} href="/search">Search</Nav.Link> */}
                        <NavDropdown title="Categories" id="categories-dropdown">
                            <NavDropdown.Item as={Link} href="/categories/Dairy">Dairy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/Fruits&Vegetables">Fruits & Vegetables</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;