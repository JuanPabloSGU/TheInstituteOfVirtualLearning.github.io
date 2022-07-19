import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationSecondary() {
    return (
        <>
            <Navbar bg="light py-2" expand="lg">

                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                            The Insititute of Virtual Learning
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='navbar-nav'/>

                    <Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/' >
                                    Home
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationSecondary;