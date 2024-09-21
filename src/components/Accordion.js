import React, { useEffect, useState, useRef } from "react";
import CopyButton from "@/components/CopyButton";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Accordion({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight); // 실제 콘텐츠 높이 계산
        } else {
            setHeight(0);
        }
    }, [isOpen]);
    return (
        <div className="overflow-hidden border rounded-4pxr">
            <div
                className={`relative contents_text`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="text-center py-8pxr">
                    {data.type === "man"
                        ? "신랑측"
                        : data.type === "woman" && "신부측"}
                </div>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 mr-12pxr">
                    {isOpen ? (
                        <ChevronUpIcon width={20} height={20} />
                    ) : (
                        <ChevronDownIcon width={20} height={20} />
                    )}
                </span>
            </div>
            <div
                className={`duration-500 flex flex-col`}
                ref={contentRef}
                style={{
                    height: height + "px",
                }}
            >
                {data.data.map((item, index) => {
                    return (
                        <div className="py-12pxr px-12pxr border-t space-y-8pxr">
                            <div className="flex justify-between">
                                <div className="text-13pxr ss:text-14pxr xs:text-15pxr">
                                    <span> {item.type} </span>
                                    <span className="font-semibold">
                                        {" "}
                                        {item.name}
                                    </span>
                                </div>
                                {item.kakao_qr_code && (
                                    <div>
                                        <a
                                            href="kakaotalk://kakaopay/money/to/qr?qr_code={FGlm2YKSt}"
                                            className="bg-[#ffdf00] flex gap-x-4pxr  items-center justify-center w-60pxr xs:w-70pxr h-24pxr xs:h-30pxr rounded-6pxr text-12pxr xs:text-13pxr"
                                        >
                                            <span>
                                                <Image
                                                    src={
                                                        "https://res.cloudinary.com/dqetywuo0/image/upload/v1726914079/kpay_a_wwawqr.webp"
                                                    }
                                                    className="w-30pxr xs:w-40pxr"
                                                    width={50}
                                                    height={10}
                                                />
                                            </span>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-center text-11pxr ss:text-13pxr xs:text-14pxr ">
                                <div className="flex gap-x-4pxr items-center">
                                    <span>{item.account}</span>
                                    <span>{item.account_number}</span>
                                </div>
                                <div>
                                    <CopyButton
                                        textToCopy={`${item.account} ${item.account_number}`}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
