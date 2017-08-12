import React, { Component } from 'react';
import './App.css';


// Redux
import {connect} from 'react-redux';
import actions from '../../actions';


// Components
import { Nav } from '../presentation';
import { Venues } from '../containers';


class App extends Component {

  

  render() {
    return (
      <div className="App">

        <Nav />
        <Venues />

      </div>
    );
  }
}

// Connect with Props Methods
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

    venue: state.venue
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

    selectVenue: (venue) => dispatch(actions.selectVenue(venue))
  }
}

export default connect(stateToProps, dispatchToProps) (App);
