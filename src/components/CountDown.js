import React, { useState, useEffect } from "react";

export default function Countdown() {
    // 목표 시간을 설정 (2024년 11월 3일 12시)
    const targetDate = new Date("2024-11-03T12:00:00");

    // 각 단위를 state로 관리
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // 남은 시간을 계산하는 함수
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((difference / 1000 / 60) % 60));
            setSeconds(Math.floor((difference / 1000) % 60));
        }
    };

    // useEffect로 1초마다 상태를 업데이트
    useEffect(() => {
        // 처음에 남은 시간 계산
        calculateTimeLeft();

        // 1초마다 남은 시간을 계산하는 interval 설정
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="flex justify-center items-end gap-x-12pxr  py-[7.34%]">
                <div className="flex flex-col justify-center center text-center">
                    <span className="text-10pxr xs:text-12pxr">DAYS</span>
                    <span className="text-22pxr ss:text-24pxr xs:text-26pxr">
                        {days}
                    </span>
                </div>
                <span className="flex items-center h-33pxr ss:h-36pxr xs:h-39pxr">
                    :
                </span>
                <div className="flex flex-col justify-center text-center">
                    <span className="text-10pxr xs:text-12pxr">HOUR</span>
                    <span className="text-22pxr ss:text-24pxr xs:text-26pxr">
                        {hours}
                    </span>
                </div>
                <span className="flex items-center h-33pxr ss:h-36pxr xs:h-39pxr">
                    :
                </span>
                <div className="flex flex-col justify-center center text-center">
                    <span className="text-10pxr xs:text-12pxr">MIN</span>
                    <span className="text-22pxr ss:text-24pxr xs:text-26pxr">
                        {minutes}
                    </span>
                </div>
                <span className="flex items-center h-33pxr ss:h-36pxr xs:h-39pxr">
                    :
                </span>
                <div className="flex flex-col justify-center center text-center">
                    <span className="text-10pxr xs:text-12pxr">SEC</span>
                    <span className="text-22pxr ss:text-24pxr xs:text-26pxr">
                        {seconds}
                    </span>
                </div>
            </div>
            <div className="text-center  px-[4%] ss:px-[7.34%] contents_text">
                우리의 새로운 출발이{" "}
                <span className="mx-8pxr relative ">
                    <span className="relative z-[2]">{days + 1}</span>
                    <span className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e06363] h-24pxr xs:h-28pxr w-24pxr xs:w-28pxr rounded-full"></span>
                </span>
                일 남았습니다.
            </div>
        </div>
    );
}
