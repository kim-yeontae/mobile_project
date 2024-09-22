"use client";

import { useEffect } from "react";
import Image from "next/image";
export default function ShareButtonBox() {
    // 카카오 SDK 로드
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init("b1089d9b587c1db18ab3c2bb7f05a3f1"); // 카카오 API 키를 입력하세요
            }
        };
    }, []);

    // 카카오톡 공유하기 함수
    const shareKakao = () => {
        if (window.Kakao) {
            window.Kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: "여러분을 초대합니다.",
                    description: "우리 결혼해요!",
                    imageUrl:
                        "https://res.cloudinary.com/dqetywuo0/image/upload/v1726322692/image_1_ntrqlf.jpg", // 이미지 URL
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: "웹으로 보기",
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        }
    };

    // URL 복사 함수
    const copyUrl = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("URL이 복사되었습니다!");
        });
    };

    return (
        <div className="w-full flex justify-evenly">
            {/* 카카오톡 공유하기 버튼 */}
            <button
                onClick={shareKakao}
                className="flex flex-col items-center justify-center gap-y-10pxr"
            >
                <Image
                    src={
                        "https://res.cloudinary.com/dqetywuo0/image/upload/v1727001747/kakaotalk_tomrhr.jpg"
                    }
                    className="rounded-xl"
                    width={60}
                    height={60}
                />
                <span>카카오톡</span>
            </button>

            {/* URL 복사 버튼 */}
            <button
                onClick={copyUrl}
                className="flex flex-col items-center justify-center gap-y-10pxr"
            >
                <Image
                    src={
                        "https://res.cloudinary.com/dqetywuo0/image/upload/v1727001783/copy_ukgzcm.jpg"
                    }
                    className="rounded-xl"
                    width={60}
                    height={60}
                />
                <span>URL 복사</span>
            </button>
        </div>
    );
}
