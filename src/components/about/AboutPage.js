import React from 'react';
//import DataHendelse from './example'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}
addProducts(5);


class AboutPage extends React.Component {


  render(){
     return (
      <div>
        <p>About TODO</p>
        </div>
    );
  }
}
export default AboutPage;
