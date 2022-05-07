import { useField } from 'formik'
import { Select, MenuItem, InputLabel } from '@mui/material'

const SelectField = ({ label, list, ...props }) => {
	const [field] = useField(props)
	
	return (
		<>
			<InputLabel id="demo-simple-select-label">{label}</InputLabel>
			<Select
				sx={{borderRadius: '8px', width: '200px'}}
				labelId="demo-simple-select-label"
				{...props}
				{...field}
			>
				{list.map(({ id, name, city, username }) => {
					return <MenuItem key={id} value={id}>{name ? name : city ? city : username}</MenuItem>
				})}
			</Select>
		</>
	)
}

export default SelectField