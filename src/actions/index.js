import constants from '../constants';


// send action to reducers

export default {

	testReceived: (data) => {

		console.log('call action here, then send it to reducers');
		
		// type is mandatory
		return {
			type: constants.TEST,
			data: data
		}
	},


	venuesReceived: (data) => {

		console.log('call action here, then send it to reducers');
		
		// type is mandatory
		return {
			type: constants.VENUES_RECEIVED,
			data: data
		}
	},

	
}