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
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted:false
    })
    //handlers
    const changeHandler = event => {
        if (event.target.name === "isAccepted"){
            setdata({
              ...data,[event.target.name]:event.target.checked
            })
        }else{
            setdata({...data,[event.target.name]:event.target.value})
        }
    }
    
    const[errors , setErrors]=useState({});
    const [touched, setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data , "signup"));
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
                name: true,
                email: true,
                password: true,
                confirmpassword: true,
                isAccepted: true
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
                    <label>Name : </label>
                    <input  name="name" type="text" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>

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

                    
                    <div className="user-box">
                    <label>Confirm password : </label>
                    <input  name="confirmpassword" type="password" value={data.confirmpassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}
                    </div>

                    <div className="user-box">
                        <div className='div1'>
                        <label>I Accept Terms Of Privacy Policy</label>
                        <input  name="isAccepted" type="checkbox" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                        </div>
                        <div className='div2'>
                        {errors.isAccepted && touched.isAccepted &&<span>{errors.isAccepted}</span>}
                        </div>
                    
                    </div>

                    <button type="submit">Sign In</button>
                    
                </form>
                <p>have an account? <Link to="/login">Login!</Link></p>
                </div>
                <ToastContainer />    
        </div>
    );
};

export default SignIn;