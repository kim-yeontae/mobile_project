import "@/styles/globals.css";
import { useEffect } from "react";
import "aos/dist/aos.css"; // AOS 스타일 불러오기
import Head from "next/head";
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
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 ,maximum-scale=1.0, user-scalable=no"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <title>길성재 ❤️ 정수진 결혼합니다.</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://wedding.biggestpond.site/"
                />
                <meta
                    property="og:title"
                    content="길성재 ❤️ 정수진 결혼합니다."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dqetywuo0/image/upload/v1727362236/KakaoTalk_20240926_234806628_f5kvfd.jpg"
                />
                <meta
                    property="og:description"
                    content="11월 3일 일요일 오후 12시 라비에벨웨딩홀"
                />
                <meta
                    property="og:site_name"
                    content="길성재 ❤️ 정수진 결혼합니다."
                />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <script
                    src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
                    integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
                    crossOrigin="anonymous"
                    async
                    defer
                ></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
            </Head>
            <Component {...pageProps} />;
        </>
    );
}
