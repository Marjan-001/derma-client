import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../customHooks/useToken';



const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [token]=useToken(userEmail)
  if (token) {
  navigate('/')
}
  const handleSignUp =( data   )=> {

       
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      toast("Successfully Sign Up")
      console.log(user)
      const userInfo = {
        displayName: data.firstname
      }
      updateUser(userInfo)
        .then(() => {

          postUserData(data.firstname,data.email);
         })
      .catch(err=>console.log(err))
      })
    .catch(error=>console.error(error))
    
  }
  
  const postUserData = (firstname, email) => {
    const user = { firstname, email }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        setUserEmail(email)
       
    })
  }
 
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
    return (
      <div className='bg-blue-100 h-[800px] flex justify-center items-center'>
			<div className='border border-white rounded-lg w-96 p-7 shadow-2xl'>
				<h2 className='text-2xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                     <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">First Name</span></label>
              <input type="text" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("firstname", { required: 'First name is required' })} />	
              {errors.firstname && <p className='text-xs text-red-600' role="alert">{errors.firstname?.message}</p>}
                    </div>
                     <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Last Name</span></label>
              <input type="text" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("lastname", { required: 'last name is required' })} />	
              {errors.lastname && <p className='text-xs text-red-600' role="alert">{errors.lastname?.message}</p>}
                    </div>
                     <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Age</span></label>
                        <input type="number" className="input mb-1 input-bordered w-full max-w-xs"
                                    

                            {...register("age", { required: "Age is required" })} />	
                        {errors.age  &&
                            
                            <p className='text-xs text-red-600' role="alert">
                                
                                {
                                    errors.age?.message
                                }
                            
                            </p>}
                 
                  
                    </div>

		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("email", { required: 'Email is required' })} />	
              {errors.email && <p className='text-xs text-red-600' role="alert">{errors.email?.message}</p>}
                    
                    </div>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Password</span></label>
              <div className=' relative  '>
                 <input  type={showPassword ? 'text' : 'password'} className="input input-bordered w-full max-w-xs" {...register("password", {
                required: 'Password is required',minLength:{value:8,message:'Password must be minimum 8 characters long'},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,message:"Must have at least a uppercase, lowercase letter and a special character "
                }
              })} />			
              <p  onClick={handleTogglePassword} className='absolute top-2 right-2  text-gray-500 cursor-pointer'>{showPassword ? "Hide" : "Show"}</p>
             </div>
                          {errors.password && <p className='text-xs text-red-600' role="alert">{errors.password?.message}</p>}

             
            </div>
		            
					
    
      <input className='btn btn-square mt-2 w-full bg-blue-800' value='Sign up' type="submit" />
          </form>
          <p className='text-sm mt-2'>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
          
        </div>  
		
	
            
      </div>
    );
};

export default SignUp;