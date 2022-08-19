import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Nav from './layout/nav';
import Login from './pages/login';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
