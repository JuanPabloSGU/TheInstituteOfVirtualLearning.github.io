import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
    return (
        <>
            <section id='faq' className='py-4'>
                <Container className='py-2'>
                <h2 className='py-2 text-center'>Frequently Asked Questions</h2>

                <Accordion className='pt-3'>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Item #1</Accordion.Header>
                    <Accordion.Body>Sed vel blandit tortor, et iaculis neque. Aliquam eu mollis ligula, facilisis mattis enim. Nullam accumsan eleifend dui, sit amet faucibus odio fermentum vitae. Integer blandit elementum nisl a ultrices. Fusce pulvinar cursus eros, in lobortis dolor ornare id. Etiam id nisi molestie, luctus nulla sed, sollicitudin mi. </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Item #2</Accordion.Header>
                    <Accordion.Body>Sed vel blandit tortor, et iaculis neque. Aliquam eu mollis ligula, facilisis mattis enim. Nullam accumsan eleifend dui, sit amet faucibus odio fermentum vitae. Integer blandit elementum nisl a ultrices. Fusce pulvinar cursus eros, in lobortis dolor ornare id. Etiam id nisi molestie, luctus nulla sed, sollicitudin mi. </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Item #3</Accordion.Header>
                    <Accordion.Body>Sed vel blandit tortor, et iaculis neque. Aliquam eu mollis ligula, facilisis mattis enim. Nullam accumsan eleifend dui, sit amet faucibus odio fermentum vitae. Integer blandit elementum nisl a ultrices. Fusce pulvinar cursus eros, in lobortis dolor ornare id. Etiam id nisi molestie, luctus nulla sed, sollicitudin mi. </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                    <Accordion.Header>Item #4</Accordion.Header>
                    <Accordion.Body>Sed vel blandit tortor, et iaculis neque. Aliquam eu mollis ligula, facilisis mattis enim. Nullam accumsan eleifend dui, sit amet faucibus odio fermentum vitae. Integer blandit elementum nisl a ultrices. Fusce pulvinar cursus eros, in lobortis dolor ornare id. Etiam id nisi molestie, luctus nulla sed, sollicitudin mi. </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                    <Accordion.Header>Item #5</Accordion.Header>
                    <Accordion.Body>Sed vel blandit tortor, et iaculis neque. Aliquam eu mollis ligula, facilisis mattis enim. Nullam accumsan eleifend dui, sit amet faucibus odio fermentum vitae. Integer blandit elementum nisl a ultrices. Fusce pulvinar cursus eros, in lobortis dolor ornare id. Etiam id nisi molestie, luctus nulla sed, sollicitudin mi. </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

                </Container>
            </section>
        </>
    );
}

export default FAQ;