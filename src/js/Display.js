import React, { Component } from "react";
import ReactDOM 			from "react-dom";

class Display extends React.Component {

	constructor(props){
		super(props);
	}

	// Creates URL for repository name
	createURL(repoName,url){
		return(
			<a target='#' href={url}>{repoName}</a>
		)
	}

	// Returns an array of table rows with github repository names to be displayed
	createTableRow(){
console.log(this.props.repoData);
		/*let listData = this.props.repoData.map((row) => {
			return (<li key={row.id}>{row.name}</li>);
		});*/

		// Create table row. Go thru each row in the repo data and return a table row
		return this.props.repoData.map((row) => {
			return(
				<tr key={row.id}>
					<td key={row.html_url}>{this.createURL(row.name,row.html_url)}</td>
					<td key={row.html_url + row.created_at}>{row.created_at.substr(0,10)}</td>
					<td key={row.html_url + row.id}>{row.pushed_at.substr(0,10)}</td>
				</tr>
			);
		});
	}

	render(){

		let tableData = this.createTableRow();

	  	return (
		    <div id='displayComponent'>
		  	  {/*<ul>{listData}</ul>*/}

		  	  <table className='table'>
		  	  	<thead>
		  	  		<tr id='tableHeader' className="thead-dark">
		  	  			<th className='align-text-top'>Repository Name</th>
		  	  			<th className='align-text-top'>Created</th>
		  	  			<th className='align-text-top'>Last Push</th>
		  	  		</tr>
		  	  	</thead>
		  	  	<tbody>
		  	  		{tableData}
		  	  	</tbody>
		  	  </table>
		    </div>
		);
	}
};

export default Display;