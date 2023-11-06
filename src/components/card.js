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
			className={`bg-slate-200 bg-opacity-20 text-white opacity-80 rounded-2xl cursor-pointer shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] border border-solid ${
				heroesSelected.length > 0 &&
				(heroesSelected[0]?.id === hero?.id || heroesSelected[1]?.id === hero?.id)
					? 'border-blue-800 border-2 border-opacity-100'
					: 'border-white border-opacity-30'
			}`}
		>
			<Box className='flex justify-center mt-5'>
				<img
					src={img}
					className='h-56 w-56 flex object-contain'
					alt={`img-${name}`}
				/>
			</Box>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
				<Typography variant='body2' className='text-white' color='text.secondary'>
					{pwrStats}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'></Button>
			</CardActions>
		</Card>
	);
};
