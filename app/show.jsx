import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Table, Col } from 'react-bootstrap';



export default class ShowNames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentWillMount() {
    // todo proxy requests from the frontend server so don't have to hardcode host
    axios.get('/api/users')
    .then(({ data }) => {
      this.setState({
        people: data
      });
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  render() {
    return(
      <Col sm={10}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person) => {
              return <tr key={person.id}>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
              </tr>
            })
          }
          </tbody>
        </Table>
      </Col>
    );
  }
}
