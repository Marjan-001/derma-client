import React from 'react';

const Discount = () => {
    return (
        <section className="overflow-hidden mt-16 mx-auto rounded-lg shadow-2xl md:grid md:grid-cols-1">


            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest">
                    Run with the pack
                </p>

                <h2 className="mt-6 font-black uppercase">
                    <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                        Get 20% off
                    </span>

                    <span className="mt-2 block text-sm">On your first appoinment!!!</span>
                </h2>

                <a
                    className="mt-8 inline-block w-full bg-blue-600 py-4 text-sm font-bold uppercase tracking-widest text-white"
                    href=""
                >
                    Get Discount
                </a>

                <p className="mt-8 text-xs font-medium uppercase text-gray-500">
                    Offer valid until 24th Jun, 2023 *
                </p>
            </div>
        </section>
    );
};

export default Discount;