import React from 'react';
import ItemLister from './ItemLister';
import axios from 'axios';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push(
    {
      "id": id,
      "dato": "2017-03-18 51:2"+id,
      "mobilId": "9a5130196cf026cc"+id,
      "typeHendelse": "helpButton"
    }
    );
  }
}
addProducts(5);

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount()
  {
    var svar = [];
    fetch(`http://localhost:8080/ehelse/melding/hentalleasc`,
      {

        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }
    ).then(
     function(response)
      {
        console.log('****SJEKK RES*********');
        console.log(response);
         response.json().then(
              function(data)
             {
               svar.push(data);
             }
        );
      }
    ).catch(function(err) {
     console.log('*************Feiler');
     console.log(err);
      // Error :(
    });
    //this.setState({ items: svar });
    this.state.items=svar;
    }

  render(){
    return (
       <div >
       <p>List of IoT events</p>
         <ItemLister liste={this.state.items}/>
      </div>
    );
  }
}
export default HomePage;

//  mode: 'no-cors',
//http://localhost:8080/ehelse/melding/hentalleasc
// fetch(`http://toregard.net:8080/ehelse/melding/hentalleasc`,
// mode: 'no-cors',

// response => {
//   if (response.ok) {
//     console.log("OK");
//     response.json().then(json => {
//       this.setState(
//         {
//           items: response
//         });
//
//     });
//   }else {
//     console.log('*************IKKE OK');
//     console.log(response);
//   }
// }
