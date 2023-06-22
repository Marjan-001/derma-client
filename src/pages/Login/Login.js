import React, { useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn,google } = useContext(AuthContext);
  const { loginError, setLoginError } = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const handleSignIn = data => {
    console.log(data)
    setLoginError('');
    signIn(data.email, data.password)
      .then(res => {
        const user = res.user;
       
        // console.log(user);

        navigate(from, { replace: true });

      })
      .catch(err =>
        
      {
        console.log(err.message);
        setLoginError(err.message);
       });
  }
  const handleGoogleLogin = () => {
    
    google()
      .then(result => { 
        const user = result.user;
         toast('Successfully login')
        navigate(from, { replace: true });
        console.log(user);
      })
    .catch(err=>console.error(err))
  }
    return (
        <div className='bg-blue-100 h-[800px] flex justify-center items-center'>
			<div className='border border-white rounded-lg w-96 p-7 shadow-2xl'>
				<h2 className='text-2xl text-center'>Login</h2>
				<form onSubmit={handleSubmit(handleSignIn)}>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("email", { required: 'Email is required' })} />	
              {errors.email && <p className='text-xs text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Password</span></label>
                       <input  type="password" className="input input-bordered w-full max-w-xs" {...register("password" ,{required:'Password is required'})}  />					
                          {errors.password && <p className='text-xs text-red-600' role="alert">{errors.password?.message}</p>}

              <label className="label"><span className="label-text text-blue-700">Forget Password</span></label>        
            </div>
		            
					
    
            <input className='btn btn-square  w-full bg-blue-800' value='Login' type="submit" />
            <div>
              {
                loginError &&
                <p className='text-red-600 '>{loginError} ko</p>
              }
            </div>
          </form>
          <p className='text-sm mt-2'>Don't have an account? <Link to='/signup' className='text-blue-700'>Create new account</Link></p>
          <div className='divider '>OR</div>
          <button onClick={handleGoogleLogin} className='btn btn-outline w-full border-blue-700 '>CONTINUE WITH GOOGLE </button>
        </div>  
		
	
            
      </div>
    );
};

export default Login;