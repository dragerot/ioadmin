import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ItemLister extends React.Component {
/*
 <TableHeaderColumn dataField="id" isKey={true}>Id</TableHeaderColumn>
 <TableHeaderColumn dataField="dato">dato</TableHeaderColumn>
 <TableHeaderColumn dataField="mobilId">Mobil id</TableHeaderColumn>

 http://services.groupkt.com/country/get/all

 {
 "RestResponse" : {
 "messages" : [ "More webservices are available at http://www.groupkt.com/post/f2129b88/services.htm", "Total [249] records found." ],
 "result" : [ {
 "name" : "Afghanistan",
 "alpha2_code" : "AF",
 "alpha3_code" : "AFG"
 }, {
 "name" : "Åland Islands",
 "alpha2_code" : "AX",
 "alpha3_code" : "ALA"
 }
 ..
 */
  render(){
    console.log("********************HALLPO");
    console.log(this.props.items);
    return (


      <div >
        <p>List of IoT events</p>
        <BootstrapTable data={this.props.items}>
          <TableHeaderColumn dataField="id" isKey={true}>Id</TableHeaderColumn>
           <TableHeaderColumn dataField="messages">messages</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default ItemLister;
