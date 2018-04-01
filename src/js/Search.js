import React from 'react';

class Search extends React.Component {
	
	constructor(props){
		super(props);
	}

	// Handle change in text input
	handleChange(e){
		this.props.handleSearchText(e);
	}

	// Handle submit button click
	handleSubmit(){
		this.props.handleSubmit();
	}

	render(){
		return (
			<div id='searchComponent'>
				<div className="input-group">
				  <input className='form-control' value={this.props.repoName} onKeyUp={(e)=>this.handleChange(e)}
				  	placeholder="Enter GitHub Repo Name"></input>
				  <div className="input-group-append">
					<button type="button" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
				  </div>
				</div>
			</div>
		);
	}
}

export default Search;