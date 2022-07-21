import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
    return (
        <>
            <section id='faq' className='py-4'>
                <Container className='py-2'>
                <h2 className='py-2 text-center'>Frequently Asked Questions</h2>

                <Accordion className='pt-3'>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>How much does tutoring cost?</Accordion.Header>
                    <Accordion.Body>Well that depends, most tutors are individuals with different pricing. Please contact a tutor to receive valuable information regarding tutoring sesssion fees </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Is there an age limit?</Accordion.Header>
                    <Accordion.Body>The entire point of the Insititute is that everyone from different walks of life can have the oppurtnity to learn about STEM topics.</Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Who can I contact about accessibility issues I encountered on this site?</Accordion.Header>
                    <Accordion.Body>The Insititute of Virutal Learning is committed to making this website accessilbe to all individuals. Please leave a message on our main page to keep us informed.</Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                    <Accordion.Header>How does the Insititute of Virtual Learning Work?</Accordion.Header>
                    <Accordion.Body>The Insititute of Virtual Learning goes beyond tutoring. Instead, students actively develop critical thinking skills while progressing independently through a carefully crafted curriculum.</Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                    <Accordion.Header>How is the Insititute of Virtual Learning different from a tutor?</Accordion.Header>
                    <Accordion.Body>The Institute of Virtual Learning instills students the skills and mindset necessary to learn new materials without being taught. With help from certified instructors, students are able to move at their own pace each day through an individualized instruction. When a student doesn't graps a concept and needs guidance, the necessary steps are taken to ensure the studetn can work on it until its mastered. </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

                </Container>
            </section>
        </>
    );
}

export default FAQ;