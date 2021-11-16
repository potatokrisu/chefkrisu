import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Recipe from './Recipe';

export default function Main() {
	const [page, _setPage] = useState('home');
	const [recipe, _setRecipe] = useState('');

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		params.has('page') && _setPage(params.get('page')!);
		params.has('recipe') && _setPage(params.get('recipe')!);
	}, []);

	const setUrl = (entries: { [key: string]: string }) => {
		const url = new URL(window.location.href);
		Object.entries(entries).forEach(([k, v]) =>
			v ? url.searchParams.set(k, v) : url.searchParams.has(k) && url.searchParams.delete(k)
		);
		window.history.pushState({}, '', url);
	};

	const setRecipe = (recipe: string) => {
		_setRecipe(recipe);
		setUrl({ recipe, page: 'recipes' });
	};

	const setPage = (page: string) => {
		_setPage(page);
		_setRecipe('');
		setUrl({ page, recipe: '' });
	};

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#FAF8DE',
			}}>
			<Nav setPage={setPage} />
			{recipe ? (
				<Recipe />
			) : (
				<>
					{page === 'home' && <Home setRecipe={setRecipe} />}
					{page === 'about' && <About dataKey="about" />}
					{page === 'references' && <About dataKey="references" />}
					{page === 'recipes' && <div>Recipes</div>}
				</>
			)}
		</div>
	);
}
