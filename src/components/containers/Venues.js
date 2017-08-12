import React, { Component } from 'react';

// Redux
import {connect} from 'react-redux';
import actions from '../../actions';


class Venues extends Component{

	render(){

		// check the first time: null 
		// if else es6
		const venues = this.props.venues.venues || [];
		console.log('check: ',venues);

		return(
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<ul style={{listStyle:'none'}}>
						{
							venues.map((venue, i) => {
								return (
									<li key={venue.id}>
										<div style={{padding:12, marginBottom:12, backgroundColor:'#f4f4f4'}}>
											<h3>{venue.name}</h3>
											<span>{venue.location.crossStreet || '' +' '+venue.location.city}</span>
											<a href="https://github.com/jrhe123" style={{marginLeft:12}}>Info</a>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
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

export default connect(stateToProps, dispatchToProps)(Venues);