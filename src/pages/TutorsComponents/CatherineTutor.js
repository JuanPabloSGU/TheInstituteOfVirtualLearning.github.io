import React, { useState } from "react";
import {Row, Col, Container, Button, ListGroup, Card, Modal, Form} from "react-bootstrap";

function About() {
    return (
        <>
            <section className="p-3">
                <Container>
                    <Row>
                        <Col className="px-3 ms-auto" lg={8} md={6} sm={5}>
                            <h4>Catherine Turner</h4>
                            <h6 className="text-muted">Math Expert in Toronto <i class="bi bi-dot"></i> Apart of our team since October 27, 2015</h6>

                            <p className="py-2">
                                Catherine graduated from the University of Toronto with a Undergraduate Mathematics Program. She has a fundamental knowledge of Mathematics as she is pursuing her Masters at the University of Ottawa.

                                <br></br>
                                <br></br>

                                Catherine has been with the Insititute of Virtual Learning for 7 years. She has tutored for many students throughout her years. 
                            </p>
                        
                        </Col>

                        <Col>
                            <img src='./InstituteVirtual.github.io/assets/tutorCatherine.jpg' alt="card img"></img>
                        </Col>

                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

function QuoteModalCentered(props) {

    var flatrate = Math.floor(Math.random() * (100 - 30 + 1)) + 1;
    const CatherineFree = 20;

    var total = flatrate + CatherineFree;

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Thanks, {props.data.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <h6 className='text-center'>Your Quote</h6>

            <p className='pt-3'>
            <Container>
                <Row>
                    <Col>
                    <p>Details about your Quote is below : </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h6>Your Selected Subject :</h6>
                    <p className='pt-0'>{props.data.subject}</p>
                    </Col>

                    <Col>
                    <h6>Frequency of Session :</h6>
                    <p className='pt-0'>{props.data.frequency}</p>
                    </Col>
                </Row>

                <Row>
                    <h6>Payment Information</h6>

                    <Col className="p-3">
                        <p>Flat Session Fees :</p>
                        <p>Brandon's Session Fees :</p>
                        <p>Total Session Payment :</p>
                    </Col>

                    <Col className="p-3">
                        <p><i>${flatrate}</i></p>
                        <p><i>${CatherineFree}</i></p>
                        <p><i>${total}</i></p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h6>Your Message :</h6>
                    <i className='pt-0'>{props.data.addinfo}</i>
                    <br></br>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <br></br>
                    <h6 className='text-justify'>We will be sending a confirmation email at : {props.data.email}, shortly.</h6>
                    </Col>
                </Row>
                
            </Container>
            </p>
            
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

function QuoteModal(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const submitButton = (event) => {
        if(props.show) {
            setModalShow(true)
        }
    }

    return (
        <>
            <Button type='submit' form='catherine-form' variant='primary' onClick={submitButton}>Obtain Quote</Button>

            <QuoteModalCentered data={props.data} show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
}

function PersonalizedBanner() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [phone, setPhone] = useState([])
    const [educationLevel, setEducationLevel] = useState([])
    const [subject, setSubject] = useState([])
    const [frequency, setFrequency] = useState([])
    const [currentGrade, setCurrentGrade] = useState([])
    const [futureGrade, setFutureGrade] = useState([])
    const [addinfo, setAdditionalInfo] = useState([])

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleEducationChange = (event) => {
        setEducationLevel(event.target.value)
    }

    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    }

    const handleFrequencyChange = (event) => {
        setFrequency(event.target.value)
    }

    const handleCurrentGradeChange = (event) => {
        setCurrentGrade(event.target.value)
    }
    
    const handleFutureGradeChange = (event) => {
        setFutureGrade(event.target.value)
    }

    const handleAdditionalChange = (event) => {
        setAdditionalInfo(event.target.value)
    }

    const data = {
        name: name,
        email: email,
        phone: phone,
        educationLevel: educationLevel,
        subject: subject,
        frequency: frequency,
        currentGrade: currentGrade,
        futureGrade: futureGrade,
        addinfo: addinfo,
    }

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setShow(false);
        }

        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        setShow(validated);
    }

    return (
        <>
            <section className="bg-dark text-white">
                <Container className="p-3">
                    <h4 className="text-center py-3">Catherine is avaliable for a consultation</h4>
                    <Row className="pb-4">
                        <Col>
                            <Card className="text-black">
                                <Card.Body>
                                    <Card.Title as={"h5"} className="text-center">
                                        Obtain Quote for Catherine as a tutor
                                    </Card.Title>

                                    <Card.Text>
                                        <Form className="p-2" id='catherine-form' noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row className="py-2">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => handleNameChange(event)} required/>
                                                    <Form.Control.Feedback type='invalid'>
                                                        Please provide a valid name
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder='Enter email' onChange={(event) => handleEmailChange(event)} required/>
                                                    <Form.Control.Feedback type='invalid'>
                                                        Please provide a valid email
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                            <Row className="py-2">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="tel" placeholder='(ext: (000) 000-000)' onChange={(event) => handlePhoneChange(event)} required/>
                                                    <Form.Control.Feedback type='invalid'>
                                                        Please provide a valid phone number
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Education Level</Form.Label>
                                                    <Form.Select defaultValue="Education level..." onChange={(event) => handleEducationChange(event)}>
                                                        <option>Education level...</option>
                                                        <option>Elementary Education</option>
                                                        <option>Secondary Education</option>
                                                        <option>Undergraduate Education</option>
                                                        <option>Graduate Education</option>
                                                        <option>Doctoral Education</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>

                                            <Row className="py-2">
                                                <Form.Group as={Col} controlId="bookTutorSelectSubject">
                                                    <Form.Label>Select Subject</Form.Label>
                                                    <Form.Select defaultValue="Subject..." onChange={(event) => handleSubjectChange(event)}>
                                                        <option>Subject...</option>
                                                        <option>Mathematics</option>
                                                        <option>Science</option>
                                                        <option>Technology</option>
                                                        <option>Engineering</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Frequency of Sessions</Form.Label>

                                                    <Form.Select defaultValue="Frequency..." onChange={(event) => handleFrequencyChange(event)}>
                                                        <option>Frequency...</option>
                                                        <option>Daily</option>
                                                        <option>Weekly</option>
                                                        <option>Biweekly</option>
                                                        <option>Monthly</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>

                                            <Row className="py-2">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Current GPA</Form.Label>
                                                    <Form.Select defaultValue="Select..." onChange={(event) => handleCurrentGradeChange(event)}>
                                                        <option>Select...</option>
                                                        <option>A+	(97-100) 4.0</option>
                                                        <option>A	(93-96)	4.0</option>
                                                        <option>A-	(90-92)	3.7</option>
                                                        <option>B+	(87-89)	3.3</option>
                                                        <option>B	(83-86)	3.0</option>
                                                        <option>B-	(80-82)	2.7</option>
                                                        <option>C+	(77-79)	2.3</option>
                                                        <option>C	(73-76)	2.0</option>
                                                        <option>C-	(70-72)	1.7</option>
                                                        <option>D+	(67-69)	1.3</option>
                                                        <option>D	(65-66)	1.0</option>
                                                        <option>E/F	(Below 65)	0.0</option>

                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Desired GPA</Form.Label>
                                                    <Form.Select defaultValue="Select..." onChange={(event) => handleFutureGradeChange(event)}>
                                                        <option>Select...</option>
                                                        <option>A+	(97-100) 4.0</option>
                                                        <option>A	(93-96)	4.0</option>
                                                        <option>A-	(90-92)	3.7</option>
                                                        <option>B+	(87-89)	3.3</option>
                                                        <option>B	(83-86)	3.0</option>
                                                        <option>B-	(80-82)	2.7</option>
                                                        <option>C+	(77-79)	2.3</option>
                                                        <option>C	(73-76)	2.0</option>
                                                        <option>C-	(70-72)	1.7</option>
                                                        <option>D+	(67-69)	1.3</option>
                                                        <option>D	(65-66)	1.0</option>
                                                        <option>E/F	(Below 65)	0.0</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>

                                            <Row className="py-2">
                                                <Form.Group>
                                                    <Form.Label>Additional Information</Form.Label>
                                                    <Form.Control as="textarea" onChange={(event) => handleAdditionalChange(event)}/>
                                                </Form.Group>
                                            </Row>
                                        </Form>

                                        <Row className="py-2 text-center">
                                            <Col className="">
                                                <QuoteModal show={show} data={data}></QuoteModal>
                                            </Col>
                                        </Row>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

function Education() {
    return (
        <>
            <section className="py-4">
                <Container>
                    <h4>
                        <i class="bi bi-building"></i>&nbsp;Education
                    </h4>

                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div className="me-auto">
                                    <div className="fw-bold">University of Ottawa - Masters</div>

                                    <div className="ms-2">
                                        Currently Catherine is currently pursuing her masters in applied mathemicas while tutoring students.
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div className="me-auto">
                                    <div className="fw-bold">Univserity of Toronto - Undergrad</div>

                                    <div className="ms-2">
                                        Catherine graduated with Summa Cum Luade (with highest honor) in her degree of applied Mathematics.
                                    </div>
                                    
                                </div>
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </div>
                </Container>
            </section>
        </>
    )
}

function ReviewCard(props) {

    return (
        <>
            <Container className="pb-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Rated by : {props.data.name} </Card.Title>
                        <Card.Subtitle className="text-muted">
                            Rated out of : {props.data.rating}
                        </Card.Subtitle>

                        <Card.Text className="p-3">
                            <i>
                                {props.data.review}
                            </i>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            
        </>
    )
}

function AddReview() {

    const [list, setList] = React.useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
    }

    const [name, setName] = useState([]);
    const [rating, setRating] = useState([]);
    const [review, setReview] = useState([]);

    const data = {
        name: name,
        rating: rating,
        review: review,
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    const handleReviewChange = (event) => {
        setReview(event.target.value)
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else {
            event.preventDefault();
            if(validated) {
                const newList = list.concat({data})
                setList(newList)
                setShow(false)
            }

            setValidated(true)
        }
    }

    return(
        <>

            {list.map((item) => (
                <ReviewCard key={item.id} data={item.data}></ReviewCard> 
            ))}

            <Container className="text-center p-3">
                <Button variant="primary" onClick={handleShow}>Add a Review</Button>
            </Container>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit} id='catherine-review-form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="name"
                            autoFocus
                            onChange={(event) => handleNameChange(event)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Select defaultValue="1/5 Stars" onChange={(event) => handleRatingChange(event)}>
                            <option>1/5 Stars</option>
                            <option>2/5 Stars</option>
                            <option>3/5 Stars</option>
                            <option>4/5 Stars</option>
                            <option>5/5 Stars</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(event) => handleReviewChange(event)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Please enter a valid review
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' form='catherine-review-form' variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>            
        </>
    )
}

function Reviews() {

    const r1 = {
        name: "Justin",
        rating: "5/5 Rating",
        review: "She has really encouraged me to improve with my math skills.",
    }

    const r2 = {
        name: "Julia",
        rating: "5/5 Rating",
        review: "She is one of the best tutors that I have had. She is really helpful to talk to and she can easily explain what she is thinking while solving a problem.",
    }

    const r3 = {
        name: "Emma",
        rating: "5/5 Rating",
        review: "Catherine is really helpful when I can't understand some of the more abstract concepts that higher mathematics requires. I find that she can generally answer all of the questions that I have about a certain topic.",
    }

    return (
        <>
            <section>
                <Container>
                    <h4>Reviews</h4>
                    <ReviewCard data={r1}></ReviewCard>
                    <ReviewCard data={r2}></ReviewCard>
                    <ReviewCard data={r3}></ReviewCard>
                    <AddReview></AddReview>
                </Container>
            </section>
        </>
    );
}

function CatherineTutor() {
    return (
        <>
            <About></About>
            <PersonalizedBanner></PersonalizedBanner>
            <Education></Education>
            <Reviews></Reviews>
        </>
    );
}

export default CatherineTutor;