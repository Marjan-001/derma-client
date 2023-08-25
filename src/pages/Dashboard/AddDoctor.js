import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
  const handleDoctor = (data) => {
    const doctor = {
      name: data.name,
      email: data.email,
      specialty:data.specialty

    }
    console.log(doctor)
    fetch('http://localhost:5000/doctors',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(doctor)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        toast.success(`${data.name} is added successfully`);
         
      })

    
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='p-2 mb-2 text-xl font-semibold text-blue-600 '>Add Dermatologist</h2>
            <form onSubmit={handleSubmit(handleDoctor)}>
                     <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Name</span></label>
              <input type="text" className="input mb-1 input-bordered border-info w-full max-w-xs"
                {...register("name", { required: 'name is required' })} />	
              {errors.name && <p className='text-xs text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    
                      

		            <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input mb-1 input-bordered border-info w-full max-w-xs"
                {...register("email", { required: 'Email is required' })} />	
              {errors.email && <p className='text-xs text-red-600' role="alert">{errors.email?.message}</p>}
                    
                    </div>
		        <div className="form-control w-full max-w-xs">
                       <label className="label"><span className="label-text">Specialty</span></label>
                        <select {...register("specialty")}  className="select select-info w-full max-w-xs"  >
                         <option disabled selected>Select specialty</option>
                         <option  >Skin Specialist </option>
                         <option >Hair Specialist</option>
                         <option >Cosmetic Surgery</option>
                         <option className='Laser Specialist'>Laser Specialist</option>
                        </select >
                </div>
                
                <div className="form-control  w-full max-w-xs">
                 <label className="label"><span className="label-text">Upload Image</span></label>
                 <input type='file'  {...register("image")} className="input   py-11 input-bordered border-dotted border-info w-full max-w-xs"></input>
              {errors.image && <p className='text-xs text-red-600' role="alert">{errors.image?.message}</p>}

                </div>
                
		            
					
    
      <input className='btn btn-square mt-4 w-full bg-blue-800' value='Add Dermatologist' type="submit" />
          </form>
        </div>
    );
};

export default AddDoctor;