import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActions } from '@mui/material';

export const MediaCard = ({
	img,
	name,
	pwrStats,
	addHeroesToArray,
	hero,
	heroesSelected,
}) => {
	return (
		<Card
			onClick={() => addHeroesToArray(hero)}
			sx={{ width: 345 }}
			className={`bg-gradient-to-r from-gray-800 opacity-80 rounded-2xl cursor-pointer shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] border border-solid ${
				heroesSelected.length > 0 &&
				(heroesSelected[0]?.id === hero?.id || heroesSelected[1]?.id === hero?.id)
					? 'border-blue-500 border-2 border-opacity-100'
					: 'border-white border-opacity-100'
			}`}
		>
			<Box className='flex justify-center mt-5'>
				<img
					src={img}
					className='h-56 w-42 flex object-contain rounded-md shadow-black shadow-lg'
					alt={`img-${name}`}
				/>
			</Box>
			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					sx={{ textShadow: '#DCDCDC 1px 0 3px' }}
					component='div'
				>
					{name}
				</Typography>
				<Typography variant='body2'>{pwrStats}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'></Button>
			</CardActions>
		</Card>
	);
};
