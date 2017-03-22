import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      return (
        <div className="container-fluid">
         <Header/>
          {this.props.children}
        </div>
      );
  }
}

App.prototype = {
  children: PropTypes.object.isRequired
};

export default App;
