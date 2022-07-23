import React from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Helper from "../utils/helper";
import SmallTag from "./SmallTag";

function OccurrenceCountryCard({ occurrenceCountry }) {
    const { 
        country, 
        countryInfo: {flag}, 
        cases, 
        population, 
        tests, 
        deaths, 
        recovered,
        critical,
        active,
        todayCases,
        todayDeaths,
        todayRecovered,
        updated,
    } = occurrenceCountry;

    return (
        <Col xl="3" lg="3" md="4" sm="6" xs="12">
          <Card
            bg="light"
            text="dark"
            className="text-center mb-5"
          >
            <Card.Img variant="top" src={flag} />
            <Card.Body>
              <Card.Title>{country}</Card.Title>
              <Card.Text>Population: {Helper.convertToCommaSeparated(population)}</Card.Text>
              <Card.Text>Tested: {Helper.convertToCommaSeparated(tests)}</Card.Text>
              <Card.Text>Cases: {Helper.convertToCommaSeparated(cases)}</Card.Text>
              <Card.Text>Deaths: {Helper.convertToCommaSeparated(deaths)}</Card.Text>
              <Card.Text>Recovered: {Helper.convertToCommaSeparated(recovered)}</Card.Text>
              <Card.Text>Crtitical: {Helper.convertToCommaSeparated(critical)}</Card.Text>
              <Card.Text>Active: {Helper.convertToCommaSeparated(active)}</Card.Text>
              <Card.Text>Today's Cases: {Helper.convertToCommaSeparated(todayCases)}</Card.Text>
              <Card.Text>Today's Deaths: {Helper.convertToCommaSeparated(todayDeaths)}</Card.Text>
              <Card.Text>Today's Recovered: {Helper.convertToCommaSeparated(todayRecovered)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <SmallTag lastUpdated={updated} />
            </Card.Footer>
          </Card>
        </Col>
    );
}

export default OccurrenceCountryCard;