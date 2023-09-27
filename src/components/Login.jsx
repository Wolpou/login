import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import "./styles/SignIn.scss";

//validate functions
import { validate} from "./Validate";

//Link
import { Link } from 'react-router-dom';

const SignIn = () => {

    //data
    const [data,setdata]=useState({
        email:"",
        password:"",
    })
    //handlers
    const changeHandler = event => {
        setdata({...data,[event.target.name]:event.target.value})
    }
    
    const[errors , setErrors]=useState({});
    const [touched, setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data , "login"));
        console.log(errors);
    },[data , touched])

    
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true });
    };

    const submitHanlder = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify1();
        }else{
            notify2();
            setTouched({

                email: true,
                password: true,

            })
        }
    }
    const notify1 = () => toast.success(' Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 
    const notify2 = () => toast.error(' Error !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    
    
    return (
        <div className='container'>
             <div className="signin-box">
                <p>Sign In</p>
                <form onSubmit={submitHanlder}>

                    <div className="user-box">
                    <label>Email : </label>
                    <input  name="email" type="text" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>

                    <div className="user-box">
                    <label>password : </label>
                    <input  name="password" type="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}  />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>

                    <button type="submit">Login</button>
                    
                </form>
                <p>have not an account? <Link to="/signin">Sign in!</Link></p>
                </div>
                <ToastContainer />    
        </div>
    );
};

export default SignIn;