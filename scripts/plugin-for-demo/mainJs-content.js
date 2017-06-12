const contents = 
`
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Link } from 'react-router-dom';
 
import configureStore from './demo/src/store/configureStore';

import Democomponent from './demo/src/App';

const store=configureStore();

render(
	
		<BrowserRouter>
		<div>
		<Route exact={true} path="/" render = {() => (
				<Provider store={store}>
					<Democomponent/>
				</Provider>
		)}/>
		<Route path="/:theme" render = {(props) => (
				<Provider store={store}>
					<Democomponent theme={props.match.url}/>
				</Provider>
		)}/>
		</div>
		</BrowserRouter>
	,
	document.getElementById('app-root')
	);`;

module.exports = contents;
