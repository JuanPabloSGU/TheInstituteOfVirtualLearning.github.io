import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBarSecondaryFR() {
    return (
        <>
            <Navbar bg='light py-2' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to='/' style={{color: 'inherit', textDecoration:'none'}}>
                            L'Institut d'Apprentissage Virtuel
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='navbar-nav' />

                    <Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
                                    Page d'accueil
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default NavigationBarSecondaryFR;