import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ItemLister extends React.Component {

  render(){
    return (
      <div >
        <p>List of IoT events</p>
        <BootstrapTable data={ this.props.liste }>
          <TableHeaderColumn dataField='id' isKey={ true }>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='dato'>dato</TableHeaderColumn>
          <TableHeaderColumn dataField='mobilId'>Mobil id</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default ItemLister;
