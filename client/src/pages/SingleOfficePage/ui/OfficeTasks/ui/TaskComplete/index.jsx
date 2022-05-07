import { useDispatch } from 'react-redux'

import TasksKezikService from 'shared/api/tasks'
import { fetchTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'
import HistoryKezikService from 'shared/api/history'

const TaskComplete = ({ taskId, userId, history }) => {
	const dispatch = useDispatch()

	const onComplete = async () => {
		HistoryKezikService.addInHistory(history, taskId, userId)
		await TasksKezikService.deleteTask(taskId)
		dispatch(fetchTasks())
	}

	return <button onClick={onComplete} className={styles.TaskComplete}>Завершить</button>
}

export default TaskComplete