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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam metus et augue hendrerit ultricies. 
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill">
                        <p class="py-4 d-inline"> - (3 ratings)</p> 
                        </i>
                    </div>

                    <Link to="/CatherineTutor">
                        <Button variant='primary'>
                            Visit Catherine's full profile
                        </Button>
                    </Link>
                    </Col>
                    <Col className='justify-content-center'>
                    <img src='./assets/tutor_2.PNG'></img>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam metus et augue hendrerit ultricies. 
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill">
                        <p class="py-4 d-inline"> - (2 ratings)</p> 
                        </i>
                    </div>

                    <Link to="/BrandonTutor">
                        <Button variant='primary'>
                            Visit Brandon's full profile
                        </Button>
                    </Link>
                    
                    </Col>
                    <Col>
                    <img src='./assets/tutor.PNG'></img>
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
                        Mechanical Engineering Expert - Alberta
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam metus et augue hendrerit ultricies. 
                    </p>

                    <div className='pb-3'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <p class="py-4 d-inline"> - (1 ratings)</p> 
                    </div>

                    <Link to="/RaymondTutor">
                        <Button variant='primary'>
                            Visit Raymond's full profile
                        </Button>
                    </Link>
                    
                    </Col>
                    <Col>
                    <img src='./assets/tutor_4.PNG'></img>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam metus et augue hendrerit ultricies. 
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
                    <img src='./assets/tutor_3.PNG'></img>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Tutors;