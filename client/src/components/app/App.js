import AppRoutes from './AppRoutes/AppRoutes'
import NavBar from '../shared/NavBar'

import './styles/main.scss'
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<NavBar/>
			<AppRoutes/>
		</BrowserRouter>
	);
}

export default App;