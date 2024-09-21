import "@/styles/globals.css";
import { useEffect } from "react";
import "aos/dist/aos.css"; // AOS 스타일 불러오기
import AOS from "aos";
export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            // AOS 초기 설정 (옵션)
            duration: 1000, // 애니메이션 지속 시간
            easing: "ease-in-out", // 애니메이션 속도 조절
            once: false, // 스크롤할 때마다 애니메이션을 반복할지 여부
        });
    }, []);
    return <Component {...pageProps} />;
}
