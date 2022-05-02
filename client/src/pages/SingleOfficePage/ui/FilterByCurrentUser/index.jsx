import { useSelector, useDispatch } from 'react-redux'

import { authSelector } from 'shared/store/slices/authSlice/selectors'
import TasksKezikService from 'shared/api/tasks'
import { changeTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'

const FilterByCurrentUser = () => {
	const { currentUserId } = useSelector(authSelector)
	const dispatch = useDispatch()

	const filterTasksByCurrentUser = () => {
		TasksKezikService.getUserTasks(currentUserId)
			.then((data) => dispatch(changeTasks(data)))
			.catch(() => console.log('error'))
	}

	return <button className={styles.FilterByCurrentUser} onClick={filterTasksByCurrentUser}>Только мои задачи</button>
}

export default FilterByCurrentUser