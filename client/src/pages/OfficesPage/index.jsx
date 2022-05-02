import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OfficesList from './ui/OfficesList'
import OfficeAddForm from './ui/OfficeAddForm'
import CountryAddForm from './ui/CountryAddForm'
import Pagination from 'shared/ui/Pagination'
import { authSelector } from 'shared/store/slices/authSlice/selectors'
import { countrySelector } from 'shared/store/slices/countrySlice/selectors'
import { fetchCountries, changeSelectedCountry } from 'shared/store/slices/countrySlice'

import styles from './styles.module.scss'

const OfficePage = () => {
	const { role } = useSelector(authSelector)
	const { countries, selectedCountry } = useSelector(countrySelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCountries())
	}, [])

	const tabs = countries.length !== 0 && <View countries={countries}/>

	return (
		<section className={styles.OfficesPage}>
			<div className="container">
				<div className={styles.OfficesPage__wrapper}>
					{tabs}
					{role === 'Администратор' && <CountryAddForm/>}
				</div>
				<OfficesList/>
				{role === 'Администратор' && <OfficeAddForm/>}
			</div>
			{ selectedCountry === 0 && <Pagination /> }
		</section>
	)
}

const View = ({ countries }) => {
	const dispatch = useDispatch()
	const tabs = countries.map(({name, id}) => {
		return <Tab onClick={() => dispatch(changeSelectedCountry(id))} key={id} label={name}/>
	})
	
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Tabs
			sx={{borderRadius: '8px', width: '250px', backgroundColor: 'white', margin: '0 auto'}}
			value={value}
			onChange={handleChange}
			variant="scrollable"
			scrollButtons="auto"
			aria-label="scrollable force tabs example"
		>
			<Tab onClick={() => dispatch(changeSelectedCountry(0))} label="Все" />
			{tabs}
		</Tabs>
	)
}

export default OfficePage