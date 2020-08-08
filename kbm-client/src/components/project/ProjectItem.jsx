import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div className='container'>
        <div className='card card-body bg-secondary mb-3 rounded-0'>
          <div className='row'>
            <div className='col-2'>
              <span className='mx-auto'>REACT</span>
            </div>
            <div className='col-lg-6 col-md-4 col-8'>
              <h3>Spring / React Project</h3>
              <p>Kanban Board Manager to organize personal projects</p>
            </div>
            <div className='col-md-4 d-none d-lg-block'>
              <ul className='list-group'>
                <a href='#'>
                  <li className='list-group-item board'>
                    <span className='fa fa-flag-checkered pr-1 text-primary' />
                    <span className='text-primary'>Project Board</span>
                  </li>
                </a>
                <a href='#'>
                  <li className='list-group-item update'>
                    <span className='fa fa-edit pr-1 text-info' />
                    <span className='text-info'>Update Info</span>
                  </li>
                </a>
                <a href=''>
                  <li className='list-group-item delete'>
                    <span className='fa fa-minus-circle pr-1 text-danger' />
                    <span className='text-danger'>Delete Project</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
