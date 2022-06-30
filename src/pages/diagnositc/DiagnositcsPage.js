import NavigationSecondary from "../../components/navigationSecondary";
import {Container, Card, Button, Col, Row, ProgressBar, Form} from 'react-bootstrap';
import React from "react";

function Question() {
    return (
        <>
            <Container className="py-2">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Question # 
                        </Card.Title>

                        <Card.Text>
                            Praesent auctor est et turpis lacinia ultricies. Vivamus in rutrum nisl, at sagittis lectus. Aliquam ac purus vitae mauris tristique pretium. Donec fringilla porttitor eleifend.

                            <Form>
                                <Form.Group className="py-3">
                                    <Form.Label>Answer : </Form.Label>
                                    <Form.Control type="text" placeholder="Result"/>
                                </Form.Group>
                            </Form> 
                        </Card.Text>
                        
                        <Button className="float-end" variant="primary">Submit</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

function DiagnosticsTest() {

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);

    const pageLoad = false;

    React.useEffect(() => {
        let timerId;

        if(!pageLoad){
            setCountDown(60 * 10)
            if(runTimer) {
                setCountDown(60 * 10);
                timerId = setInterval(() => {
                    setCountDown((countDown) => countDown -1);
                }, 1000)
            } else {
                clearInterval(timerId);
            }
        }
        return () => clearInterval(timerId);
    }, [runTimer])

    React.useEffect(() => {
        if(countDown < 0 && runTimer) {
            console.log('finished');
            setRunTimer(false);
            setCountDown(0);
        }
    }, [countDown, runTimer])

    const toggerTimer = () => setRunTimer((t) => !t);

    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return (
        <>
            <section>
                <Container className="p-3">
                    <Card>
                        <Card.Title className="py-2 text-center">
                            <h3>Diagnostic Test</h3>
                            <h6 className="text-muted">Lets see how well you do!</h6>
                        </Card.Title>

                        <Card.Header>
                            <Row className="px-3">
                                <Col>
                                    <i class="bi bi-clock"></i> Time: {minutes} : {seconds}
                                </Col>

                                <Col className="py-2">
                                    <ProgressBar now={50} />
                                </Col>

                                <Col className="float-end">
                                    <Button className="float-end w-50" variant="primary" onClick={toggerTimer}>
                                            {runTimer ? "Reset" : "Start"}
                                        </Button>
                                </Col>
                            </Row>
                        </Card.Header>

                        <Card.Text>
                            <Question></Question>
                            <Question></Question>
                            <Question></Question>
                            <Question></Question>
                            <Question></Question>
                        </Card.Text>
                    </Card>
                </Container>
            </section>
        </>
    )
    
}

function DiagnosticPage() {
    return (
        <>
            <NavigationSecondary></NavigationSecondary>
            <DiagnosticsTest></DiagnosticsTest>
            <NavigationSecondary></NavigationSecondary>
        </>
    );
}

export default DiagnosticPage;