/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import {
    ChatBubbleOvalLeftIcon,
    BookmarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";

export default function InstartGram({ data }) {
    const [hashTag, setHashTag] = useState([]);

    return (
        <div>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                onSlideChangeEnd={(e) => {
                    console.log(e.realIndex);
                    // setHashTag(data[e.activeIndex].hash);
                }}
                className="instargram-swiper w-full"
                modules={[Pagination]}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={`instargram-slide-${index}`}
                            className={"rounded-8pxr overflow-hidden"}
                        >
                            <Image
                                src={item.src}
                                className="w-full aspect-[2/1.2] object-cover"
                                alt={`instargram-slide-image-${index}`}
                                width={450}
                                height={450}
                                loading="eager"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* <div className="pt-16pxr">
                <div className="border-b border-[#ffffff] pb-12pxr flex justify-between items-center">
                    <div className="flex gap-x-8pxr items-center">
                        <HeartIcon
                            width={32}
                            height={32}
                            fill="#f00000"
                            stroke="#ffffff"
                        />
                        <ChatBubbleOvalLeftIcon width={32} height={32} />
                        <img
                            src="https://res.cloudinary.com/dqetywuo0/image/upload/v1727413306/letter_1_yc1xgp.png"
                            className="w-32pxr h-32pxr"
                        />
                    </div>
                    <div>
                        <IoBookmarkOutline className="w-32pxr h-32pxr" />
                    </div>
                </div>
                <div className="py-8pxr flex gap-x-10pxr">
                    {hashTag.map((item, index) => {
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
            </div> */}
        </div>
    );
}
