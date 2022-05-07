import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchOffice } from 'shared/store/slices/officesSlice'
import DeleteOffice from './ui/DeleteOffice'
import OfficeUpdateForm from './ui/OfficeUpdateForm'
import { officesSelector } from 'shared/store/slices/officesSlice/selectors'
import { authSelector } from 'shared/store/slices/authSlice/selectors'
import { fetchUsers } from 'shared/store/slices/usersSlice'
import { usersSelector } from 'shared/store/slices/usersSlice/selectors'
import OfficeTasks from './ui/OfficeTasks'
import { routes } from 'shared/configs/routes'

import styles from './styles.module.scss'

const SingleOfficePage = () => {
	const { id } = useParams()
	const { office } = useSelector(officesSelector)
	const { users } = useSelector(usersSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchOffice(id))
		dispatch(fetchUsers())
	}, [])

	const content = Object.keys(office).length !== 0 && <View users={users} office={office}/>

	return (
		<section className={styles.SingleTerritoryPage}>
			<div className="container">
				<Link className="go-back-link" to={routes.OFFICES}>Назад</Link>
				{content}
				<OfficeTasks/>
			</div>
		</section>
	)
}

const View = ({office: {city, description, userId}, users}) => {
	const { id } = useParams()
	const { currentUserId, role } = useSelector(authSelector)
	console.log(users)

	return (
		<div className={styles.SingleTerritoryPage__item}>
			<p className={styles.SingleTerritoryPage__descr}>Город: {city}</p>
			<div className={styles.SingleTerritoryPage__employee}>
				<p className={styles.SingleTerritoryPage__descr}>Сотрудники этого офиса: </p>
				<div className={styles.SingleTerritoryPage__employee_list}>
					{users.filter(item => item.role !== 'Администратор').filter(item => item.office.id === Number(id)).map(item => {
						return <p key={item.id}>{item.username}: {item.role}</p>
					})}
				</div>
			</div>
			<div className={styles.SingleTerritoryPage__btns}>
				{currentUserId === userId || role === 'Администратор' &&
					<>
						<OfficeUpdateForm address={city} description={description} id={id}/>
						<DeleteOffice id={id}/>
					</>
				}
			</div>
		</div>
	)
}

export default SingleOfficePage