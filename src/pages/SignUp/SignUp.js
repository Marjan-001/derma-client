import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
      
  const handleSignUp = data => {
  console.log(data)
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
                                    

                            {...register("age", { required: "Age is required" , min:{value:25,message:"Minimum age have to be 20"}, max:{value:60,message:"Maximum age have to be 60"} })} />	
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

              <label className="label"><span className="label-text text-blue-700">Forget Password</span></label>        
            </div>
		            
					
    
      <input className='btn btn-square  w-full bg-blue-800' value='Login' type="submit" />
          </form>
          <p className='text-sm mt-2'>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
          
        </div>  
		
	
            
      </div>
    );
};

export default SignUp;