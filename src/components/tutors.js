import {Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tutors() {
    return (
        <>
            <section id="tutors">
                <Container>
                <h2 className='text-center py-4'>Our Tutors</h2>
                <Row className='py-3'>
                    <Col className='px-3 ms-auto' lg={8} md={6} sm={5}>
                    <h3>
                        <a>
                            Catherine Turner
                        </a>
                    </h3>
                    <h5 className='text-muted'>
                        Math Expert - Toronto
                    </h5>
                    <p>
                        Catherine graduated from the University of Toronto with a Undergraduate Mathematics Program. She has a fundamental knowledge of Mathematics as she is pursuing her Masters at the University of Ottawa.
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <p class="py-4 d-inline"> - (3 ratings)</p> 
                    </div>

                    <Link to="/CatherineTutor">
                        <Button variant='primary'>
                            Visit Catherine's full profile
                        </Button>
                    </Link>
                    </Col>
                    <Col className='justify-content-center'>
                    <img src='./TheInstituteOfVirtualLearning.github.io/assets/tutorCatherine.jpg' alt='card img'></img>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col className='px-3 ms-auto' lg={8} md={6} sm={5}>
                    <h3>
                        <a>
                            Brandon Hurley
                        </a>
                    </h3>
                    <h5 className='text-muted'>
                        Physics Expert - Montreal
                    </h5>
                    <p>
                        Brandon is current pursuing his Doctorate at the University of British Columbia. Brandon has a deep understanding of physics ranging from highschool to master level topics. 
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <p class="py-4 d-inline"> - (2 ratings)</p> 
                    </div>

                    <Link to="/BrandonTutor">
                        <Button variant='primary'>
                            Visit Brandon's full profile
                        </Button>
                    </Link>
                    
                    </Col>
                    <Col>
                    <img src='./TheInstituteOfVirtualLearning.github.io/assets/tutorBrandon.jpg' alt='card img'></img>
                    </Col>
                </Row>
                <Row className='pb-2'>
                    <Col className='px-3 ms-auto' lg={8} md={6} sm={5}>
                    <h3>
                        <a>
                        Raymond Jackson
                        </a>
                    </h3>
                    <h5 className='text-muted'>
                        Mechanical Engineering Expert - Calgary
                    </h5>
                    <p>
                        Raymond graduated from the University of Toronto for his degree of Mechanical Engineering. Current Raymond has split his focus between teaching and pursuing his Masters at the University of Ottawa in Mechanical Engineering.
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <p class="py-4 d-inline"> - (1 rating)</p> 
                    </div>

                    <Link to="/RaymondTutor">
                        <Button variant='primary'>
                            Visit Raymond's full profile
                        </Button>
                    </Link>
                    
                    </Col>
                    <Col>
                    <img src='./TheInstituteOfVirtualLearning.github.io/assets/tutorRaymond.jpg' alt='card img'></img>
                    </Col>
                </Row>

                <Row className='py-3'>
                    <Col className='px-3 ms-auto' lg={8} md={6} sm={5}>
                    <h3>
                        <a>
                        Emmy Lyric
                        </a>
                    </h3>
                    <h5 className='text-muted'>
                        Network Expert - Vancouver
                    </h5>
                    <p>
                        Emmy has graduated from the University of Toronto with a degree in Computer Science. Currently Emmy has been pursuing a masters at Ryerson University in Networking. She has an interest in mulitple disiciplines in computer science and has a great enjoyment tutoring students.
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <p class="py-4 d-inline"> - (2 ratings)</p> 
                    </div>

                    <Link to="/EmmyTutor">
                        <Button variant='primary'>
                            Visit Emmy's full profile
                        </Button>
                    </Link>
                    
                    </Col>
                    <Col>
                    <img src='./TheInstituteOfVirtualLearning.github.io/assets/tutorEmmy.jpg' alt='card img'></img>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Tutors;