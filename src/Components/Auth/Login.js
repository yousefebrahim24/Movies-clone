import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { Usercontext } from "../../Context/userContext";
export default function Login(){
    const navigate = useNavigate()
    const [isLoad , setLoad] = useState(true)
    const {userData , setUserData} = useContext(Usercontext)
    // use formik takes object =>  initiail values , Register function with api , form vaildation
    async function login(values){
        try{
            const {data} = await axios.post('https://movies-api.routemisr.com/signin' , values)
            console.log(data)
            if(data.message === 'success'){
                localStorage.setItem('userToken' , data.token)
                setUserData(data.token)
                navigate('/Home')
            }else{
                setLoad(false)
                alert(data.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    const  validationSchema = Yup.object().shape({
        email:Yup.string().email('Invaild Email').required('This Input Is Required'),
        password:Yup.string().required('This Input Is Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ , 'Password must be at least 6 characters long and include both letters and numbers'),
    })
    let formik = useFormik({ 
        initialValues: {
            email:"",
            password:"",
        },
        onSubmit:login,
        //  validationSchema takes =>object
        validationSchema,

    });
    return(
        <>
        <div className="conatainer m-auto w-100  d-flex justify-content-center align-items-center my-4" id="register">
             {/* form handle submite && each input handle Blur , chan , set value same as object*/}
            <form className="bg-dark p-5" onSubmit={formik.handleSubmit}>
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
                {formik.errors.age && formik.touched.age &&
                    <div className="alert alert-danger" role="alert">{formik.errors.age}</div>
                }
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    </>
    )
}