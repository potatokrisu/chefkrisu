import React, { useState } from 'react';

import Nav from './Nav';
import Home from './Home';

export default function Main() {
	const [page, _setPage] = useState('home');
	const [recipe, setRecipe] = useState('');

	const setPage = (page: string) => (_setPage(page), setRecipe(''));

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#FAF8DE',
			}}>
			<Nav setPage={setPage} />
			<div style={{ padding: '8em' }}>
				{recipe ? (
					<div>Recipes</div>
				) : (
					<>
						{page === 'home' && <Home setRecipe={setRecipe} />}
						{page === 'about' && <div>About</div>}
						{page === 'recipes' && <div>Recipes</div>}
					</>
				)}
			</div>
		</div>
	);
}
