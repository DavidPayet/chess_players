import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import './ConnectionPage.scss';

const ConnectionPage = () => {
  return (
    <div className="ConnectionPage">
      <Container className="connectionPage">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">>
            <h1>Welcome to Chess Payers data</h1>
            <Button className="homePage-link" href="/chess-masters">Start</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConnectionPage;