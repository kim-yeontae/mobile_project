import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({ children, title, closeHandle }) {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] bg-[rgb(117,81,125)] z-[10] p-20pxr text-center rounded-10pxr">
            <div className="flex justify-center">
                {title}
                {children}
            </div>
            <div className="pt-12pxr xs:pt-20pxr ">
                <span
                    className="cursor-pointer"
                    onClick={() => {
                        closeHandle(false);
                    }}
                >
                    닫기
                </span>
            </div>
        </div>
    );
}
