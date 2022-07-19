import { Container } from "react-bootstrap";

function Heading(props) {
    return(
        <>
            <section style={{backgroundColor : props.data.color}}>
                <Container className="py-4" style={{color : props.data.font}}>
                    <h1>{props.data.subject}</h1>
                    <div className="py-3"></div>
                    <p>{props.data.about}</p>
                </Container>
            </section>
        </>
    )
}

export default Heading;