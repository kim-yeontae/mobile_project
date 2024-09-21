import { useEffect } from "react";
import Script from "next/script";

export default function KakaoMap() {
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b1089d9b587c1db18ab3c2bb7f05a3f1&autoload=false`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            kakao.maps.load(() => {
                const container = document.getElementById("map"); // 지도를 표시할 div
                const options = {
                    center: new kakao.maps.LatLng(36.3025526, 127.3470381), // 대전 라비에벨 웨딩홀 좌표
                    level: 3, // 확대 레벨
                    scrollwheel: false,
                };
                const map = new kakao.maps.Map(container, options); // 지도 생성

                // 마커를 표시할 위치 (대전 라비에벨 웨딩홀)
                const markerPosition = new kakao.maps.LatLng(
                    36.3025526,
                    127.3470381
                );

                // 기본 마커 생성
                const marker = new kakao.maps.Marker({
                    position: markerPosition, // 마커의 위치
                });

                // 지도에 마커를 표시
                marker.setMap(map);
            });
        };

        mapScript.onload = onLoadKakaoMap;
    }, []);

    return <div id="map" className="absolute h-full w-full left-0 top-0"></div>;
}
