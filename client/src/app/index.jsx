import { BrowserRouter } from 'react-router-dom'

import Pages from 'pages'
import NavBar from 'shared/ui/NavBar'

import './styles/main.scss'

function App() {
	return (
		<BrowserRouter>
			<NavBar/>
			<Pages/>
		</BrowserRouter>
	)
}

export default App