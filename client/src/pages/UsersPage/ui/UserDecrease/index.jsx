import { useDispatch } from 'react-redux'

import UsersKezikService from 'shared/api/user'
import { fetchUsers } from 'shared/store/slices/usersSlice'

import styles from './styles.module.scss'

const UserDecrease = ({id}) => {
	const dispatch = useDispatch()

	const onDecr = async () => {
		await UsersKezikService.userRoleHandler(id, 'dec')
		dispatch(fetchUsers())
	}

	return <button onClick={onDecr} className={styles.UserDecrease}>Понизить права доступа</button>
}

export default UserDecrease