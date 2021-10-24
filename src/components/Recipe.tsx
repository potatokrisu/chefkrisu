import React from 'react';

import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';

export default function Recipe() {
	return (
		<div style={{ padding: '4rem', width: 'calc(100% - 8rem)', minHeight: '100%' }}>
			<Card style={{ padding: '4rem', paddingBottom: '1rem', marginBottom: '2rem' }}>
				<CardMedia
					component="img"
					image="https://dinnersdishesanddesserts.com/wp-content/uploads/2018/07/Mini-Pavlovas-square-735x578.jpg"
					alt="macaron"
					style={{ height: '32rem' }}
				/>
				<CardContent>
					<Typography variant="h4" style={{ padding: '1rem' }}>
						{'Pavlova'}
					</Typography>
					<div style={{ padding: '0.5rem' }}>
						<Typography variant="h6" style={{ padding: '0.5rem' }}>
							{'Cuisine: French & Swedish | Difficult: Hard'}
						</Typography>
						<Typography variant="h6" style={{ padding: '0.5rem' }}>
							{'Servings: 17 | Prep time: 2 | Cook time: 4'}
						</Typography>
						<Typography variant="h6" style={{ padding: '0.5rem' }}>
							{'Description here'}
						</Typography>
					</div>
				</CardContent>
			</Card>
			<div style={{ width: 'calc(70% - 2rem)', display: 'inline-block', padding: '1rem' }}>
				<Card style={{ marginBottom: '1rem' }}>
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'DIRECTIONS'}</Typography>
						<Typography>{'Step 1: nyeh'}</Typography>
						<Typography>{'Step 2: nyeh'}</Typography>
						<Typography>{'Step 3: nyeh'}</Typography>
					</CardContent>
				</Card>
				<Card style={{ marginBottom: '1rem' }}>
					<CardMedia component="img" image="" alt="Step 1 picture here" />
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'STEP 1'}</Typography>
						<Typography>{'Step 1: nyeh'}</Typography>
						<Typography>{'Step 2: nyeh'}</Typography>
						<Typography>{'Step 3: nyeh'}</Typography>
					</CardContent>
				</Card>
				<Card style={{ marginBottom: '1rem' }}>
					<CardMedia component="img" image="" alt="Step 2 picture here" />
					<CardContent style={{ textAlign: 'left', padding: '1rem' }}>
						<Typography variant="h5">{'STEP 2'}</Typography>
						<Typography>{'Step 1: nyeh'}</Typography>
						<Typography>{'Step 2: nyeh'}</Typography>
						<Typography>{'Step 3: nyeh'}</Typography>
					</CardContent>
				</Card>
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
						<Typography>{'Step 1: nyeh joos'}</Typography>
						<Typography>{'Step 2: nyeh powder'}</Typography>
						<Typography>{'Step 3: nyeh sauce'}</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
