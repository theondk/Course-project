import { useField } from 'formik'
import classnames from 'classnames/bind'

import styles from './styles.module.scss'

const TextInput = ({label, ...props}) => {
	const cn = classnames.bind(styles)
	const [field, meta] = useField(props)

	return (
		<>
			<label className={styles.TextInput__label} htmlFor={props.name}>{label}:</label>
			<input type="text" {...props} {...field} className={(meta.touched && meta.error) ? cn(styles.TextInput__input, 'error') : styles.TextInput__input}/>
		</>
	)
}

export default TextInput