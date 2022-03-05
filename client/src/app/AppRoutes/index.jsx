import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import TerritoriesPage from 'pages/TerritoriesPage'
import SingleTerritoryPage from 'pages/SingleTerritoryPage'
import { routes } from 'shared/configs/routes'
import SignIn from 'pages/AuthPage/SignIn'
import SignUp from 'pages/AuthPage/SignUp'
import { authSelector } from 'slices/authSlice/selectors'

const AppRoutes = () => {
	const { isAuth } = useSelector(authSelector)
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/login')
	}, [])
	return (
		<Routes>
			{!isAuth ?
				<>
					<Route path={routes.LOGIN} element={<SignIn/>}/>
					<Route path={routes.REGISTER} element={<SignUp/>}/>
				</>
				:
				<>
					<Route path={routes.TERRITORIES} element={<TerritoriesPage/>}/>
					<Route path={routes.TERRITORY} element={<SingleTerritoryPage/>}/>
				</>
			}
		</Routes>
	)
}

export default AppRoutes