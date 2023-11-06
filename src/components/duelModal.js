import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export const DuelModal = ({
	heroesSelected,
	setOpen,
	open,
	setHeroesSelected,
}) => {
	const pwrStatsHero1 =
		heroesSelected[0].powerstats.combat +
		heroesSelected[0].powerstats.durability +
		heroesSelected[0].powerstats.intelligence +
		heroesSelected[0].powerstats.power +
		heroesSelected[0].powerstats.speed +
		heroesSelected[0].powerstats.strength;
	const pwrStatsHero2 =
		heroesSelected[1].powerstats.combat +
		heroesSelected[1].powerstats.durability +
		heroesSelected[1].powerstats.intelligence +
		heroesSelected[1].powerstats.power +
		heroesSelected[1].powerstats.speed +
		heroesSelected[1].powerstats.strength;

	const handleClose = () => {
		setHeroesSelected([]);
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby='alert-dialog-slide-description'
			maxWidth='md'
			fullWidth
		>
			<Box fullWidth className='bg-zinc-800'>
				<DialogTitle
					fullWidth
					sx={{
						display: 'flex',
						flexDirection: 'row',
						m: 'auto',
						width: 'fit-content',
					}}
					className='flex gap-3 justify-self-center text-white'
				>
					<Box className='text-green-600'>WINNER: </Box>
					{pwrStatsHero1 > pwrStatsHero2
						? heroesSelected[0].biography.fullName
						: heroesSelected[1].biography.fullName}
				</DialogTitle>
				<DialogContent className='flex text-white'>
					<Box className='flex justify-between w-full'>
						<Box className='flex gap-3 items-center'>
							<Box className='flex flex-col gap-4 items-center'>
								<Box>{pwrStatsHero1}</Box>
								<img
									className='rounded-md shadow-black shadow-lg'
									src={heroesSelected[0].images.sm}
									alt={heroesSelected[0].biography.fullName}
								/>
								<Box>{heroesSelected[0].biography.fullName}</Box>
							</Box>
							<Box className='flex flex-col gap-2 text-center'>
								<Box>{heroesSelected[0].powerstats.combat}</Box>
								<Box>{heroesSelected[0].powerstats.durability}</Box>
								<Box>{heroesSelected[0].powerstats.intelligence}</Box>
								<Box>{heroesSelected[0].powerstats.power}</Box>
								<Box>{heroesSelected[0].powerstats.speed}</Box>
								<Box>{heroesSelected[0].powerstats.strength}</Box>
							</Box>
						</Box>
						<Box className='flex flex-col gap-2 justify-center text-center font-semibold'>
							<Box>Combat</Box>
							<Box>Durability</Box>
							<Box>Intelligence</Box>
							<Box>Power</Box>
							<Box>Speed</Box>
							<Box>Strength</Box>
						</Box>
						<Box>
							<Box className='flex gap-3 items-center'>
								<Box className='flex flex-col gap-2 text-center'>
									<Box>{heroesSelected[1].powerstats.combat}</Box>
									<Box>{heroesSelected[1].powerstats.durability}</Box>
									<Box>{heroesSelected[1].powerstats.intelligence}</Box>
									<Box>{heroesSelected[1].powerstats.power}</Box>
									<Box>{heroesSelected[1].powerstats.speed}</Box>
									<Box>{heroesSelected[1].powerstats.strength}</Box>
								</Box>
								<Box className='flex flex-col gap-4 items-center'>
									<Box>{pwrStatsHero2}</Box>
									<img
										className='rounded-md shadow-black shadow-lg'
										src={heroesSelected[1].images.sm}
										alt={heroesSelected[1].biography.fullName}
									/>
									<Box>{heroesSelected[1].biography.fullName}</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};
