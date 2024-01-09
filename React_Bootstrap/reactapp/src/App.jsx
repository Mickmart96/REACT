import {Row,Container} from 'react-bootstrap';
import JumboTron from './JumboTron';
import Navv from './Nav';
import Footer from './Footer';
import Lista from './Lista'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {



  return (
    <>
      <Navv></Navv>
      <Container>
        <Row>
          
          <JumboTron />

        </Row>
      </Container>
<Container>
<Row>
<Lista></Lista>
</Row>
</Container>
      <Footer />


    </>
  )
}

export default App
