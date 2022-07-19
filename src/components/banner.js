import {Container, Row, Col} from 'react-bootstrap';

function Banner() {
    return (
        <>
            <section id="how" className='bg-secondary text-white'>
                <Container className='p-4'>
                <h2 className='text-center p-3'>How does The Insititute of Virtual Learning Work?</h2>
                <Row>
                    <Col>
                    <h4 className='text-center bold pt-3'>
                        Beyond Tutoring
                    </h4>
                    <p className='py-3 text-sm-left text-xl-center'>
                        Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                    </p>
                    </Col>
                    <Col>
                    <h4 className='text-center bold pt-3'>
                        Trusted Content
                    </h4>
                    <p className='py-3 text-sm-left text-xl-center'>
                        Created by experts, handpicked from our library of trusted practice and lessons which covers all stem topics and concepts. Always free for learners!!!
                    </p>
                    </Col>
                    <Col>
                    <h4 className='pt-3 text-center'>
                        Delivers Results
                    </h4>
                    <p className='py-3 text-sm-left text-xl-center'>
                        The Insititute of Virtual Learning delivers results in school and beyond. Take a look at our national recognized programs and experts.
                    </p>
                    </Col>
                </Row>

                </Container>
            </section>
        
        </>
    )
}

export default Banner;