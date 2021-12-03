import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import data from '../data.json';

export interface HomeProps {
	setRecipe: (recipe: string) => void;
}

const Home: React.FC<HomeProps> = ({ setRecipe }) => {
	const topCard = data.home.cards[0];
	const bottomCards = data.home.cards.slice(1);
	return (
		<div style={{ width: 'calc(100% - 16em)', height: 'calc(100% - 16em)', padding: '8rem' }}>
			<Card>
				<CardActionArea
					style={{ display: 'flex', alignItems: 'stretch' }}
					onClick={() => setRecipe(topCard.id)}>
					<CardMedia
						component="img"
						image={topCard.image}
						alt={topCard.id}
						style={{ height: '20rem', width: '30rem' }}
					/>
					<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
						<Typography variant="h4">{topCard.title}</Typography>
						<Typography>{topCard.description}</Typography>
						<i>
							<Typography style={{ marginTop: '0.5rem' }}>{topCard.date}</Typography>
						</i>
					</CardContent>
				</CardActionArea>
			</Card>
			<div
				style={{
					margin: '4em 0',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					gridGap: '4rem',
				}}>
				{bottomCards.map((card, i) => (
					<Card key={i} style={{ display: 'inline-flex', flexDirection: 'column' }}>
						<CardActionArea onClick={() => setRecipe(card.id)}>
							<CardMedia
								component="img"
								image={card.image}
								alt={card.id}
								style={{ height: '20rem' }}
							/>
							<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1, height: '100%' }}>
								<Typography variant="h4">{card.title}</Typography>
								<Typography>{card.description}</Typography>
								<i>
									<Typography style={{ marginTop: '0.5rem' }}>{card.date}</Typography>
								</i>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Home;
