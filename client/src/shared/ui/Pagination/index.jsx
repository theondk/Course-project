import { Pagination } from '@mui/material'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPages, changeActivePage } from 'slices/pagesSlice'
import { pagesSelector } from 'slices/pagesSlice/selectors'

const PaginationComponent = () => {
	const { pagesCount, activePage } = useSelector(pagesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPages())
	}, [])

	const onChangeActivePage = (e, value) => {
		dispatch(changeActivePage(value))
	}

	return (
		<>
			<Pagination 
				sx={{position: 'absolute', transform: 'translateX(50%)', right: '50%', bottom: '20px', backgroundColor: 'rgba(4, 209, 213, .9)', padding: '10px', borderRadius: '20px'}} 
				count={pagesCount} 
				color="secondary"
				onChange={onChangeActivePage}
				page={activePage}
			/>  
		</>
	)
}

export default PaginationComponent