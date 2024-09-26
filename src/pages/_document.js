import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
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
                    content="https://wedding.leekh.dev/assets/images/photo.jpeg"
                />
                <meta
                    property="og:description"
                    content="11월 3일 토요일 오후 12시 라비에벨웨딩홀"
                />
                <meta
                    property="og:site_name"
                    content="길성재 ❤️ 정수진 결혼합니다."
                />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
