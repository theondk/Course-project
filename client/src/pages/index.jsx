import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import OfficesPage from 'pages/OfficesPage'
import SingleOfficePage from 'pages/SingleOfficePage'
import { routes } from 'shared/configs/routes'
import SignIn from 'pages/AuthPage/SignIn'
import SignUp from 'pages/AuthPage/SignUp'
import { authSelector } from 'shared/store/slices/authSlice/selectors'
import HistoryPage from 'pages/HistoryPage'
import UsersPage from 'pages/UsersPage'
import RecoverPassword from 'pages/AuthPage/RecoverPassword'

const Pages = () => {
	const { isAuth, role } = useSelector(authSelector)
	const navigate = useNavigate()
	useEffect(() => {
		navigate(routes.LOGIN)
	}, [])

	return (
		<Routes>
			{!isAuth ?
				<>
					<Route path={routes.LOGIN} element={<SignIn/>}/>
					<Route path={routes.REGISTER} element={<SignUp/>}/>
					<Route path={routes.RECOVER} element={<RecoverPassword/>} />
				</>
				:
				<>
					<Route path={routes.OFFICES} element={<OfficesPage/>}/>
					<Route path={routes.OFFICE} element={<SingleOfficePage/>}/>
					{role === 'Администратор' &&
						<>
							<Route path={routes.USERS} element={<UsersPage />} />
							<Route path={routes.HISTORY} element={<HistoryPage />} />
						</>
					}
				</>
			}
		</Routes>
	)
}

export default Pages