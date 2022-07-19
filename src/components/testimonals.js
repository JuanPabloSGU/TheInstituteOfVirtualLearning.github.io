import {Container, Carousel, Card } from 'react-bootstrap';

function Testimonals() {
    return (
        <>
            <section id="testimonals" className='text-center pt-4'>
                <Container className="">
                <h2>Testimonals</h2>
                <Carousel variant='dark' className='py-2 h-100' id='testimonal-carousel'>
                        <Carousel.Item className='px-5 py-2 h-100'>
                            <Card className='h-100'>
                                <Card.Header className='text-truncate'></Card.Header>
                                <Card.Body>
                                    <blockquote className='blockquote md-0'>
                                        <p>
                                        {' '} The Insititute is a great place to learn and to become a better student and person. The curriculum here is very precise and challenging.{' '}
                                        </p>
                                        <footer>Rated by <cite title='Source Title'> Oli Onyeukwu, Student</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item className='px-5 py-2 h-100'>
                            <Card className='h-100'>
                                <Card.Header className='text-truncate'></Card.Header>
                                <Card.Body>
                                    <blockquote className='blockquote md-0'>
                                        <p>
                                        {' '} Each tutor expects nothing less than the best from each and every student. They are compassionate and caring towards the students. {' '}
                                        </p>
                                        <footer>Rated by<cite title='Source Title'>Zaki Malika, Student</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                </Carousel>
                </Container>
            </section>
        </>
    )
}

export default Testimonals;