import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './screens/home';

function App() {
	return (
		<div className='App py-5 flex justify-center bg-black'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
