import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { usersSelector } from 'shared/store/slices/usersSlice/selectors'
import { fetchUsers } from 'shared/store/slices/usersSlice'
import UserDelete from '../UserDelete'
import UserIncrease from '../UserIncrease'
import UserDecrease from '../UserDecrease'
import { officesSelector } from 'shared/store/slices/officesSlice/selectors'
import { fetchOffices } from 'shared/store/slices/officesSlice'
import UserActivate from '../UserActivate'

import styles from './styles.module.scss'

const UsersList = () => {
	const { users } = useSelector(usersSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchOffices())
	}, [])

	const usersList = users.length !== 0 && <View users={users} />

	return (
		<>
			{usersList}
		</>
	)
}

const View = ({ users }) => {
	const { offices } = useSelector(officesSelector)

	const content = users.map(({ id, username, role, status, officeId }) => {
		return (
			<div key={username} className={styles.UsersList__item}>
				<div>	
					<p>Имя пользователя: {username}</p>
					<p>Роль: {role}</p>
					{ role !== 'Администратор' &&
						<>
							<p>Статус: {status}</p>
							{ status === 'Активен' && <p>Офис: {offices[offices.findIndex(item => item.id === officeId)].city}</p> }
						</>
					}
				</div>
				<div className={styles.UsersList__btns}>
					{ role !== 'Администратор' && status === 'Активен' &&
						<>
							{ role !== 'Управляющий' && <UserIncrease id={id}/> }
							{ role !== 'Пользователь' && <UserDecrease id={id} /> }
							<UserDelete id={id} />
						</>
					}
					{ status === 'Ожидание активации' && <UserActivate id={id}/> }
				</div>
			</div>
		)
	})

	return (
		<div className={styles.UsersList}>
			{content}
		</div>
	)
}

export default UsersList