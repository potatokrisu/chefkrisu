import React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import recipes from '../recipes.json';

export default function Recipe() {
	const recipeId = new URLSearchParams(window.location.search).get('recipe')!;
	const recipe = recipes[recipeId as keyof typeof recipes];

	return (
		<div style={{ padding: '4rem', width: 'calc(100% - 8rem)', minHeight: '100%' }}>
			<Card style={{ padding: '4rem', paddingBottom: '1rem', marginBottom: '2rem' }}>
				<CardMedia
					component="img"
					image={recipe.header.image}
					alt={recipeId}
					style={{ height: '32rem' }}
				/>
				<CardContent>
					<Typography variant="h4" style={{ padding: '1rem' }}>
						{recipe.header.title}
					</Typography>
					<div style={{ padding: '0.5rem' }}>
						{recipe.header.captions.map((caption, i) => (
							<Typography key={i} variant="h6" style={{ padding: '0.5rem' }}>
								{caption}
							</Typography>
						))}
					</div>
				</CardContent>
			</Card>
			<div style={{ width: 'calc(70% - 2rem)', display: 'inline-block', padding: '1rem' }}>
				<Card style={{ marginBottom: '1rem' }}>
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'DIRECTIONS'}</Typography>
						{recipe.directions.list.map((d, i) => (
							<Typography key={i}>{d}</Typography>
						))}
						{recipe.directions.caption && <Typography>{recipe.directions.caption}</Typography>}
					</CardContent>
				</Card>
				{recipe.steps.map((step, i) => (
					<Card style={{ marginBottom: '1rem' }}>
						{step.image && (
							<CardMedia component="img" image={step.image} alt={`Step ${i} picture here`} />
						)}
						<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
							<Typography variant="h5">{`STEP ${i}`}</Typography>
							<Typography>{step.caption}</Typography>
						</CardContent>
					</Card>
				))}
			</div>
			<div
				style={{
					width: 'calc(30% - 2rem)',
					display: 'inline-block',
					position: 'sticky',
					top: 0,
					padding: '1rem',
					verticalAlign: 'top',
				}}>
				<Card>
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'INGREDIENTS'}</Typography>
						{recipe.ingredients.list.map((i, j) => (
							<Typography key={j}>{i}</Typography>
						))}
						{recipe.ingredients.caption && <Typography>{recipe.ingredients.caption}</Typography>}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
