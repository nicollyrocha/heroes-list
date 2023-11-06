import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const FilterByName = ({
	onSearchByKeyPress,
	handleChangeSearch,
	search,
}) => {
	return (
		<OutlinedInput
			value={search}
			onChange={handleChangeSearch}
			onKeyDown={onSearchByKeyPress}
			id='outlined-adornment-weight'
			endAdornment={
				<InputAdornment color='white' position='end'>
					<SearchIcon className='text-white' />
				</InputAdornment>
			}
			aria-describedby='outlined-weight-helper-text'
			inputProps={{
				'aria-label': 'weight',
			}}
			className='border-gray-500 border border-solid w-96 flex self-end text-white'
		/>
	);
};
