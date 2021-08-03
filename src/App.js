import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Container, Row, Col} from 'react-bootstrap/'

function App() {
  return (
    <div className="App" className="container-fluid">
   
    <h1 className="text-center">hello</h1>
      <Button>hello</Button>
      
      <Container style={{border:'1px solid black'}}>
<div>
      <div className="text-center row">
        <Col>Hello</Col>
        <Col>No</Col>
        <Col>Yes</Col>
        <Col>Goodbye</Col>
      </div>
      <div className="text-center row">
        <Col className='col-7'>Hello</Col>
        <Col className='col-5'>No</Col>
      </div>
      </div>
    </Container>

    </div>
  );
}

export default App;
