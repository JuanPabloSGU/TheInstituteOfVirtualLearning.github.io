import { Container, Row, Col } from "react-bootstrap";
import FooterDark from "../../../components/footerdark";
import NavigationSecondary from "../../../components/navigationSecondary";
import { csSubjectList } from "../../../data/csSubjectList";
import Spacing from "../../../utils/Spacing";
import Heading from "../components/heading";
import SubSubject from "../components/subSubjects";

function SubjectList () {

    const grid = [[], [], []];

    csSubjectList.forEach((element, key) => {
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

function CSPage() {

    const data = {
        color : "#00adb8",
        font : "white",
        subject : "Computer Science",
        about : "Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, information theory and automation) to practical disciplines (including the design and implementation of hardware and software)",
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

export default CSPage;