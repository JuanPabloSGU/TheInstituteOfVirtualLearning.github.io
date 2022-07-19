import FooterDark from "../../../components/footerdark";
import NavigationSecondary from "../../../components/navigationSecondary";
import Spacing from "../../../utils/Spacing";
import Heading from "../components/heading";
import { Container, Row, Col } from 'react-bootstrap';
import { physicsSubjectList } from "../../../data/physicsSubjectList";
import SubSubject from "../components/subSubjects";

function SubjectList() {
    const grid = [[], [], []];

    physicsSubjectList.forEach((element, key) => {
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

function PhysicsPage() {

    const data = {
        color : "#369c63",
        font : "white",
        subject : "Physics",
        about : "Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.",
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

export default PhysicsPage;