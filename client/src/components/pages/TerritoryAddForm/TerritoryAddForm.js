import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '../../shared/TextInput/TextInput'
import KezikServices from '../../shared/api';

import './territoryAddForm.scss'

const TerritoryAddForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                address: ''
            }}
            onSubmit={async (values) => {await KezikServices.addTerritory(values)}}
            validationSchema={Yup.object({
                name: Yup.string()
                         .required()
                         .min(3, 'Не менее 3 символов')
                         .max(10, 'Не более 10 символов'),
                address: Yup.string()
                            .required()
                            .min(10, 'Не менее 10 символов')
                            .max(30, 'Не более 30 символов')
            })}
        >
            <Form className="form">
                <h2 className="title">Добавление</h2>
                <TextInput className="form__input" label="Тип" name="name" id="name" placeholder="Тип территории"/>
                <TextInput className="form__input" label="Адрес" name="address" id="address" placeholder="Адрес"/>
                <button type="submit" className="form__btn">Добавить</button>
            </Form>
        </Formik>
    );
};

export default TerritoryAddForm;