import React from 'react';
import ItemLister from './ItemLister';

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
  { //  mode: 'no-cors',
    //fetch(`http://pro.toregard.net/ehelse/melding/hentalleasc`,
    fetch(`http://services.groupkt.com/country/get/all`,
      {

        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }
    ).then(
      // response => {
      //   if (response.ok) {
      //
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
      function(response)
      {
        console.log('*************');
        // console.log(response);
        // console.log('*************111111');
        var item =response.json().then(
             function(data){
            }
        );
        console.log('*************2');
        item.then(
          function(d){
            console.log('ddddd');
            console.log(d);
          }
        );
        console.log(item);

      }
  ).catch(function(err) {
     console.log('*************Feiler');
     console.log(err);
      // Error :(
    });
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
