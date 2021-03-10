import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const validattionSchema =Yup.object({
    name:Yup.string().required
})

const YoutubeForms = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Form Values', values)
        },
        validate: values => {
            let errors = {}
            if (!values.name) {
                errors.name = 'Required'
            }
            if (!values.email) {
                errors.email = 'Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email='Invalid Email Format'
            }
            if (!values.channel) {
                errors.channel = 'Required'
            }
            return errors;
        }
        
    })

    console.log('Visited', formik.touched)
    

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                {
                   formik.touched.name&&formik.errors.name&&<small>{formik.errors.name}</small>
                }
                </div>
                <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                {
                    formik.touched.email&&formik.errors.email&&<small>{formik.errors.email}</small>
                }
                </div>
                <div className='form-control'>
                <label htmlFor="channel">channel</label>
                <input type="text" id="channel" name="channel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} />
                {
                    formik.touched.channel&&formik.errors.channel&&<small>{formik.errors.channel}</small>
                }
                <div className='form-control'>
                <button >Submit</button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default YoutubeForms;