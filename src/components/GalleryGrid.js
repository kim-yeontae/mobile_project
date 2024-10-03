import Image from "next/image";
import { useState, useEffect } from "react";
const GalleryGrid = ({ onGalleryItemClick, data }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gridTemplateRows = isMobile
        ? "calc(((100vw - 40px)/2 - 8px/2)/20 * 10)"
        : "calc(((425px - 40px)/2 - 8px/2)/20 * 10)";

    return (
        <div className={`max-w-[450px] grid grid-cols-5 gap-1 px-[2.23%]`}>
            {data.map((image, index) => (
                <div
                    key={index}
                    className={`relative  rounded-4pxr overflow-hidden `}
                    onClick={() => onGalleryItemClick(index)}
                >
                    <img
                        src={image.src}
                        alt={`image-${index}`}
                        className={`cursor-pointer object-cover aspect-[1/1] ${image.option} `}
                        // width={1859}
                        // height={2789}
                        priority={false}
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;
