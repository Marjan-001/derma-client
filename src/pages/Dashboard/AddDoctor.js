import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleDoctor=()=> {
    
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='p-2 mb-2 text-xl font-semibold text-blue-600 '>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleDoctor)}>
                     <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">First Name</span></label>
              <input type="text" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("firstname", { required: 'First name is required' })} />	
              {errors.firstname && <p className='text-xs text-red-600' role="alert">{errors.firstname?.message}</p>}
                    </div>
                    
                     

		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input mb-1 input-bordered w-full max-w-xs"
                {...register("email", { required: 'Email is required' })} />	
              {errors.email && <p className='text-xs text-red-600' role="alert">{errors.email?.message}</p>}
                    
                    </div>
		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Password</span></label>
             
                         

             
            </div>
		            
					
    
      <input className='btn btn-square mt-2 w-full bg-blue-800' value='Sign up' type="submit" />
          </form>
        </div>
    );
};

export default AddDoctor;