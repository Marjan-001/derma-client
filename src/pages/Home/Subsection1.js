import React from 'react';
import image from "../../assests/images/banner2.jpg"
import { FiSlack } from "react-icons/fi"
import subsection1 from "./subsection1.css"

const Subsection1 = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className=" text-2xl  text-center lg:text-4xl lg:text-left text-blue-600 font-bold sm:text-4xl">
                        Get The Best Skin Treatment
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt="Party"
                            src={image}
                            className="absolute  h-full w-full object-cover rounded-xl"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p className='text-xl '>
                                " Welcome to our dermatology clinic, where we specialize in providing the best skin treatments to help you achieve your desired results. Our team of experienced dermatologists and skincare professionals use the latest technology and techniques to provide personalized treatment plans for each of our patients."
                            </p>

                            <div >
                                <div className='flex justify-start gap-2 items-center'>
                                    <FiSlack className='icon' />
                                    <p className='font-medium'>Experienced dermatologists and skincare professionals</p>
                                </div>
                                <div className='flex justify-start gap-2 items-center'>
                                    <FiSlack className='icon' />
                                    <p className='font-medium'>Personalized treatment plans</p>
                                </div>
                                <div className='flex justify-start gap-2 items-center'>
                                    <FiSlack className='icon' />
                                    <p className='font-medium'>Holistic approach to skincare</p>
                                </div>
                                <div className='flex justify-start gap-2 items-center'>
                                    <FiSlack className='icon' />
                                    <p className='font-medium'>Latest technology and equipment</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Subsection1;