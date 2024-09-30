import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
