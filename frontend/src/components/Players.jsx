import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './Players.scss';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDelete: false,
      modalEdit: false
    };
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  handleClickDelete() {
    fetch(`http://localhost:4000/players/${this.props.id}`, {
      method: 'DELETE',
      header: {
        Accept: 'applicationCache.json',
        'Content-Type': 'application.json',
      },
    }).then(() => void window.location.reload());
  }

  toggleDelete() {
    this.setState({
      modalDelete: !this.state.modalDelete
    });
  }

  render() {
    return (
      <div className="Players">
        <Container className="players">
          <Row>
            <Col xl="2" lg="2" md="4" sm="12" xs="12">
              <img className="photo" src={this.props.photo} alt="echiquier" />
            </Col>
            <Col className="item" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>Elo</p>
              <p>{this.props.elo}</p>
            </Col>
            <Col className="item" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{this.props.name}</p>
            </Col>
            <Col className="item" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{this.props.date_of_birth}</p>
            </Col>
            <Col className="item" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{this.props.nationality}</p>
            </Col>
            <Col className="item" xl="2" lg="2" md="4" sm="12" xs="12">
              <Row>

                <Col className="deleteBtn">
                  <Button onClick={this.toggleDelete}>&#10005;</Button>{' '}
                </Col>
                <Modal isOpen={this.state.modalDelete} toggleDelete={this.toggleDelete} className={this.props.className}>
                  <ModalHeader toggleDelete={this.toggleDelete}>Warning !</ModalHeader>
                  <ModalBody>
                    Do you realy want to delete this player ?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.handleClickDelete}>Confirm</Button>{' '}
                    <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Players;