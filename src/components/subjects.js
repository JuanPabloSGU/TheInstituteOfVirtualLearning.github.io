import {Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Subjects() {
    return (
        <>
            <section id='subjects'>
                <Container>
                <h2 className='text-center p-3'>Our Subjects</h2>
                <Row className='justify-content-md-center'>
                    <Col xs={6} md={5} lg={3}>
                    <section>
                        <h4>
                        <a>
                            <span style={{color:"#369c63"}}>
                                Science <i class="bi bi-thermometer-half"></i>
                            </span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>

                        <ListGroup.Item className='py-3' action >
                            <Link style={{color: 'inherit', textDecoration: 'none'}}to="/Physics">
                            Physics 
                            </Link>
                            </ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Chemistry</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Biology</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Earth Sciences</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Materials</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Space {'&'} Astronomy</ListGroup.Item>
                        <ListGroup.Item className='py-3' action>Learn more  {'>'}</ListGroup.Item>
                        </ListGroup>
                        
                    </section>
                    </Col>

                    <Col xs={6} md={5} lg={3}>
                    <section>
                        <h4>
                        <a>
                            <span style={{color : "#00adb8"}}>
                                Technology  <i class="bi bi-laptop"></i></span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' action>
                            <Link style={{color: 'inherit', textDecoration: 'none'}}to="/ComputerScience">
                            Computer Science
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Transportation</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Embedded Systems</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Networking</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Security</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Databases</ListGroup.Item>
                        <ListGroup.Item className='py-3' action>Learn more  {'>'}</ListGroup.Item>
                        </ListGroup>
                    </section>
                    </Col>

                    <Col xs={6} md={5} lg={3}>
                    <section>
                        <h4>
                        <a>
                            <span style={{color: "#dc565d"}}>Engineering <i class="bi bi-wrench-adjustable-circle"></i></span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' disabled>Electrical</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Chemical</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Civil</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Mechanical</ListGroup.Item>
                        <ListGroup.Item className='py-3' action >
                            <Link style={{color: 'inherit', textDecoration: 'none'}} to="/SoftwareEngineering">
                            Software
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Biological</ListGroup.Item>
                        <ListGroup.Item className='py-3' action>Learn more  {'>'}</ListGroup.Item>
                        </ListGroup>
                    </section>
                    </Col>

                    <Col xs={6} md={5} lg={3}>
                    <section>
                        <h4>
                        <a>
                            <span style={{color:"#9371b5"}}>
                                Mathematics <i class="bi bi-calculator"></i></span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' disabled >Algebra</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Calculus {'&'} Analysis</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Geometry</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Differential Equations</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Trigonometry</ListGroup.Item>
                        <ListGroup.Item className='py-3' action>
                            <Link style={{color: 'inherit', textDecoration: 'none'}}to="/LinearAlgebra">
                            Linear Algebra
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3' action>Learn more  {'>'}</ListGroup.Item>
                        </ListGroup>
                    </section>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Subjects;