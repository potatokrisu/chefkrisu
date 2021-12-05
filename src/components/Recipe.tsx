import React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import recipes from '../recipes.json';

export default function Recipe() {
	const recipeId = new URLSearchParams(window.location.search).get('recipe')!;
	const recipe = recipes[recipeId as keyof typeof recipes];

	return (
		<div style={{ padding: '4rem 8%', width: '84%', minHeight: '100%' }}>
			<Card style={{ padding: '4rem', paddingBottom: '1rem', marginBottom: '2rem' }}>
				<CardMedia
					component="img"
					image={(i => (i.startsWith('http') ? i : process.env.PUBLIC_URL + i))(
						recipe.header.image
					)}
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
			<div
				style={{
					width: 'calc(70% - 1rem)',
					display: 'inline-block',
					padding: '1rem',
					paddingLeft: 0,
				}}>
				{recipe.cards.map(
					(
						{
							title,
							steps,
							image,
							caption,
						}: { title: string; steps: string[]; image?: string; caption?: string },
						i
					) => (
						<Card key={i} style={{ marginBottom: '1rem' }}>
							{image && <CardMedia component="img" image={image} alt={`${title} picture here`} />}
							<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
								<Typography variant="h5">{title}</Typography>
								{steps.map((step, j) => (
									<Typography key={j} style={{ marginTop: '0.25rem' }}>
										{step}
									</Typography>
								))}
								{caption && <Typography>{caption}</Typography>}
							</CardContent>
						</Card>
					)
				)}
			</div>
			<div
				style={{
					width: 'calc(30% - 1rem)',
					display: 'inline-block',
					position: 'sticky',
					top: 0,
					padding: '1rem',
					paddingRight: 0,
					verticalAlign: 'top',
				}}>
				<Card>
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'INGREDIENTS'}</Typography>
						{recipe.ingredients.list.map((i, j) =>
							i ? <Typography key={j}>{i}</Typography> : <br key={j} />
						)}
						{recipe.ingredients.caption && <Typography>{recipe.ingredients.caption}</Typography>}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
