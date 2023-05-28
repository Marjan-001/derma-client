import React, { useEffect, useState } from 'react';
import TreatmentCard from '../TreatmentCard/TreatmentCard';

const Treatments = () => {

    const [treatments, setTreatments] = useState([]);
    useEffect(() => {
        fetch('treatmentData.json')
            .then(res => res.json())
            .then(data => {
                setTreatments(data)
            })


    }, [])


    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-2xl lg:text-4xl font-semibold text-blue-400'>Our Treatments By Skin Concern</h3>

            </div>

            <div className='grid gap-8 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
                {
                    treatments.map(treatment => <TreatmentCard
                        key={treatment.id}
                        treatment={treatment}

                    ></TreatmentCard>)
                }
            </div>






            
        </div>
    );
};

export default Treatments;