import { configureStore } from '@reduxjs/toolkit';
import heroesSlice from './heroesSlice';

export default configureStore({
	reducer: { heroesSlice },
});
