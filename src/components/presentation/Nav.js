import React, { Component } from 'react';

// Redux
import {connect} from 'react-redux';
import actions from '../../actions';

import superagent from 'superagent';



class Nav extends Component{

	constructor(props){

		super(props);
		this.state = {
			zipCode: '',
			query: 'food'
		}
	}

	updateZipCode(e){
		this.setState({
			zipCode: e.target.value
		})
	}

	changeFilter(e){
		this.setState({
			query: e.target.value
		})
	}


	searchVenues(event){

		event.preventDefault();
		
		const url = "https://api.foursquare.com/v2/venues/search";
	    const params = {
	      v: '20140806',
	      near: this.state.zipCode,
	      query: this.state.query,
	      client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
	      client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
	    };

		superagent
			.get(url)
			.query(params)
			.send('Accept', 'application/json')
			.end((err,response) => {

				if(err){
					console.log(err);
					return;
				}

				const venues = response.body.response.venues;
				this.props.venuesReceived(venues);
			})
	}


	render(){

		return (
			<div>
				<nav className="navbar navbar-inverse">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">Project name</a>
			        </div>
			        <div id="navbar" className="navbar-collapse collapse">
			          <form className="navbar-form navbar-right">
			            <div className="form-group">
			    			<input onChange={this.updateZipCode.bind(this)} className="form-control" type="text" placeholder="Zip Code" />
			            	<select id="filter" onChange={this.changeFilter.bind(this)} style={{marginLeft:6}} className="form-control">
			            		<option value="food">Food</option>
			            		<option value="coffee">Coffee</option>
			            		<option value="clothing">Clothing</option>
			            		<option value="music">Music</option>
			            		<option value="entertainment">Entertainment</option>
			            		<option value="fitness">Fitness</option>
			            		<option value="game">Game</option>
			            	</select>
			            </div>
						<button style={{marginLeft:12}} onClick={this.searchVenues.bind(this)} className="btn btn-success">Search</button>
			          </form>
			        </div>
			      </div>
			    </nav>				
			</div>
		)
	}
}

// Connect with Props Methods
const stateToProps = (state) => {

  return {
    // only one !!!
    // 
    // return as this.props.venue
    // contains all state in venue
    // venue: state.venue,
    // matched to store.js reducer name (state.xxx  <---)
    //

    venues: state.venue
  }
}
const dispatchToProps = (dispatch) => {

  // connected to actions
  return {
    //
    // Multiple methos:
    //
    // Test dispatch to action
    //searchTest: (test) => dispatch(actions.testReceived(test)),

    venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
  }
}

export default connect(stateToProps, dispatchToProps)(Nav);