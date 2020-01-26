import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TheMasters from '../TheMasters';
import SideBar from '../SideBar';

import './HomePage.scss';

const HomePage = () => {
  return ( 
    <div className="HomePage">
      <SideBar />
      <Container className="homePage">
        <h1>The Masters</h1>
        <br />
        <Row>
        <Col xl="1" lg="1" md="1" sm="1" xs="1" />
          <Col className="theMasterField" xl="10" lg="10" md="10" sm="10" xs="10">
          <TheMasters />
        </Col>
        <Col xl="1" lg="1" md="1" sm="1" xs="1" />
        </Row>
      </Container>
    </div>
   );
}
 
export default HomePage;