import React from 'react';

import { Typography } from '@mui/material';

export default function About() {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div
				style={{
					position: 'absolute',
					right: 0,
					backgroundColor: 'white',
					width: '24rem',
					height: '100%',
				}}
			/>
			<div style={{ position: 'absolute', right: '24rem', top: '20rem' }}>
				<img
					src="https://avatars.githubusercontent.com/u/29556650?v=4"
					alt="kris"
					style={{
						width: '16rem',
						height: '16rem',
						transform: 'translate(50%, -50%)',
						borderRadius: '50%',
					}}
				/>
			</div>
			<div style={{ padding: '4rem', textAlign: 'left', width: '60%' }}>
				<Typography variant="h4" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
					{'About'}
				</Typography>
				<Typography variant="h6" style={{ padding: '1rem 0' }}>
					{
						"Hi, I'm Kris! Thank you for stopping by :~) I'm a Master's student at UC San Diego and while my career is in engineering, I have a strong passion for baking and culinary arts. I've always loved desserts and sweets, and due to the pandemic, I found myself in the kitchen much more than ever before. As a result, I wanted to create this website to share some of my favorite recipes."
					}
				</Typography>
				<Typography variant="h6" style={{ padding: '1rem 0' }}>
					{
						" While I enjoy eating desserts, the one thing I've noticed about many of them is that they're extremely sweet. Of course, the easiest way to combat this is to add less sugar. However, this sometimes does not bode well for the final dessert. Macarons, for example, will not have their signature smooth top and ruffled feet if too little sugar was added. So, the recipes I've shared here have adjusted sugar quantities for those like me who enjoy sweets that aren't too sweet :~)"
					}
				</Typography>
			</div>
		</div>
	);
}
