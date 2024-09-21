import { useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
const CopyButton = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleCopy}
                className="bg-[rgba(117,81,125,.5)] flex gap-x-4pxr  items-center justify-center w-60pxr xs:w-70pxr h-24pxr xs:h-30pxr rounded-6pxr text-12pxr xs:text-13pxr"
            >
                <span>
                    <ClipboardDocumentIcon width={20} height={20} />
                </span>
                <span>복사</span>
            </button>
            {copied && (
                <div className="absolute w-auto bottom-full right-0 mb-10pxr py-2pxr px-4pxr rounded-2pxr  whitespace-nowrap bg-[rgba(117,81,125)] text-11pxr ss:text-12pxr">
                    {textToCopy} 복사 되었습니다.
                </div>
            )}
        </div>
    );
};

export default CopyButton;
