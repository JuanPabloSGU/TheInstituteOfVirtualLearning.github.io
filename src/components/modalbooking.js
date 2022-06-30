import React from 'react';
import {Modal, Button, Row, Col, Container} from 'react-bootstrap';

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thanks, {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <h6 className='text-center'>Your Session is on the : <br></br>{props.data.date}</h6>

        <p className='pt-3'>
          <Container>
              <Row>
                <Col>
                  <p>Details about your Session is below : </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>Your Selected Subject :</h6>
                  <p className='pt-0'>{props.data.subject}</p>
                </Col>

                <Col>
                  <h6>Your Type of Session :</h6>
                  <p className='pt-0'>{props.data.sessionType}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>Your Message :</h6>
                  <i className='pt-0'>{props.data.info}</i>
                  <br></br>
                </Col>
              </Row>

              <Row>
                <Col>
                  <br></br>
                  <h6 className='text-justify'>We will be sending a confirmation email at : {props.data.email}, shortly.</h6>
                </Col>
              </Row>
              
          </Container>
        </p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalBooking(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setModalShow(true)}>Complete Booking</Button>

            <CenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
}

export default ModalBooking;