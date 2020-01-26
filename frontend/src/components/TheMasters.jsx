import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Players from './Players';

import './TheMasters.scss';

class TheMasters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/allplayers")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          players: data,
        });
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  render() { 
    return ( 
      <div className="TheMasters">
        <Container className="theMasters">
          {this.state.players.map(player => <Players key={player.id} id={player.id} photo={player.photo} name={player.name} elo={player.elo} nationality={player.nationality} date_of_birth={player.date_of_birth} />)}
        </Container>
      </div>
     );
  }
}
 
export default TheMasters;