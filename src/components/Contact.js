import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact({ info }) {
    return (
        <div className=" px-[7.34%] space-y-20pxr ">
            <div className="pb-10pxr border-b border-[#f1f1f1] border-dotted">
                {info.type === "man" ? "신랑" : info.type === "woman" && "신부"}
                측
            </div>
            {info.data.map((item, index) => {
                return (
                    <div
                        className="w-full flex justify-between gap-x-10pxr "
                        key={"contact-box-" + index}
                    >
                        <span className="flex-1">
                            {index > 0 && info.type === "man" && "신랑"}{" "}
                            {index > 0 && info.type === "woman" && "신부"}{" "}
                            {item.type}
                        </span>
                        <span className="flex-1 text-center">{item.name}</span>
                        <span className="flex gap-x-12pxr items-center justify-end flex-1">
                            <a href={`tel:${item.number}`}>
                                <PhoneIcon
                                    className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                    width={16}
                                    height={16}
                                />
                            </a>
                            <a href={`sms:${item.number}`}>
                                <EnvelopeIcon
                                    className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                    width={18}
                                    height={18}
                                />
                            </a>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
