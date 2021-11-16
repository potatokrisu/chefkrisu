import React from 'react';

import { Typography } from '@mui/material';

import data from '../data.json';

export interface AboutProps {
	dataKey: keyof typeof data & ('about' | 'references');
}

const About: React.FC<AboutProps> = ({ dataKey }) => {
	return (
		<div style={{ width: '100%', height: '100vh' }}>
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
					src={data[dataKey].image}
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
					{dataKey[0].toUpperCase() + dataKey.slice(1)}
				</Typography>
				{data[dataKey].paragraphs.map((text, i) => (
					<Typography key={i} variant="h6" style={{ padding: '1rem 0' }}>
						{text}
					</Typography>
				))}
			</div>
		</div>
	);
};

export default About;
