import React, { Component } from 'react';

class Example extends Component {
  async componentDidMount() {
    const response = await fetch('/api/test');
    const data = await response.json();
    console.log(data); // eslint-disable-line no-console
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-header">Example Component</div>
            <div className="card-body">I am an example component!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
