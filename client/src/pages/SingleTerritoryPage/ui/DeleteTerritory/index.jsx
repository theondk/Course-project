import { useNavigate } from 'react-router-dom'

import KezikServices from 'shared/api'

import styles from './styles.module.scss'

const DeleteTerritory = ({id}) => {
	const navigation = useNavigate()

	const onDelete = async () => {
		await KezikServices.deleteTerritory(id)
		navigation('/territories')
	}

	return (
		<>
			<button onClick={onDelete} className={styles.TerritoryDelete__delete}>Удалить территорию</button>
		</>
	)
}

export default DeleteTerritory