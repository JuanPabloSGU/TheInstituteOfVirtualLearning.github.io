import FooterDarkFR from "../../components/footerDarkFR";
import NavigationBarSecondaryFR from "../../components/navigationSecondaryFR";
import {Container, Card, Button, Col, Row, ProgressBar, Form} from 'react-bootstrap';
import React from "react";
import { useState } from 'react';
import { questionsFR } from '../../data/questionsFR.js';
import {Modal} from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";

function Question(props) {

    const questionData = props.data.question;

    const [isB1Disabled, setB1Disabled] = useState(false);
    const [changeB1Colour, setB1Colour] = useState("primary");

    const [isB2Disabled, setB2Disabled] = useState(false);
    const [changeB2Colour, setB2Colour] = useState("primary");

    const [isB3Disabled, setB3Disabled] = useState(false);
    const [changeB3Colour, setB3Colour] = useState("primary");

    const [isB4Disabled, setB4Disabled] = useState(false);
    const [changeB4Colour, setB4Colour] = useState("primary");

    const handleClickB1 = () => {
        if(props.data.options[0] !== props.data.result) {
            setB1Disabled(true);
            setB1Colour("danger");
            
        } else {
            setB1Colour("success");
            
            localStorage.setItem(questionData, 'true')
        }

        setB1Disabled(true);
        setB2Disabled(true);
        setB3Disabled(true);
        setB4Disabled(true);
    } 

    const handleClickB2 = () => {
        if(props.data.options[1] !== props.data.result) {
            setB2Disabled(true);
            setB2Colour("danger");
        } else {
            setB2Colour("success");
            localStorage.setItem(questionData, 'true')
        } 

        setB1Disabled(true);
        setB2Disabled(true);
        setB3Disabled(true);
        setB4Disabled(true);
    } 
    
    const handleClickB3 = () => {
        if(props.data.options[2] !== props.data.result) {
            setB3Disabled(true);
            setB3Colour("danger");

        } else {
            setB3Colour("success");
            localStorage.setItem(questionData, 'true')
        }

        setB1Disabled(true);
        setB2Disabled(true);
        setB3Disabled(true);
        setB4Disabled(true);
    } 
    
    const handleClickB4 = () => {
        if(props.data.options[3] !== props.data.result) {
            setB4Disabled(true);
            setB4Colour("danger");
        } else {
            setB4Colour("success");
            localStorage.setItem(questionData, 'true')
        }

        setB1Disabled(true);
        setB2Disabled(true);
        setB3Disabled(true);
        setB4Disabled(true);
    }

    return (
        <>
            <Container className="py-2">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Question # {props.data.question}
                        </Card.Title>

                        <Card.Text>
                            {props.data.text}

                            <Form>
                                <Form.Group className="py-3 ">
                                    <Form.Label>Réponse : </Form.Label>
                                    <Container fluid>
                                        <Row className="py-2">
                                            <Col>
                                                <Button id="b1" className="w-100" disabled={isB1Disabled} onClick={!isB1Disabled ? handleClickB1 : null} variant={changeB1Colour}>
                                                    {props.data.options[0]}
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button id="b2" className="w-100" disabled={isB2Disabled} onClick={!isB2Disabled ? handleClickB2 : null} variant={changeB2Colour}>
                                                    {props.data.options[1]}
                                                </Button>
                                            </Col>
                                        </Row>

                                        <Row className="py-2">
                                            <Col>
                                                <Button id="b3" className="w-100" disabled={isB3Disabled} onClick={!isB3Disabled ? handleClickB3 : null} variant={changeB3Colour}>
                                                    {props.data.options[2]}
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button id="b4" className="w-100" disabled ={isB4Disabled} onClick={!isB4Disabled ? handleClickB4 : null} variant={changeB4Colour}>
                                                    {props.data.options[3]}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form.Group>
                            </Form> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

function CenteredModal(props) {

    const results = getResults();
    var recentResult = results.slice(-1)[0];

    const labels = results.map((element, index) => {
        return `Essayer : ${index + 1}`
    })

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Votre histoire précédente',
            },
        },
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Score Diagnostique',
                data : results,
                backgroundColor : 'rgba(0, 128, 0, 0.4)'
            },
        ],
    };

    return (
        <Modal
        {...props}
        size="lg"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title>
                Vous avez un : {recentResult}/5
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Bar options={options} data={data} />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
        </Modal>
    );
}

function getResults() {
    var results;

    if(localStorage.getItem('results') === null) {
        results = [];
    } else {
        results = JSON.parse(localStorage.getItem("results"))
    }

    return results;
}

function results() {
    const result = [];

    const q1 = JSON.parse(localStorage.getItem('1'));
    if(q1) {
        result.push(q1);
        localStorage.removeItem('1');
    }

    const q2 = JSON.parse(localStorage.getItem('2'));
    if(q2) {
        result.push(q2);
        localStorage.removeItem('2');
    }

    const q3 = JSON.parse(localStorage.getItem('3'));
    if(q3) {
        result.push(q3);
        localStorage.removeItem('3');
    }

    const q4 = JSON.parse(localStorage.getItem('4'));
    if(q4) {
        result.push(q4);
        localStorage.removeItem('4');
    } 

    const q5 = JSON.parse(localStorage.getItem('5'));
    if(q5) {
        result.push(q5);
        localStorage.removeItem('5');
    }

    let results;

    if(localStorage.getItem('results') === null) {
        results = [];
    } else {
        results = JSON.parse(localStorage.getItem("results"));
    }

    if(result.length > 0) {
        results.push(result.length);
        localStorage.setItem("results", JSON.stringify(results));
    }
}

function QuestionList() {
    return (
        <div>
            {questionsFR.map((data, key) => (
                <Question key={key} data={data} />
            ))}
        </div>
    )
}

function DiagnosticsTest() {

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const pageLoad = false;

    React.useEffect(() => {
        let timerId;

        if(!pageLoad){
            setCountDown(60 * 5)
            if(runTimer) {
                setCountDown(60 * 5);
                timerId = setInterval(() => {
                    setCountDown((countDown) => countDown -1);
                }, 1000)
            } else {
                clearInterval(timerId);
            }
        }
        return () => {
            clearInterval(timerId);
        }

    }, [runTimer])

    React.useEffect(() => {
        if(countDown < 0 && runTimer) {
            setRunTimer(false);
            setCountDown(0);
        }

    }, [countDown, runTimer])

    const toggerTimer = () => {
        setRunTimer((t) => !t); 
    }

    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return (
        <>
            <section>
                <Container className="p-3">
                    <Card>
                        <Card.Title className="py-2 text-center">
                            <h3>Test Diagnostique</h3>
                            <h6 className="text-muted">Voyons à quel point vous vous en sortez !</h6>
                            <h6 className="text-muted">
                                <Link style={{color:'inherit'}} to='/DiagnosticsPage'>Take the test in english</Link>
                            </h6>
                        </Card.Title>

                        <Card.Header>
                            <Row className="px-3">
                                <Col>
                                    <i class="bi bi-clock"></i> Minuteur: {minutes} : {seconds}
                                </Col>

                                <Col className="py-2">
                                    {/* <ProgressBar now={50} /> */}
                                </Col>

                                <Col className="float-end">
                                    <Button className="float-end w-50" variant={runTimer ? "danger" : "primary"} onClick={toggerTimer}>
                                            {runTimer ? "Arrêt" : "Début"}
                                        </Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Text>
                            <QuestionList/>
                            <div className="text-center py-4">
                                <Button className="text-center w-25" variant="success" onClick={()=>{setModalShow(true); results()}}>Soumettre</Button>

                                <CenteredModal show={modalShow} onHide={() => setModalShow(false)}></CenteredModal>
                            </div>
                        </Card.Text>
                    </Card>
                </Container>
            </section>
        </>
    )
    
}

function DiagnositcsPageFR() {
    return (
        <>
            <NavigationBarSecondaryFR></NavigationBarSecondaryFR>
            <DiagnosticsTest></DiagnosticsTest>
            <FooterDarkFR></FooterDarkFR>
        </>
    )
}

export default DiagnositcsPageFR;