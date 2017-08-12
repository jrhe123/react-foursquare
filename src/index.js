import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Store
import store from './stores';
import {Provider} from 'react-redux';



// Component
import {App} from './components/layout'


const app = (
	<Provider store={store.initialize()}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
