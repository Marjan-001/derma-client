import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
	 const { register, handleSubmit } = useForm();
  const handleSignIn = data => {
  console.log(data)
}
    return (
        <div className='bg-blue-100 h-[800px] flex justify-center items-center'>
			<div className='border border-white rounded-lg w-96 p-7 shadow-2xl'>
				<h2 className='text-2xl text-center'>Login</h2>
				<form onSubmit={handleSubmit(handleSignIn)}>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Email</span></label>
                       <input  type="email" className="input input-bordered w-full max-w-xs" {...register("email")}  />					
                    </div>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Password</span></label>
                       <input  type="password" className="input input-bordered w-full max-w-xs" {...register("password")}  />					
            <label className="label"><span className="label-text text-blue-700">Forget Password</span></label>        
            </div>
		            
					
    
      <input className='btn btn-square  w-full bg-blue-800' value='Login' type="submit" />
          </form>
          <p className='text-sm mt-2'>Don't have an account? <Link to='/signup' className='text-blue-700'>Create new account</Link></p>
          <div className='divider '>OR</div>
          <button className='btn btn-outline w-full border-blue-700 '>CONTINUE WITH GOOGLE </button>
        </div>  
		
	
            
      </div>
    );
};

export default Login;