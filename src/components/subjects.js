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
                            <span>Science</span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' action href='#'>Physics
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
                            <span>Technology</span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' action href='#'>Computer Science</ListGroup.Item>
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
                            <span>Engineering</span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' disabled>Electrical</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Chemical</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Civil</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Mechanical</ListGroup.Item>
                        <ListGroup.Item className='py-3' action href='#'>Software</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Biological</ListGroup.Item>
                        <ListGroup.Item className='py-3' action>Learn more  {'>'}</ListGroup.Item>
                        </ListGroup>
                    </section>
                    </Col>

                    <Col xs={6} md={5} lg={3}>
                    <section>
                        <h4>
                        <a>
                            <span>Mathematics</span>
                        </a>
                        </h4>

                        <ListGroup variant='flush' className='py-3'>
                        <ListGroup.Item className='py-3' disabled >Algebra</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Calculus {'&'} Analysis</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Geometry</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Differential Equations</ListGroup.Item>
                        <ListGroup.Item className='py-3' disabled>Trigonometry</ListGroup.Item>
                        <ListGroup.Item className='py-3' action href='#'>Linear Algebra</ListGroup.Item>
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