import { useNavigate } from 'react-router-dom'

import KezikServices from 'shared/api'

import styles from './styles.module.scss'

const DeleteOffice = ({id}) => {
	const navigation = useNavigate()

	const onDelete = async () => {
		await KezikServices.deleteOffice(id)
		navigation('/offices')
	}

	return (
		<>
			<button onClick={onDelete} className={styles.TerritoryDelete__delete}>Удалить офис</button>
		</>
	)
}

export default DeleteOffice