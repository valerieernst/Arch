import React, { Component } from 'react';
import axios from 'axios';
import { Well, Button } from 'react-bootstrap';

export default class Data extends Component {

  constructor(props) {
    super(props);

    this.getDetails = this.getDetails.bind(this);

    this.state = {
      projects: []
    }
  }

  componentWillMount () {
    axios.get('https://iotile.cloud/api/v1/project/', {
      headers: {
        Authorization: 'JWT ' + window.sessionStorage.accessToken
      }
    })
    .then((resp) => {
      this.setState({
        projects: resp.data.results,
        projectSelected: false,
        selectedProjectId: '',
        projectDetails: []
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getDetails (projectID) {
    axios.get('https://iotile.cloud/api/v1/stream/?project=' + projectID, {
      headers: {
        Authorization: 'JWT ' + window.sessionStorage.accessToken
      }
    })
    .then((resp) => {
      console.log(resp);
      this.setState({
        projectSelected: true,
        selectedProjectId: projectID,
        projectDetails: resp.data.results
      })
    })
  }

  render () {
    return (
      <div>
      {this.state.projects.map((project) => {
          return (
            <Well key={project.name}>
              <h2>{project.name}</h2>
              <h3>{project.org}</h3>
              <Button onClick={() => this.getDetails(project.id)}>Choose this Project</Button>
              {this.state.projectSelected && this.state.selectedProjectId === project.id ? 
                <div>
                This thing
                </div>
            : null}
            </Well>
          )
        })
      }
      </div>
    )
  }
}