import React, {useState} from 'react';
import {Container, Card, Form, Row, Col}  from 'react-bootstrap';
import ModalBooking from './modalbooking';

function BookTutor() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [subject, setSubject] = useState([])
    const [sessionType, setSessionType] = useState([])
    const [date, setDate] = useState([])
    const [duration, setDuration] = useState([])
    const [addInfo, setAddInfo] = useState([])

    const data = {
        name: name,
        email: email,
        subject: subject,
        sessionType: sessionType,
        date: date,
        duration: duration,
        info: addInfo,
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    }

    const handleSessionTypeChange = (event) => {
        setSessionType(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value)
    }

    const handleAdditionalChange = (event) => {
        setAddInfo(event.target.value)
    }

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

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
                <Container>
                <h2 className='text-center py-3'>
                    Need help? Book now
                </h2>

                    <Card className='py-3'>
                        <Card.Body>
                        <Card.Title className='text-center'>Fill out personal details to get started!</Card.Title>

                            <Form id='booktutor-form' noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className='p-3'>
                                    <Form.Group as={Col} controlId="bookTutorStuName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" onChange={(event) => handleNameChange(event)} required/>
                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid name
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="bookTutorStuEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder='Enter email' onChange={(event) => handleEmailChange(event)} required/>
                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid email
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='p-3'>
                                <Form.Group as={Col} controlId="bookTutorSelectSubject">
                                    <Form.Label>Select Subject</Form.Label>
                                    <Form.Select defaultValue="Subject..." onChange={(event) => handleSubjectChange(event)}>
                                        <option>Subject...</option>
                                        <option>Science</option>
                                        <option>Technology</option>
                                        <option>Engineering</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="bookTutorSelectType">
                                    <Form.Label>Select Type of Session</Form.Label>
                                    <Form.Select defaultValue="Other..." onChange={(event) => handleSessionTypeChange(event)}>
                                        <option>Other...</option>
                                        <option>Assignment</option>
                                        <option>Homework Help</option>
                                        <option>Review Session</option>
                                        <option>Concept Overview</option>
                                    </Form.Select>
                                </Form.Group>

                                </Row>

                                <Row className='p-3'>
                                <Form.Group as={Col} controlId="bookTutorSelectDate">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" onChange={(event) => handleDateChange(event)} required/>
                                    <Form.Control.Feedback type='invalid'>
                                        Please enter a valid date
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="bookTutorSelectDuration">
                                    <Form.Label>Select Duration of Session</Form.Label>
                                    <Form.Select defaultValue="30 mins" onChange={(event) => handleDurationChange(event)} >
                                        <option>15 mins</option>
                                        <option>30 mins</option>
                                        <option>45 mins</option>
                                        <option>1 hr</option>
                                        <option>2 hr</option>
                                        <option>3+ hr</option>
                                    </Form.Select>
                                </Form.Group>

                                </Row>

                                <Row className='p-3'>
                                    <Form.Group>
                                        <Form.Label>Additional Information</Form.Label>
                                        <Form.Control as="textarea" onChange={(event) => handleAdditionalChange(event)}/>
                                    </Form.Group>
                                </Row>

                                <Row className='pt-3'>
                                    <Col className='text-center'>
                                        <ModalBooking show={show} data={data}/>
                                    </Col>
                                </Row>

                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    );
}

export default BookTutor;