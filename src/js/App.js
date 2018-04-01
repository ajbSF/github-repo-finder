import React, { Component } from "react";
import ReactDOM 			from "react-dom";
import Axios 				from 'axios';

import sampleData 			from './sampleData';
import Search 				from './Search';
import Display 				from './Display';


class App extends React.Component {

	constructor(){
		super();
		this.state = {repoName:'', repoData: []};
	}

	// Sets state based on text input from the Search Component
	handleSearchText(e){
		this.setState({repoName: e.target.value});

		// If enter is pressed, treat it as submit button click
		if(e.keyCode === 13){
			this.handleSubmit(this.state.repoName);
		}
	}

	// Handles submit button click
	handleSubmit(searchText){
		const link = 'https://api.github.com/users/' + this.state.repoName + '/repos';
		let context = this;

		Axios.get(link)
		  .then(function (response) {
		    context.setState({repoData: [...response.data]});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	render(){
	  	return (
		    <div>
		    	<div id='mainTitle'>GitHub Repository Finder</div>
			    <Search 	searchText={this.state.repoName} 
			      			handleSearchText={(searchText)=>this.handleSearchText(searchText)}
			      			handleSubmit={(searchText)=>this.handleSubmit(searchText)} />
			    <Display  repoData={this.state.repoData}/>
		    </div>
		)
	}
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));