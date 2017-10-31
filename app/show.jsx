import React from 'react';
import { Component } from 'react';
import { Table, Col } from 'react-bootstrap';

export default class ShowNames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
          {
              "id": 1,
              "first_name": "test",
              "last_name": "testy"
          }
      ]
    };
  }

  componentWillMount() {
    //this is where i will get the data
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
