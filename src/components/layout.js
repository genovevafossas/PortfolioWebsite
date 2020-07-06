import React from 'react';
import Header from './header';
import Helmet from './helmet';
import Body from './body';
import '../styles/components.scss';

export default function Layout () {
	return(
		<div>
			<Helmet/>
			<Header/>
			<Body/>
		</div>
	);
}
