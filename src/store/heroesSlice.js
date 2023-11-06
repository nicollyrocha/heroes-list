import { createSlice } from '@reduxjs/toolkit';
import api from '../services/api';

export const getHeroes = () => async (dispatch, getState) => {
	try {
		const response = await api.get();
		dispatch(setHeroesArray(response.data));
	} catch (error) {
	} finally {
	}
};

export const heroesSlice = createSlice({
	name: 'heroes',
	initialState: {
		heroes: [],
		heroesSelected: [],
	},
	reducers: {
		setHeroesArray: (state, action) => {
			state.heroes = action.payload;
		},
	},
});

export const { setHeroesArray } = heroesSlice.actions;

export default heroesSlice.reducer;
