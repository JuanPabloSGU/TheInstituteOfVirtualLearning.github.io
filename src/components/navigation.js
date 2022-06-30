import {Nav, Navbar, Container} from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar bg="light py-2" expand="lg">
                <Container classname=''>
                    <Navbar.Brand href="#">The Insititute of Virtual Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#how">How it Works</Nav.Link>
                            <Nav.Link href="#subjects">Subjects</Nav.Link>
                            <Nav.Link href="#testimonals">Testimonals</Nav.Link>
                            <Nav.Link href="#tutors">Tutors</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation;