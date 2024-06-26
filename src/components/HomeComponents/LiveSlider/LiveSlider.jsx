// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './LiveSlider.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import liveImage from "../../../assets/images/womenDoctor-image.jpeg"
import liveImage2 from "../../../assets/images/Live-doctor-image-2.jpeg"
import liveImage3 from "../../../assets/images/Live-doctor-image-3.jpeg"
import { Link } from 'react-router-dom';

const LiveSlider = () => {

    // Responsive Breakpoints for swiper slider
    const swiperBreakPoints = {
        // when window width is >= 375px
        375: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 425px
        425: {
            slidesPerView: 3.5,
            spaceBetween: 45
        },
        // when window width is >= 500px
        500: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        // when window width is >= 575px
        575: {
            slidesPerView: 4.5,
            spaceBetween: 40
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 5,
            spaceBetween: 60
        },
    }


    return (
        <div className='font-rubik'>
            <div className='mb-3'>
                <h3 className='text-[18px] font-medium'>Live Doctors</h3>
            </div>
            {/* Slider container */}
            <div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={90}
                        breakpoints={swiperBreakPoints}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to={'live-viewer'}>
                                <div
                                    className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                    style={{
                                        background: `url(${liveImage})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'
                                    }}
                                >
                                    <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                        {/* live tag */}
                                        <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                            <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                            <div><p className='text-white text-[7px]'>Live</p></div>
                                        </div>
                                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                                <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage2})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage3})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage2})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage3})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage2})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className='h-[168px] w-[116.48px] bg-gray-400 rounded-md'
                                style={{
                                    background: `url(${liveImage3})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className='liveOverlay bg-black/15 w-full h-full rounded-md relative'>
                                    {/* live tag */}
                                    <div className='bg-[#FA002F] h-[17px] w-[40px] rounded-[3px] flex justify-center items-center py-1 absolute right-[12px] top-[12px] '>
                                        <div className='h-[5.6px] min-w-[5.6px] rounded-full bg-white mr-1'></div>
                                        <div><p className='text-white text-[7px]'>Live</p></div>
                                    </div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5455 14.2943C29.2976 6.53093 23.0221 0.255676 15.2589 0.00775311C11.0347 -0.126271 7.08263 1.4816 4.16191 4.49713C1.35406 7.39607 -0.121242 11.2178 0.00780249 15.2589C0.255518 23.0221 6.53098 29.2975 14.2942 29.5452C14.4558 29.5504 14.616 29.5529 14.7765 29.5529C18.8126 29.5529 22.5823 27.9558 25.3912 25.0559C28.199 22.1571 29.6745 18.3352 29.5455 14.2943ZM23.1559 22.8909C20.9385 25.1803 17.9626 26.4411 14.7765 26.4411C14.6492 26.4411 14.5218 26.4391 14.3934 26.4351C8.26644 26.2395 3.31379 21.2868 3.11794 15.1597C3.01607 11.9684 4.18059 8.95062 6.39716 6.66226C8.61457 4.37286 11.5905 3.11208 14.7765 3.11208C14.9039 3.11208 15.0313 3.11416 15.1597 3.1181C21.2867 3.31374 26.2393 8.26639 26.4352 14.3935C26.537 17.5848 25.3723 20.6026 23.1559 22.8909Z" fill="white" />
                                            <path d="M19.624 13.9186L13.0714 9.22029C12.3724 8.71905 11.3994 9.21863 11.3994 10.0788V19.4756C11.3994 20.3357 12.3724 20.8353 13.0714 20.3341L19.6238 15.6356C20.2118 15.2142 20.2118 14.3402 19.624 13.9186Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default LiveSlider;