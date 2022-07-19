import { Container, ListGroup} from "react-bootstrap";
import YouTube from "react-youtube";
import FooterDark from "../../../../components/footerdark";
import NavigationSecondary from "../../../../components/navigationSecondary";
import Heading from "../../components/heading";
import Spacing from "../../../../utils/Spacing";

function LectureList (props) {

    console.log(props)

    const lectures = props.data.map((lecture) => 
        <ListGroup.Item key={lecture.id}>
            <h3>
                {lecture[0]}
            </h3>
            
            <Container className="text-center">
                <YouTube videoId={lecture[1]} />
            </Container>
            
            <Container className="px-2">
                <p className="py-2">
                    {lecture[2]}
                </p>
            </Container>
            
        </ListGroup.Item>
    )

    return (
        <>
            <ListGroup variant="flush">
                <Container>
                        <ListGroup>{lectures}</ListGroup>
                </Container>
            </ListGroup>
        </>
    )
}

function AlgosNDataPage() {

    const data = {
        color : "#00adb8",
        font : "white",
        subject : "Data Structures and Algorithms",
        about : "This is an introduction to mathematical modeling of computational problems, as well as common algorithms, algorithmic paradigms, and data structures used to solve these problems. It emphasizes the relationship between algorithms and programming and introduces basic performance measures and analysis techniques for these problems.",
        
    }

    const lectures = [["Algorithms and Computation", "ZA-tUyM_y7s", "The goal of this introductions to algorithms class is to teach you to solve computation problems and communicate that your solutions are correct and efficient. Models of computation, data structures, and algorithms are introduced."], ["Data Structures and Dynamic Arrays", "CHhwJjR0mZA", "Data structures are ways to store data with algorithms that support operations on the data. These collection of sorted operations are interfaces. This class goes over two main interfaces: sequence and set."], ["Sets and Sorting", "oS9aPzUNG-s", "Stored sets sorted by key allows for faster searching. This lecture covers how to construct a sorted array efficiently and the types of sorts."]];

    return (
        <>
            <NavigationSecondary></NavigationSecondary>        
            
            <Heading data={data}></Heading>
            <Spacing props={'py-2'}></Spacing>
            <LectureList data={lectures}></LectureList>
            <Spacing props={'py-2'}></Spacing>

            <FooterDark></FooterDark>
        </>
    )
}

export default AlgosNDataPage;