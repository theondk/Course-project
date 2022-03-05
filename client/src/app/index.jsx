import { BrowserRouter } from 'react-router-dom'

import AppRoutes from 'app/AppRoutes'
import NavBar from 'shared/ui/NavBar'

import './styles/main.scss'

function App() {
	return (
		<BrowserRouter>
			<NavBar/>
			<AppRoutes/>
		</BrowserRouter>
	)
}

export default App