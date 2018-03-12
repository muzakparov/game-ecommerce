import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from './store'

import App from './components/App'
import AppContainer from './containers/AppContainer'

import productsArr from './data'

const app = document.getElementById('app');


const ReduxedApp = ()=>(
	<div>
		<Provider store={store}>
			<AppContainer productsArr={productsArr}/>
		</Provider>
	</div>
)


ReactDOM.render((
	<ReduxedApp />
), app);
