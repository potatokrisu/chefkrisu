import React, { useState } from 'react';

import Nav from './Nav';

export default function Main() {
	const [page, setPage] = useState('home');

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: '#FAF8DE',
			}}>
			<Nav setPage={setPage} />
			<div style={{ marginTop: '4em' }}>
				{page === 'home' && <div>Home</div>}
				{page === 'about' && <div>About</div>}
				{page === 'recipes' && <div>Recipes</div>}
			</div>
		</div>
	);
}
