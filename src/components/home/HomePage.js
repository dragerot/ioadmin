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

  componentDidMount() {
    fetch(`http://62.122.255.244:8080/ehelse/melding/hentalleasc`,{
      mode: 'no-cors'
    }).then(result=> {
      console.log('***********result************************');
      console.log(result);
      if(result.Response){
        console.log('*********body **************************');
        this.setState(
          {
            items: result.json()
          }
        );
      }else {
        console.log('*********json null**************************');
        console.log("Ikke funnet noe");
        this.setState(
          {
            items: products
          }
        );
      }


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
