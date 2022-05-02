import { useDispatch } from 'react-redux'

import UsersKezikService from 'shared/api/user'
import { fetchUsers } from 'shared/store/slices/usersSlice'

import styles from './styles.module.scss'

const UserDelete = ({id}) => {
	const dispatch = useDispatch()

	const onDel = async () => {
		await UsersKezikService.deleteUser(id)
		dispatch(fetchUsers())
	}

	return <button onClick={onDel} className={styles.UserDelete}>Удалить пользователя</button>
}

export default UserDelete