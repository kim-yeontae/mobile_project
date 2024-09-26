import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function NavButton({ modalHandler }) {
    const destinationLat = 36.302653; // 목적지 위도
    const destinationLng = 127.347149; // 목적지 경도

    const [isMobile, setIsMobile] = useState(false);

    // 클라이언트 측에서만 navigator 객체에 접근하도록 useEffect 사용
    useEffect(() => {
        if (typeof window !== "undefined" && typeof navigator !== "undefined") {
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        }
    }, []);

    const handleNaverClick = () => {
        if (isMobile) {
            const naverUrl = `nmap://place?lat=${destinationLat}&lng=${destinationLng}`;
            window.location.href = naverUrl;
            setTimeout(() => {
                modalHandler("navi");
            }, 2000);
        } else {
            modalHandler("navi");
            console.log("네이버 지도 앱 실행 (모바일에서만 동작)");
        }
    };

    const handleKakaoClick = () => {
        if (isMobile) {
            const kakaoUrl = `kakaomap://route?&ep=${destinationLat},${destinationLng}&by=CAR`;
            window.location.href = kakaoUrl;
            setTimeout(() => {
                modalHandler("navi");
            }, 2000);
        } else {
            modalHandler("navi");
            console.log("카카오 지도 앱 실행 (모바일에서만 동작)");
        }
    };

    const handleTmapClick = () => {
        if (isMobile) {
            const tmapUrl = `tmap://route?goalname=라비에벨웨딩홀&goalx=${destinationLng}&goaly=${destinationLat}`;
            window.location.href = tmapUrl;
            setTimeout(() => {
                modalHandler("navi");
            }, 2000);
        } else {
            modalHandler("navi");
            console.log("티맵 앱 실행 (모바일에서만 동작)");
        }
    };

    return (
        <div className="flex gap-8pxr flex-col ss:flex-row ">
            <button
                onClick={handleNaverClick}
                className="flex gap-x-4pxr xs:gap-x-8pxr items-center justify-center border px-8pxr xs:px-12pxr py-8pxr rounded-10pxr text-12pxr xs:text-16pxr flex-1"
            >
                <span>
                    <Image
                        src={
                            "https://res.cloudinary.com/dqetywuo0/image/upload/v1726745292/unnamed_pdlb9o.png"
                        }
                        className="rounded-4pxr overflow-hidden"
                        width={20}
                        height={20}
                    />
                </span>
                <span>네이버</span>
            </button>
            <button
                onClick={handleKakaoClick}
                className="flex gap-x-4pxr xs:gap-x-8pxr items-center justify-center border px-8pxr xs:px-12pxr py-8pxr rounded-10pxr text-12pxr xs:text-16pxr flex-1"
            >
                <span>
                    <Image
                        src={
                            "https://res.cloudinary.com/dqetywuo0/image/upload/v1726746156/kakaonavi_ds4a2e.png"
                        }
                        className="rounded-4pxr overflow-hidden"
                        width={20}
                        height={20}
                    />
                </span>
                <span>카카오</span>
            </button>
            <button
                onClick={handleTmapClick}
                className="flex gap-x-4pxr xs:gap-x-8pxr items-center justify-center border px-8pxr xs:px-12pxr py-8pxr rounded-10pxr text-12pxr xs:text-16pxr flex-1"
            >
                <span>
                    <Image
                        src={
                            "https://res.cloudinary.com/dqetywuo0/image/upload/v1726746251/TMAP_Web_1-10_mjvwnd.png"
                        }
                        className="rounded-4pxr overflow-hidden bg-white"
                        width={20}
                        height={20}
                    />
                </span>
                <span>티맵</span>
            </button>
        </div>
    );
}
