import TerritoriesList from './ui/TerritoriesList'
import TerritoryAddForm from './ui/TerritoryAddForm'
import Pagination from 'shared/ui/Pagination'

import styles from './styles.module.scss'

const TerritoriesPage = () => {
	return (
		<section className={styles.TerritoriesPage}>
			<div className="container">
				<TerritoriesList/>
				<TerritoryAddForm/>
			</div>
			<Pagination/>
		</section>
	)
}

export default TerritoriesPage