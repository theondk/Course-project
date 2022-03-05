import { useField } from 'formik'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const CheckboxInput = ({label, ...props}) => {
	const cn = classNames.bind(styles)
	const [field, meta] = useField(props)

	return (
		<div className={styles.CheckboxInput__wrapper}>
			<input {...props} {...field} type="checkbox" className={meta.touched && meta.error ? 
				cn(styles.CheckboxInput__checkbox, 'error') 
				: 
				styles.CheckboxInput__checkbox}
			/>
			<label htmlFor={props.name} className={styles.CheckboxInput__label}>{label}</label>
		</div>
	)
}

export default CheckboxInput