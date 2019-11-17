import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import { GlobalStyledReset } from './styled';

const Root = () => (
	<React.Fragment>
		<GlobalStyledReset />
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</React.Fragment>
);

export default Root;
