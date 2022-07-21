import { useRef, useState } from 'react';
import {Container, Card, Form, Row, Col, Button, Overlay, Tooltip } from 'react-bootstrap';

function Messages() {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            setShow(false);
        }

        event.preventDefault();
        event.stopPropagation();

        setValidated(true);
        setShow(validated)
    }

    return (
        <>
            <section>
                <Container className='pb-5'>
                <h2 className='py-3 text-center'>Questions?</h2>

                <Card>
                    <Card.Title className='p-3 text-center'>Ask us any questions</Card.Title>
                    <Card.Text>
                    <Form className='px-5' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='contactName'>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid name
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='contactEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='example@email.com' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid email
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='contactMessage'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Message" required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid message
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Row className='pb-5 pt-3' >
                        <Col className='text-center'>
                            <Button type="submit" ref={target} onClick={handleSubmit}>
                            Send us a Message
                            </Button>
                           
                            <Overlay target={target.current} show={show} placement="bottom">
                                {(props) => (
                                    <Tooltip {...props}>
                                        Thanks for sending us a message
                                    </Tooltip>
                                )}
                            </Overlay>
                        </Col>
                        </Row>
                    </Form>
                    </Card.Text>
                </Card>

                </Container>
            </section>
        </>
    );
}

export default Messages;