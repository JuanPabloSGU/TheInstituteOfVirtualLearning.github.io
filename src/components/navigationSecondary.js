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
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationSecondary;