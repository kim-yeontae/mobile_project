import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ModalBack({
    children,
    action,
    closeHandle,
    className,
}) {
    return (
        <div
            className={`fixed w-full flex flex-col items-center overflow-scroll top-0 left-0 right-0 z-10  bottom-0 bg-[#DCAE96] bg-opacity-80 backdrop-blur-[14px] duration-500 ${
                action ? "" : "invisible opacity-0"
            } ${className}`}
        >
            <div className="flex justify-end p-10pxr xs:p-20pxr absolute top-0 right-0 z-20">
                <XMarkIcon
                    className="w-24pxr xs:w-32pxr h-24pxr xs:h-32pxr cursor-pointer"
                    width={32}
                    height={32}
                    onClick={() => {
                        closeHandle(null);
                    }}
                />
            </div>
            {children}
        </div>
    );
}
