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
        <div
            className={`max-w-[450px] grid grid-cols-3 gap-1 px-[2.23%]`}
            style={{ gridAutoRows: gridTemplateRows }}
        >
            {data.map((image, index) => (
                <div
                    key={index}
                    className={`relative bg-cover rounded-4pxr overflow-hidden ${
                        image.span === 2 ? "row-span-2" : ""
                    }`}
                    style={{ backgroundImage: `url(${image.src})` }}
                    onClick={() => onGalleryItemClick(index)}
                >
                    <Image
                        src={image.src}
                        alt={`image-${index}`}
                        className=" cursor-pointer"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;
