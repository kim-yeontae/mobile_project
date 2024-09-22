"use client";

import { useEffect, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
const BgdMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        // 배경음악을 로드
        const backgroundAudio = new Audio(
            "https://res.cloudinary.com/dqetywuo0/video/upload/v1726994491/Nocturne_in_E_flat_major_Op._9_no._2_cstqvm.mp3"
        );
        backgroundAudio.loop = true; // 반복 재생
        setAudio(backgroundAudio);
    }, []);

    // 음악 재생/정지 토글 함수
    const togglePlay = () => {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-10pxr right-10pxr z-[5]">
            <button
                onClick={togglePlay}
                className="p-2 bg-[rgba(117,81,125,.5)] text-white rounded-full "
            >
                {isPlaying ? (
                    <SpeakerWaveIcon width={20} height={20} />
                ) : (
                    <SpeakerXMarkIcon width={20} height={20} />
                )}
            </button>
        </div>
    );
};

export default BgdMusic;
