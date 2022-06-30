import './App.css';
import Navigation from './components/navigation';
import Maincard from './components/maincard';
import Banner from './components/banner';
import Subjects from './components/subjects';
import Testimonals from './components/testimonals';
import Tutors from './components/tutors';
import BookTutor from './components/booktutor';
import FAQ from './components/faq';
import Messages from './components/messages';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Maincard></Maincard>
      <Banner></Banner>
      <Subjects></Subjects>
      <Testimonals></Testimonals>
      <Tutors></Tutors>
      <BookTutor></BookTutor>
      <FAQ></FAQ>
      <Messages></Messages>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
