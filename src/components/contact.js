import { Container, Card } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <section id='contact' className='bg-dark'>
                <Container className='p-5'>
                <Card className='p-4 bg-light' >
                    <Card.Title as="h2" className='text-center'>Contact Us</Card.Title>
                    <Card.Text className='text-center'>
                    The Insititute of Virtual Learning

                    <p>
                        <i>+1 (613) 562-5700 ext 1</i>
                    </p>

                    <h5>
                        Office Hours
                    </h5>

                    <p>
                        Everyday from 8 am to 3pm
                    </p>


                    </Card.Text>
                </Card>
                </Container>
            </section>
        </>
    );
}

export default Contact;