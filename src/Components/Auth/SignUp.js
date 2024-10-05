import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../../Context/userContext";
import * as Yup from 'yup'
export default function SignUp(){
    const navigate = useNavigate()
    const [isLoad , setLoad] = useState(true)
    const {userData , setUserData} = useContext(Usercontext)
    // use formik takes object =>  initiail values , Register function with api , form vaildation
    async function Register(values){
        try{
            const {data} = await axios.post('https://movies-api.routemisr.com/signup' , values)
            console.log(data)
            if(data.message === 'success'){
                navigate('/login')
            }else{
                setLoad(false)
                alert(data.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    const  validationSchema = Yup.object().shape({
        first_name:Yup.string().min(3).max(10).required('This Input Is Required'),
        last_name:Yup.string().min(3).max(10).required('This Input Is Required'),
        email:Yup.string().email('Invaild Email').required('This Input Is Required'),
        password:Yup.string().required('This Input Is Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ , 'Password must be at least 6 characters long and include both letters and numbers'),
        age:Yup.number().min(15 ,'Your Age Must Be Atleast 15').required('This Input Is Required'),
    })
    let formik = useFormik({ 
        initialValues: {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            age:""
        },
        onSubmit:Register,
        //  validationSchema takes =>object
        validationSchema,

    });
    return(
        <>
        <div className="conatainer m-auto w-100  d-flex justify-content-center align-items-center  mt-3 mb-5" id="register">
             {/* form handle submite && each input handle Blur , chan , set value same as object*/}
            <form className="bg-dark px-5 py-4" onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="first_name" 
                        placeholder="Name"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.first_name && formik.touched.first_name &&
                    <div className="alert alert-danger" role="alert">{formik.errors.first_name}</div>
                }
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control " 
                        id="last_name" 
                        placeholder="Name"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.last_name && formik.touched.last_name &&
                    <div className="alert alert-danger" role="alert">{formik.errors.last_name}</div>
                }
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.email && formik.touched.email&&
                    <div className="alert alert-danger" role="alert">{formik.errors.email}</div>
                }
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="age" 
                        name="age"
                        placeholder="Age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.age && formik.touched.age &&
                    <div className="alert alert-danger" role="alert">{formik.errors.age}</div>
                }
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                 {formik.errors.password && formik.touched.password &&
                    <div className="alert alert-danger" role="alert">{formik.errors.password}</div>
                }
              
                <button type="submit" className="btn btn-danger">Register</button>
            </form>
        </div>
    </>
    )
}
