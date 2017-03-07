import React, { Component } from 'react';
import axios from 'axios';
import { Well, Button } from 'react-bootstrap';

import DataModal from './dataModal.jsx';

export default class Data extends Component {

  constructor(props) {
    super(props);

    this.getDetails = this.getDetails.bind(this);

    this.state = {
      projects: [],
      projectSelected: false,
      selectedProjectId: '',
      projectDetails: [],
      projectData: [{int_value: 'test'}],
      dataModalOpen: false
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
        projects: resp.data.results
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

  getData (streamSlug) {
    axios.get('https://iotile.cloud/api/v1/stream/' + streamSlug + '/data/', {
      headers: {
        Authorization: 'JWT ' + window.sessionStorage.accessToken
      }
    })
    .then((resp) => {
      this.setState({
        projectData: resp.data.results,
        dataModalOpen: true
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render () {
    return (
      <div className="container data_box">
      <h2>Select A Project: </h2>
      {this.state.projects.map((project) => {
          return (
            <div key={project.id}>
              <Well>
                <h3 className="col-md-6">Project Name: {project.name}</h3>
                <h3 className="col-md-6">Project Org: {project.org}</h3>
                <Button bsStyle="primary" onClick={() => this.getDetails(project.id)}>Choose this Project</Button>
              </Well>

              {this.state.projectSelected && this.state.selectedProjectId === project.id ? 
                this.state.projectDetails.map((detail) => {
                  return (
                    <div>
                      <h3>Click on a Data Stream to Select It:</h3>
                      <div onClick={() => this.getData(detail.slug)} className="project_detail" key={detail.id}>
                        <h3>Project Detail Name: {detail.project}</h3>
                        <h4>Project Device: {detail.device}</h4>
                      </div>
                    </div>
                  )
                })
              : null}

            </div>
          );
        })
      }

      <DataModal 
        isOpen={this.state.dataModalOpen}
        closeModal={() => {this.setState({dataModalOpen: false})}}
        projectData={this.state.projectData}
      />

      </div>
    )
  }
}