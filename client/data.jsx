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
      this.setState({
        projectSelected: true,
        selectedProjectId: projectID,
        projectDetails: resp.data.results
      })
    })
  }


  render () {
    return (
      <div className="container">
      {this.state.projects.map((project) => {
          return (
            <div key={project.id}>
              <Well>
                <h2>Project Name: {project.name}</h2>
                <h3>Project Org: {project.org}</h3>
                <Button onClick={() => this.getDetails(project.id)}>Choose this Project</Button>
              </Well>

              {this.state.projectSelected && this.state.selectedProjectId === project.id ? 
                this.state.projectDetails.map((detail) => {
                  return (
                    <div className="project_detail" key={detail.id}>
                      <h3>Project Detail Name: {detail.project}</h3>
                      <h4>Project Device: {detail.device}</h4>
                    </div>
                  )
                })
              : null}

            </div>
          );
        })
      }
      </div>
    )
  }
}