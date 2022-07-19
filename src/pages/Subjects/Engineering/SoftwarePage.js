import { Col, Container, Row } from "react-bootstrap";
import FooterDark from "../../../components/footerdark";
import NavigationSecondary from "../../../components/navigationSecondary";
import { softwareSubjectList } from "../../../data/softwareSubjectList";
import Spacing from "../../../utils/Spacing";
import Heading from "../components/heading";
import SubSubject from "../components/subSubjects";

function SubjectList() {
    const grid = [[], [], []];

    softwareSubjectList.forEach((element, key) => {
        const comp = (
            <SubSubject props={element} />
        )

        const colNumber = key % 3;
        grid[colNumber].push(comp)
    })

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col> {grid[0]} </Col>
                        <Col> {grid[1]} </Col>
                        <Col> {grid[2]} </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

function SoftwarePage() {

    const data = {
        color : "#dc565d",
        font : "white",
        subject : "Software Engineering",
        about : "Software engineering is a systematic and disciplined approach to developing software. It applies both computer science and engineering principles and practices to the creation, operation, and maintenance of software systems.",
    }

    return (
        <>
            <NavigationSecondary></NavigationSecondary>
            <Heading data={data}></Heading>

            <Spacing props={"p-2"}></Spacing>
            <SubjectList></SubjectList>
            <Spacing props={"p-2"}></Spacing>
            
            <FooterDark></FooterDark>
        </>
    )
}

export default SoftwarePage;