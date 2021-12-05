import React, { useState } from 'react';

import { Link, Typography } from '@mui/material';

import data from '../data.json';

export interface NavProps {
	setRecipe: (recipe: string) => void;
	setPage: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ setRecipe, setPage }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				height: '4rem',
				width: '100%',
				zIndex: 1,
				background: 'linear-gradient(rgba(2,0,36,0.35), rgba(224,224,224,0.125))',
			}}>
			<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
				<div style={{ display: 'inline-block' }}>
					<Typography variant="h4">{'CHEFKRISU'}</Typography>
				</div>
				<div style={{ display: 'inline-block' }}>
					<Link
						variant="h5"
						underline="none"
						style={{
							display: 'inline-block',
							padding: '0 0.5rem',
							cursor: 'pointer',
						}}
						onClick={() => setPage('home')}>
						{'Home'}
					</Link>
					<Link
						variant="h5"
						underline="none"
						style={{
							display: 'inline-block',
							padding: '0 0.5rem',
							cursor: 'pointer',
						}}
						onClick={() => setPage('about')}>
						{'About'}
					</Link>
					<span
						style={{
							position: 'relative',
							display: 'inline-block',
							padding: '0 0.5rem',
							cursor: 'pointer',
						}}
						onMouseEnter={() => setHover(true)}
						// onMouseLeave={() => setHover(false)}
					>
						<Link
							variant="h5"
							underline="none"
							// onClick={() => setPage('recipes')}
							onClick={() => setHover(true)}>
							{'Recipes'}
						</Link>
						{hover && (
							<ul
								style={{
									position: 'absolute',
									listStyleType: 'none',
									padding: '0.25rem 0.5rem',
									backgroundColor: 'rgba(224,224,224,0.5)',
								}}
								onMouseLeave={() => setHover(false)}>
								{data.home.cards.map(recipe => (
									<li
										key={recipe.id}
										style={{ margin: '0.5rem 0', color: 'navy' }}
										onClick={() => setRecipe(recipe.id)}>
										{recipe.title}
									</li>
								))}
							</ul>
						)}
					</span>
					<Link
						variant="h5"
						underline="none"
						style={{
							display: 'inline-block',
							padding: '0 0.5rem',
							cursor: 'pointer',
						}}
						onClick={() => setPage('references')}>
						{'References'}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
