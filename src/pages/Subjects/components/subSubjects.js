import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SubSubject(props) {

    return (
        <>
           <Container>
                <div className="py-3">
                    <h4>{props.props.subject}</h4>
                    <p>{props.props.description}</p>
                    <div>
                        <Link to={props.props.link} className={props.props.linkDescription}>
                            <Button disabled={props.props.disabled}>View Subject</Button>
                        </Link>
                    </div>
                </div>
            </Container> 
        </>
    )
}

export default SubSubject;