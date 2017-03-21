import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>IoT Demo</h1>
        <p>List of events</p>
        <Link to="about" className="btn btn-info">About</Link>
      </div>
    );
  }
}
export default HomePage;
