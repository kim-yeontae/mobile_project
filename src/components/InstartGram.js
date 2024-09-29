/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

// import required modules
import { Pagination, Navigation, Virtual } from "swiper/modules";

import {
    ChatBubbleOvalLeftIcon,
    BookmarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";

export default function InstartGram({ data }) {
    return (
        <div className="">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className="instargram-swiper w-full rounded-8pxr overflow-hidden"
                modules={[Pagination]}
            >
                {data.images.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={`instargram-slide-${index}`}
                            className={"rounded-8pxr overflow-hidden"}
                        >
                            <Image
                                src={item.src}
                                className="w-full aspect-[2/1.5] object-cover"
                                alt={`instargram-slide-image-${index}`}
                                width={450}
                                height={450}
                                loading="eager"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="py-16pxr instargram_info">
                <div className="border-b border-[#ffffff] pb-12pxr flex justify-between items-center">
                    <div className="flex gap-x-8pxr items-center">
                        <HeartIcon
                            width={32}
                            height={32}
                            fill="#f00000"
                            stroke="#ffffff"
                            className="h-24pxr w-24pxr xs:h-32pxr xs:w-32pxr"
                        />
                        <ChatBubbleOvalLeftIcon
                            width={32}
                            height={32}
                            className="h-24pxr w-24pxr xs:h-32pxr xs:w-32pxr"
                        />
                        <img
                            src="https://res.cloudinary.com/dqetywuo0/image/upload/v1727413306/letter_1_yc1xgp.png"
                            className="h-24pxr w-24pxr xs:h-32pxr xs:w-32pxr"
                        />
                    </div>
                    <div>
                        <IoBookmarkOutline className="h-24pxr w-24pxr xs:h-32pxr xs:w-32pxr" />
                    </div>
                </div>
                <div className="py-8pxr flex gap-x-10pxr flex-wrap text-12pxr xs:text-14pxr">
                    {data.hash.map((item, index) => {
                        return (
                            <span
                                key={"instargram-slide-hashtag-" + index}
                                className="font-semibold"
                            >
                                # {item}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
