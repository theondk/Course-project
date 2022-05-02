import { useDispatch } from 'react-redux'

import TasksKezikService from 'shared/api/tasks'
import { fetchTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'
import HistoryKezikService from 'shared/api/history'

const TaskDelete = ({ id, history }) => {
	const dispatch = useDispatch()

	const onDelete = async () => {
		HistoryKezikService.addInHistory(history)
		await TasksKezikService.deleteTask(id)
		dispatch(fetchTasks())
	}

	return <button onClick={onDelete} className={styles.TaskDelete}>Удалить</button>
}

export default TaskDelete