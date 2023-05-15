import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";


import { EffectCreative } from "swiper";


// import required modules
const Reviews = () => {
    return (
        <div>
            <h2 className='text-2xl lg:text-4xl mt-16 text-center font-semibold text-blue-400'>Reviews From Our Trusted Clients</h2>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div
                        className="block rounded-xl border mt-16 bg-blue-800 p-4 shadow-xl sm:p-6 lg:p-8"

                    >
                        <div className="avatar flex justify-between items-center place-content-center ">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/1084554/pexels-photo-1084554.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="rating mt-6 gap-1 ">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
                            </div>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                            Amily
                        </h3>

                        <p className="mt-4 text-lg text-gray-300">
                            I recently visited the derma clinic for a skin concern, and I must say that my experience was exceptional. The staff was friendly, professional, and attentive from the moment I walked in. The waiting area was clean and comfortable, which helped ease my nerves. The dermatologist I saw was extremely knowledgeable and took the time to listen to my concerns and provide me with a thorough explanation of my condition. The treatment I received was effective, and I noticed a significant improvement in my skin after following their recommendations. I highly recommend this clinic to anyone seeking top-notch dermatological care.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="block rounded-xl border mt-16 bg-blue-800 p-4 shadow-xl sm:p-6 lg:p-8"

                    >
                        <div className="avatar flex justify-between items-center place-content-center ">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/2224735/pexels-photo-2224735.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="rating mt-6 gap-1 ">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
                            </div>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                            Arora
                        </h3>

                        <p className="mt-4 text-lg text-gray-300">
                            I had a positive experience at the derma clinic overall. The reception staff was welcoming and efficient, ensuring that I didn't have to wait too long. The clinic itself was well-maintained and had a pleasant ambiance. The dermatologist I saw was friendly and seemed experienced. They provided me with a diagnosis and treatment plan that was effective in addressing my skin issue. The only reason I'm not giving a full five-star rating is that it took a bit longer than expected to get an appointment, but once I was there, everything went smoothly. I would still recommend this clinic for their expertise and quality of care.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="block rounded-xl border mt-16 bg-blue-800 p-4 shadow-xl sm:p-6 lg:p-8"

                    >
                        <div className="avatar flex justify-between items-center place-content-center ">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/3779853/pexels-photo-3779853.png?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="rating mt-6 gap-1 ">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
                            </div>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                            Lily
                        </h3>

                        <p className="mt-4 text-lg text-gray-300">
                            My experience at derma was great. The reception staff was welcoming and efficient, ensuring that I didn't have to wait too long. The clinic itself was well-maintained and had a pleasant ambiance. The dermatologist I saw was friendly and seemed experienced. They provided me with a diagnosis and treatment plan that was effective in addressing my skin issue. The only reason I'm not giving a full five-star rating is that it took a bit longer than expected to get an appointment, but once I was there, everything went smoothly.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="block rounded-xl border mt-16 bg-blue-800 p-4 shadow-xl sm:p-6 lg:p-8"

                    >
                        <div className="avatar flex justify-between items-center place-content-center ">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/2399641/pexels-photo-2399641.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="rating mt-6 gap-1 ">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
                            </div>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                            Rachel
                        </h3>

                        <p className="mt-4 text-lg text-gray-300">
                            I had a positive experience at the derma clinic overall. The reception staff was welcoming and efficient, ensuring that I didn't have to wait too long. The clinic itself was well-maintained and had a pleasant ambiance. The dermatologist I saw was friendly and seemed experienced. They provided me with a diagnosis and treatment plan that was effective in addressing my skin issue.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Reviews;