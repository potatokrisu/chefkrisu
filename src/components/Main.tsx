import React, { useState } from 'react';

import Nav from './Nav';
import Home from './Home';
import About from './About';

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
			{recipe ? (
				<div>Recipes</div>
			) : (
				<>
					{page === 'home' && <Home setRecipe={setRecipe} />}
					{page === 'about' && <About />}
					{page === 'recipes' && <div>Recipes</div>}
				</>
			)}
		</div>
	);
}
