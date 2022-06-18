import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CardDeck>
        <Card 
          bg="info"
          text="white"
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              1,000,000
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          bg="warning"
          text="white"
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              1,000
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          bg="secondary"
          text="white"
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              3,900
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default App;
