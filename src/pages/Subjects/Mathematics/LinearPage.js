import { Col, Container, Row } from "react-bootstrap";
import FooterDark from "../../../components/footerdark";
import NavigationSecondary from "../../../components/navigationSecondary";
import { linearSubjectList } from "../../../data/linearSubjectList";
import Spacing from "../../../utils/Spacing";
import Heading from "../components/heading";
import SubSubject from "../components/subSubjects";

function SubjectList() {
    const grid = [[], [], []];

    linearSubjectList.forEach((element, key) => {
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

function LinearPage() {

    const data = {
        color : "#9371b5",
        font : "white",
        subject : "Linear Algebra",
        about : "Linear algebra is central to almost all areas of mathematics. For instance, linear algebra is fundamental in modern presentations of geometry, including for defining basic objects such as lines, planes and rotations. Also, functional analysis, a branch of mathematical analysis, may be viewed as the application of linear algebra to spaces of functions.",
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

export default LinearPage;