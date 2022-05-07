import { useDispatch } from 'react-redux'

import TasksKezikService from 'shared/api/tasks'
import { fetchTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'
import HistoryKezikService from 'shared/api/history'

const TaskDelete = ({ taskId, userId, history }) => {
	const dispatch = useDispatch()

	const onDelete = async () => {
		HistoryKezikService.addInHistory(history, taskId, userId)
		await TasksKezikService.deleteTask(taskId)
		dispatch(fetchTasks())
	}

	return <button onClick={onDelete} className={styles.TaskDelete}>Удалить</button>
}

export default TaskDelete