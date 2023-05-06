import React from 'react';

const Banner = () => {
    return (


        <section
            className="relative bg-[url(https://images.pexels.com/photos/5069430/pexels-photo-5069430.jpeg?auto=compress&cs=tinysrgb&w=1440&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/66 bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        We Bring Difference

                        <strong className="block font-extrabold text-blue-600">
                            To Your Life
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        We have experienced skin doctor who provides skin care, laser skin care, hair transplant, cosmetic surgery , nail care.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        >
                            Book Appointment
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-400 shadow hover:text-blue-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;