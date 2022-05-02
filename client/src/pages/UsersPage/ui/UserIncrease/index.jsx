import { useDispatch } from 'react-redux'

import UsersKezikService from 'shared/api/user'
import { fetchUsers } from 'shared/store/slices/usersSlice'

import styles from './styles.module.scss'

const UserIncrease = ({id}) => {
	const dispatch = useDispatch()

	const onInc = async () => {
		await UsersKezikService.userRoleHandler(id, 'inc')
		dispatch(fetchUsers())
	}

	return <button onClick={onInc} className={styles.UserIncrease}>Повысить права доступа</button>
}

export default UserIncrease