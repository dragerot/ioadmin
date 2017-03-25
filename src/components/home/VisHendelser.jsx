import React from 'react';
//import ItemLister from './ItemLister';
//import Fetch from 'react-fetch';

class VisHendelser extends React.Component {
 //url="http://62.122.255.244:8080/ehelse/melding/hentalleasc";
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch(`http://62.122.255.244:8080/ehelse/melding/hentalleasc`,{
      method: 'get'
    }).then(result=> {
        this.setState(
          {
            items: result.json()
          }
          );
      }).catch( function(error){
        alert("Feiler");
    });
  }

  render() {return( <div />);

  }
}

export default VisHendelser;
