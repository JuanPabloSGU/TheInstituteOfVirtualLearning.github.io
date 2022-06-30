import {Container, Carousel, Card } from 'react-bootstrap';

function Testimonals() {
    return (
        <>
            <section id="testimonals" className='text-center pt-4'>
                <Container>
                <h2>Testimonals</h2>
                <Carousel variant='dark' className='px-5 py-2'>
                    <Carousel.Item className='px-5 py-2'>
                    <Card>
                        <Card.Header className='text-truncate'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className='blockquote md-0'>
                                <p>
                                {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                                </p>
                                <footer>Rated in <cite title='Source Title'>Craig's Mom</cite></footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>

                    <Carousel.Item className='px-5 py-2'>
                    <Card>
                        <Card.Header className='text-truncate'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className='blockquote md-0'>
                                <p>
                                {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                                </p>
                                <footer>Rated in <cite title='Source Title'>Craig's Mom</cite></footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>

                    <Carousel.Item className='px-5 py-2'>
                    <Card>
                        <Card.Header className='text-truncate'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className='blockquote md-0'>
                                <p>
                                {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                                </p>
                                <footer>Rated in <cite title='Source Title'>Craig's Mom</cite></footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>

                    <Carousel.Item className='px-5 py-2'>
                    <Card>
                        <Card.Header className='text-truncate'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className='blockquote md-0'>
                                <p>
                                {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                                </p>
                                <footer>Rated in <cite title='Source Title'>Craig's Mom</cite></footer>
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