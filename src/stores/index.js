import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


// Reducers
import {venueReducer} from '../reducers';


var store;

export default {

	initialize: () => {

		const reducers = combineReducers({

			// "venue" ==> has to match to component stateToProps method
			venue : venueReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {

		return store
	}

}