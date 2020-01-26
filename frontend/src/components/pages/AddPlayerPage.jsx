import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import SideBar from '../SideBar';

import './AddPlayerPage.scss';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      name: '',
      elo: '',
      nationality: '',
      date_of_birth: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { photo, name, elo, nationality, date_of_birth } = this.state;
    const data = {
      photo: photo,
      name: name,
      elo: elo,
      nationality: nationality,
      date_of_birth: date_of_birth,
    };

    fetch("http://localhost:4000/addplayer", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("This player has been successfully added")
        }
      });
  };


  render() {
    return (
      <div className="AddPlayerPage">
        <SideBar />
        <Container className="addPlayerPage">
          <h1>Add a player</h1>
          <Row>
            <Col xl="1" lg="1" md="1" sm="1" xs="1" />
            <Col xl="10" lg="10" md="10" sm="10" xs="10">
              <Form className="addPlayerForm" onSubmit={this.handleSubmit}>

                <FormGroup className="items">
                  <Input type="text" name="photo" id="photo" placeholder=" Photo url" value={this.state.photo} onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="items">
                  <Input type="text" name="name" id="name" placeholder=" Name" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="items">
                  <Input type="text" name="elo" id="elo" placeholder=" Elo" value={this.state.elo} onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="items">
                  <Input type="text" name="date_of_birth" id="date_of_birth" placeholder=" Date of birth (YYYY-MM-DD)" value={this.state.date_of_birth} onChange={this.handleChange} />
                </FormGroup>
                
                <FormGroup className="items">
                  <Input nationality="text" name="nationality" id="nationality" placeholder=" Nationality" value={this.state.nationality} onChange={this.handleChange} />
                </FormGroup>
                <Row>
                  <Col className="buttonAdd">
                    <Button type="submit" className="submit-btn">Add this player</Button>{' '}
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col xl="1" lg="1" md="1" sm="1" xs="1" />
          </Row>

        </Container>
      </div>
    );
  }
}

export default AddPlayer;