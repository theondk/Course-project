import { useField } from 'formik';

import './textInput.scss'

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <>
            <label className="form__label" htmlFor={props.name}>{label}:</label>
            <input {...props} {...field} className="form__input"/>
            {(meta.touched && meta.error) && <p className="form__error">{meta.error}</p>}
        </>
    );
};

export default TextInput;