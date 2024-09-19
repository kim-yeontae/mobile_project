import React, { useEffect, useRef } from "react";

const SnowAnimation = () => {
    const snowRefs = useRef([]);

    const updateSnowflakes = () => {
        snowRefs.current.forEach((snow) => {
            const size = Math.random() * 5 + 1; // 눈송이 크기 랜덤
            const position = Math.random() * 100; // 가로 위치 랜덤
            const delay = Math.random() * 10; // 애니메이션 시작 딜레이
            const duration = Math.random() * 10 + 15; // 애니메이션 지속 시간

            // 눈송이 스타일 설정
            if (snow) {
                snow.style.width = `${size / 4}px`;
                snow.style.height = `${size / 4}px`;
                snow.style.left = `${position}vw`;
                snow.style.animationDelay = `${delay}s`;
                snow.style.animationDuration = `${duration}s`;
            }
        });
    };

    useEffect(() => {
        updateSnowflakes(); // 초기 눈송이 설정

        // 리사이즈 이벤트 처리
        const handleResize = () => {
            updateSnowflakes(); // 화면 크기 변경 시 눈송이 위치/크기 업데이트
        };

        window.addEventListener("resize", handleResize);

        // 리사이즈 이벤트 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="snow-container overflow-hidden">
            {Array.from({ length: 300 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (snowRefs.current[i] = el)}
                    className="snow"
                />
            ))}
        </div>
    );
};

export default SnowAnimation;
