import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MediaCard } from '../components/card';
import { getHeroes } from '../store/heroesSlice';
import Box from '@mui/material/Box';
import { DuelModal } from '../components/duelModal';
import { FilterByName } from '../components/filterByName';
import { Button } from '@mui/material';

export const Home = () => {
	const heroesArray = useSelector((state) => state.heroesSlice.heroes);
	const [search, setSearch] = useState('');
	const filteredHeroes = heroesArray.filter((item) =>
		item.biography.fullName.toLowerCase().includes(search.toLowerCase())
	);
	const dispatch = useDispatch();
	const [heroesSelected, setHeroesSelected] = useState([]);
	const [open, setOpen] = useState(false);
	const [numberForSlice, setNumberForSlice] = useState(15);
	const dataForDisplay = filteredHeroes.slice(0, numberForSlice);

	const onSearchByKeyPress = (ev) => {
		if ([13].includes(ev.charCode || ev.which) && search.length > 0)
			setSearch(search);
	};

	const handleChangeSearch = (ev) => {
		setSearch(ev.target.value);
	};

	useEffect(() => {
		dispatch(getHeroes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addHeroesToArray = (hero) => {
		if (
			heroesSelected.length === 0 ||
			(heroesSelected.length === 1 && heroesSelected[0].id !== hero.id)
		) {
			setHeroesSelected((heroesSelected) => [...heroesSelected, hero]);
		} else if (
			heroesSelected.length > 0 &&
			(heroesSelected[0].id === hero.id || heroesSelected[1].id === hero.id)
		) {
			setHeroesSelected(heroesSelected.filter((item) => hero.id !== item.id));
		}
	};

	useEffect(() => {
		if (heroesSelected.length === 2) {
			setOpen(true);
		}
	}, [heroesSelected]);

	return (
		<>
			<Box className='flex flex-col gap-10 items-center w-full mx-5'>
				<Box className='flex justify-center gap-10 align-middle items-center w-full'>
					<FilterByName
						onSearchByKeyPress={onSearchByKeyPress}
						handleChangeSearch={handleChangeSearch}
						search={search}
						className='w-4/12'
					/>
				</Box>
				{heroesSelected.length === 2 && (
					<DuelModal
						heroesSelected={heroesSelected}
						setOpen={setOpen}
						open={open}
						setHeroesSelected={setHeroesSelected}
					/>
				)}
				<Box className='grid grid-cols-1 md:grid-cols-3 gap-5'>
					{dataForDisplay?.map((item, index) => {
						const pwrStats =
							item.powerstats.combat +
							item.powerstats.durability +
							item.powerstats.intelligence +
							item.powerstats.power +
							item.powerstats.speed +
							item.powerstats.strength;

						return (
							<MediaCard
								pwrStats={pwrStats}
								name={item.biography.fullName}
								img={item.images.md}
								addHeroesToArray={addHeroesToArray}
								hero={item}
								heroesSelected={heroesSelected}
								key={item.id}
							/>
						);
					})}
				</Box>
				<Box className='flex gap-5'>
					<Button
						variant='outlined'
						onClick={() => setNumberForSlice(numberForSlice + 3)}
					>
						Show more
					</Button>
					{numberForSlice > 15 ? (
						<Button
							variant='outlined'
							onClick={() => setNumberForSlice(numberForSlice - 3)}
						>
							Show less
						</Button>
					) : (
						<></>
					)}
				</Box>
			</Box>
		</>
	);
};
