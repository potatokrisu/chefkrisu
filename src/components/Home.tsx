import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export interface HomeProps {
	setRecipe: (recipe: string) => void;
}

const Home: React.FC<HomeProps> = ({ setRecipe }) => {
	return (
		<div style={{ width: 'calc(100% - 16em)', height: 'calc(100% - 16em)', padding: '8rem' }}>
			<Card>
				<CardActionArea
					style={{ display: 'flex', alignItems: 'stretch' }}
					onClick={() => setRecipe('macaron')}>
					<CardMedia
						component="img"
						image="https://www.nationaldayarchives.com/wp-content/uploads/2019/11/macarons-7-min-1024x683.jpg"
						alt="macarons"
						style={{ height: '20rem', width: '30rem' }}
					/>
					<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
						<Typography variant="h4">{'Lingonberry Macarons'}</Typography>
						<Typography>{'Description here'}</Typography>
						<Typography>{'October 26th, 2021'}</Typography>
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
				<Card style={{ display: 'inline-flex', flexDirection: 'column' }}>
					<CardActionArea onClick={() => setRecipe('icebox')}>
						<CardMedia
							component="img"
							image="https://www.fifteenspatulas.com/wp-content/uploads/2011/12/checkerboardcookies6-large.jpg"
							alt="icebox"
							style={{ height: '20rem' }}
						/>
						<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
							<Typography variant="h4">{'Checkered Icebox Cookies'}</Typography>
							<Typography>{'Description here'}</Typography>
							<Typography>{'October 26th, 2021'}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card style={{ display: 'inline-flex', flexDirection: 'column' }}>
					<CardActionArea onClick={() => setRecipe('icebox')}>
						<CardMedia
							component="img"
							image="https://i.ytimg.com/vi/v7vKePq8bF4/maxresdefault.jpg"
							alt="eggyolk"
							style={{ height: '20rem' }}
						/>
						<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
							<Typography variant="h4">{'Korean Egg Yolk Cookies'}</Typography>
							<Typography>{'Description here'}</Typography>
							<Typography>{'October 26th, 2021'}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card style={{ display: 'inline-flex', flexDirection: 'column' }}>
					<CardActionArea onClick={() => setRecipe('pavlova')}>
						<CardMedia
							component="img"
							image="https://dinnersdishesanddesserts.com/wp-content/uploads/2018/07/Mini-Pavlovas-square-735x578.jpg"
							alt="pavlova"
							style={{ height: '20rem' }}
						/>
						<CardContent style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
							<Typography variant="h4">{'Mini Fruit Pavlova'}</Typography>
							<Typography>{'Description here'}</Typography>
							<Typography>{'October 26th, 2021'}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		</div>
	);
};

export default Home;
