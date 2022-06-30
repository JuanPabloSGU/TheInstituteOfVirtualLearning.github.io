import { Container, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Maincard() {
    return (
        <>
            <section>
                <Container className='py-2 pb-4'>
                <Card className='bg-dark text-white'>
                    <Card.Img src='./InstituteVirtual.github.io/assets/main-img.jpg' alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Title className='text-center p-4'>
                        <h1>
                        Welcome to the Institute of Virtual Learning
                        </h1>
                        
                    </Card.Title>
                    <Card.Text className='p-5 text-center lead'>
                        Find tutors, videos and practice sheets and learn more about STEM topics
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className='bg-light text-center'>
                    <Card.Body>
                    <Card.Title>Not sure where to go?</Card.Title>
                    <Card.Subtitle className='text-muted pb-3'>Get started by taking part of our diagnostic test!</Card.Subtitle>

                    <Link to="/DiagnosticsPage">
                        <Button variant='primary'>Diagnostic Test</Button>
                    </Link>
                    
                    </Card.Body>
                </Card>
                </Container>
            </section>
        </>
    )
}

export default Maincard;