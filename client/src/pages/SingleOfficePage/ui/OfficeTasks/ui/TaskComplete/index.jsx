import { useDispatch } from 'react-redux'

import TasksKezikService from 'shared/api/tasks'
import { fetchTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'
import HistoryKezikService from 'shared/api/history'

const TaskComplete = ({ id, history }) => {
	const dispatch = useDispatch()

	const onComplete = async () => {
		HistoryKezikService.addInHistory(history)
		await TasksKezikService.deleteTask(id)
		dispatch(fetchTasks())
	}

	return <button onClick={onComplete} className={styles.TaskComplete}>Завершить</button>
}

export default TaskComplete