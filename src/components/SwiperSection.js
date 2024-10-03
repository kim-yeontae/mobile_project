import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function SwiperSection({ data, activeIndex }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                initialSlide={activeIndex}
                pagination={{
                    clickable: true,
                }}
                wrapperClass={"items-center"}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onSlideChange={(e) => {
                    console.log(e.activeIndex);
                }}
                modules={[Pagination, Navigation]}
                className="modal-swiper w-full"
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={`slide-${index}`}
                            className={
                                "rounded-8pxr overflow-hidden !flex items-center"
                            }
                        >
                            <img
                                src={item.src}
                                alt={`slide-image-${index}`}
                                className="w-full "
                                // width={450}
                                // height={450}
                                loading="eager"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="swiper-button-next">
                <ChevronRightIcon width={24} hanging={24} />
            </div>
            <div className="swiper-button-prev">
                <ChevronLeftIcon width={24} hanging={24} />
            </div>
        </>
    );
}
