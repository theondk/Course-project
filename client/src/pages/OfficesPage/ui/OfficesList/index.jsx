import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchOffices, fetchByFilter } from 'shared/store/slices/officesSlice'
import { pagesSelector } from 'shared/store/slices/pagesSlice/selectors'
import { officesSelector } from 'shared/store/slices/officesSlice/selectors'
import { countrySelector } from 'shared/store/slices/countrySlice/selectors'

import styles from './styles.module.scss'

const OfficesList = () => {
	const { offices } = useSelector(officesSelector)
	const { activePage, limit } = useSelector(pagesSelector)
	const { selectedCountry } = useSelector(countrySelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchOffices([activePage - 1, limit]))
	}, [activePage])

	useEffect(() => {
		if (selectedCountry !== 0) {
			dispatch(fetchByFilter())
		} else {
			dispatch(fetchOffices([activePage - 1, limit]))
		}
	}, [selectedCountry])

	const officesList = offices.length !== 0 && <View selectedCountry={selectedCountry} offices={offices}/>

	return (
		<>
			{officesList}
		</>
	)
}

const View = ({offices, selectedCountry}) => {
	const cards = offices.map(({ id, city, country: { id: countryId }}) => {
		if (selectedCountry === countryId || selectedCountry === 0) {
			return (
				<Link tabIndex="0" to={`/offices/${id}`} key={id} className={styles.TerritoriesList__card}>
					<p>город: {city}</p>
				</Link>
			)
		}
	})


	return (
		<div className={styles.TerritoriesList__wrapper}>
			{cards}
		</div>
	)
}

export default OfficesList