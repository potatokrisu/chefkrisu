import React from 'react';

import { Link, Typography } from '@mui/material';

export interface NavProps {
	setPage: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ setPage }) => {
	return (
		<div style={{ position: 'fixed', top: 0, height: '4rem', width: '100%', zIndex: 1 }}>
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
					<Link
						variant="h5"
						underline="none"
						style={{
							display: 'inline-block',
							padding: '0 0.5rem',
							cursor: 'pointer',
						}}
						onClick={() => setPage('recipes')}>
						{'Recipes'}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
