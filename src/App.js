import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Dropdown from "react-bootstrap/Dropdown";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './utils/api';
import Helper from "./utils/helper";
import SmallTag from "./components/SmallTag";
import OccurrenceCountriesList from "./components/OccurrenceCountriesList";

function App() {
  const [latest, setLatest] =  useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [occurrenceCountries, setOccurrenceCountries] = useState([]);
  const [searchCountry, setSeachCounty] = useState(null);

  useEffect(() => {
    axios.all([
        axios.get(API.allConvidOccurrence),
        axios.get(API.allCountriesWithCovidOccurrence)
      ])
      .then(([ occurrenceResponse, occurrenceCountriesResponse ]) => {
        setLatest(occurrenceResponse.data);
        setOccurrenceCountries(occurrenceCountriesResponse.data);
      })
      .catch(error => {
        setErrorMessage(error.reponse.data);
      })
  }, []);

  return (
    <div>
      {errorMessage && (<Container className="text-center">
        <Alert variant="danger" className="mt-5" onClose={() => setErrorMessage(null)} dismissible>
          {errorMessage}
        </Alert>
      </Container>)}
      <h2 className="text-center mt-5">Covid-19 Live stat</h2>
      <CardDeck>
        <Card 
          bg="warning"
          text="white"
          className="text-center m-5"
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              {Helper.convertToCommaSeparated(latest.cases)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <SmallTag lastUpdated={latest.updated}/>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="white"
          className="text-center m-5"
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {Helper.convertToCommaSeparated(latest.deaths)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <SmallTag lastUpdated={latest.updated}/>
          </Card.Footer>
        </Card>
        <Card
          bg="info"
          text="white"
          className="text-center m-5"
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {Helper.convertToCommaSeparated(latest.recovered)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <SmallTag lastUpdated={latest.updated}/>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Dropdown.Divider className="mx-5 mb-5" />
      <Container>
        <Form>
          <Form.Group as={Row} controlId="formSearchCountry">
            <Col sm="4">
              <Form.Control type="text" name="searchCountry" onChange={(evt) => { evt.preventDefault(); setSeachCounty(evt.target.value) }} placeholder="Country to search" />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <OccurrenceCountriesList occurrenceCountries={occurrenceCountries} searchCountry={searchCountry} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
