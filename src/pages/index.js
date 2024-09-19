import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import ModalBack from "@/components/ModalBack";
import SnowAnimation from "@/components/Snows";
import Contact from "@/components/Contact";
import QuestionBox from "@/components/QuestionBox";
import GalleryGrid from "@/components/GalleryGrid";
import SwiperSection from "@/components/SwiperSection";
import Countdown from "@/components/CountDown";
import KakaoMap from "@/components/KakaoMap";
import NavButton from "@/components/NavButton";

import Image_1 from "../images/image_1.jpg";
import tw, { styled } from "twin.macro";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/outline";

const Wrapper = styled.div`
    ${tw`h-[100vh] overflow-scroll`}
    .contents_title {
        ${tw`text-16pxr ss:text-18pxr xs:text-20pxr`}
    }
    .contents_text {
        ${tw`text-14pxr xs:text-16pxr`}
    }
    .question_title {
        ${tw`text-16pxr xs:text-17pxr `}
    }
    .question_text {
        ${tw`text-12pxr xs:text-14pxr`}
    }
    .en_title {
        ${tw`text-12pxr xs:text-13pxr`}
    }
    .swiper-button-next {
        ${tw`absolute top-1/2 -translate-y-1/2 left-8pxr z-10 cursor-pointer`}
    }
    .swiper-button-prev {
        ${tw`absolute top-1/2 -translate-y-1/2 right-8pxr z-10 cursor-pointer`}
    }
    .swiper-pagination {
        ${tw`w-full flex justify-center gap-x-8pxr my-6pxr absolute bottom-6pxr z-10`}
    }
    .swiper-pagination-bullet {
        ${tw`inline-block w-8pxr h-8pxr bg-white rounded-full opacity-70 cursor-pointer`}
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        ${tw`bg-[#F57377]`}
    }
    .calender table th,
    .calender table td {
        ${tw`py-[3.5%] text-center`}
    }
`;
const MAN_CONTACT_DATA = {
    type: "man",
    data: [
        {
            type: "groom",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "father",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "mather",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
    ],
};
const WOMAN_CONTACT_DATA = {
    type: "woman",
    data: [
        {
            type: "bride",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "father",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "mather",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
    ],
};
const GALLERYIEMS = [
    { src: Image_1, span: 1 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 1 },
    { src: Image_1, span: 1 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 1 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 1 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 2 },
    { src: Image_1, span: 1 },
    // 추가 이미지들
];
export default function Home() {
    const [modalState, setModalState] = useState(null);
    const [interviewMore, setInterviewMore] = useState(false);
    const [activeGallery, setActiveGallery] = useState(null);
    const handleGalleryItemClick = (index) => {
        setActiveGallery(index);
        setModalState("gallery");
    };
    const handleModalCloseClick = (state, type) => {
        setModalState(state);
        setActiveGallery(state);
    };

    return (
        <Wrapper>
            <SnowAnimation />

            <div className=" max-w-[450px] mx-auto pb-80pxr relative z-[2]">
                <div className="mb-[21.34%] px-[6.67%]">
                    <div className="pt-48pxr pb-30pxr flex flex-col items-center">
                        <span className="text-30pxr">
                            2024
                            <span>/</span>
                            11
                            <span>/</span>
                            03
                        </span>
                        <span>SUNDAY</span>
                    </div>

                    <div>
                        <Image
                            className="dark:invert w-full img_cover rounded-t-full"
                            src={Image_1}
                            alt=""
                            width={1859}
                            height={2789}
                            layout="responsive"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <span className="mb-[4.45%] contents-title">
                            길성재 &middot; 정수진
                        </span>
                        <p className="text-center contents-text">
                            2024년 11월 3일 일요일 오전 11시 30분
                            <br />
                            웨딩시티 신도림 7F, 아스타홀
                        </p>
                    </div>
                </div>
                {/* 연락하기 섹션 */}
                <div>
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-10pxr ">
                            <div className="en_title tracking-widest">
                                INVITATION
                            </div>
                            <div className="contents_title pb-30pxr">
                                소중한 분들을 초대합니다
                            </div>
                        </div>
                        <div className="space-y-[7.12%] leading-7 contents_text">
                            <p>
                                앞으로의 여정에서 같이 나아갈 한사람과
                                <br />
                                평생을 약속하기로 하였습니다.
                            </p>
                            <p>
                                우연으로 시작한 만남이 운명이 되었고
                                <br />
                                서로의 가장 친한 벗이자 반려가 되어
                                <br />
                                믿음으로 함께 하고자 합니다.
                            </p>
                            <p>
                                가을이 깊어지는 그 날
                                <br /> 자리를 빛내어 주시면 <br />
                                더없는 기쁨이 되겠습니다.
                            </p>
                        </div>
                    </div>
                    <div className="mb-[13.34%]">
                        <div className="px-[7.34%] overflow-hidden">
                            <Image
                                className={`w-full aspect-[3/2] object-cover rounded-xl duration-500`}
                                src={Image_1}
                                alt=""
                                layout="responsive"
                                width={1859}
                                height={2789}
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center contents_text mt-[4.44%]">
                            <p>
                                <span className="font-semibold">
                                    {" "}
                                    길성재 &middot; 길성재{" "}
                                </span>
                                의 장남{" "}
                                <span className="font-semibold">길성재</span>
                            </p>
                            <p>
                                <span className="font-semibold">
                                    {" "}
                                    길성재 &middot; 길성재
                                </span>{" "}
                                의 장녀{" "}
                                <span className="font-semibold">정수진</span>
                            </p>
                        </div>

                        <div className="flex justify-center  pt-[7.34%]">
                            <button
                                className="flex items-center justify-center gap-x-6pxr w-[120px] ss:w-[140px] xs:w-[180px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                                onClick={() => {
                                    setModalState("phone");
                                }}
                            >
                                <PhoneIcon
                                    className="w-12pxr xs:w-16pxr h-12pxr xs:h-16pxr"
                                    width={16}
                                    height={16}
                                />
                                <span>연락하기</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 인터뷰 섹션 */}
                <div>
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-10pxr ">
                            <div className="en_title tracking-widest">
                                INTERVIEW
                            </div>
                            <div className="contents_title pb-30pxr">
                                우리 두 사람의 이야기
                            </div>
                        </div>
                        <div className="leading-7 contents_text">
                            <p>
                                결혼을 앞두고 저희 두 사람의
                                <br />
                                인터뷰를 준비했습니다.
                            </p>
                        </div>
                    </div>
                    <div className="mb-[13.34%]">
                        <div className="px-[7.34%] overflow-hidden">
                            <Image
                                className={`w-full aspect-[3/2] object-cover rounded-xl duration-500`}
                                src={
                                    "https://res.cloudinary.com/dqetywuo0/image/upload/v1726322692/image_1_ntrqlf.jpg"
                                }
                                alt=""
                                width={1859}
                                height={2789}
                                layout="responsive"
                            />
                        </div>

                        <div className="flex justify-center  pt-[7.34%]">
                            <button
                                className="flex items-center justify-center gap-x-6pxr w-[180px] ss:w-[200px] xs:w-[240px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                                onClick={() => {
                                    setModalState("interview");
                                }}
                            >
                                <EnvelopeIcon
                                    className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                    width={16}
                                    height={16}
                                />
                                <span>신랑 & 신부의 인터뷰 보기</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 갤러리 섹션 */}
                <div>
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-10pxr ">
                            <div className="en_title tracking-widest">
                                GALLERY
                            </div>
                            <div className="contents_title pb-30pxr">
                                새로운 시작의 준비
                            </div>
                        </div>
                    </div>
                    <div className="mb-[13.34%]">
                        <GalleryGrid
                            onGalleryItemClick={handleGalleryItemClick}
                            data={GALLERYIEMS}
                        />
                    </div>
                </div>
                {/* 달력 섹션 */}
                <div className="mb-[13.34%]">
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-6pxr border-b ">
                            <div className="text-18pxr ss:text:20pxr xs:text-24pxr tracking-widest">
                                2024.11.03
                            </div>
                            <div className="contents_title pb-30pxr">
                                일요일 오전 11시 30분
                            </div>
                        </div>
                    </div>
                    <div className="calender pb-[7.34%] mx-[10%] border-b">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-[#e06363]">일</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th className="text-[#c4eaff]">토</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>1</td>
                                    <td className="text-[#c4eaff]">2</td>
                                </tr>
                                <tr>
                                    <td className="bg-[#e06363] rounded-full">
                                        3
                                    </td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td className="text-[#c4eaff]">9</td>
                                </tr>
                                <tr>
                                    <td className="text-[#e06363]">10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td className="text-[#c4eaff]">16</td>
                                </tr>
                                <tr>
                                    <td className="text-[#e06363]">17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td className="text-[#c4eaff]">23</td>
                                </tr>
                                <tr>
                                    <td className="text-[#e06363]">24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td className="text-[#c4eaff]">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Countdown />
                </div>
                {/* 오시는길 섹션 */}
                <div>
                    <div className="text-center p-[7.34%]">
                        <div className=" space-y-10pxr ">
                            <div className="en_title tracking-widest">
                                LOCATION
                            </div>
                            <div className="contents_title pb-30pxr">
                                오시는 길
                            </div>
                        </div>

                        <div>
                            <div>라비에벨웨딩홀</div>
                            <div>대전 서구 계백로 1108 라비에벨 웨딩홀</div>
                            <div>Tel. 042-485-1515</div>
                        </div>
                    </div>
                    <div className="mb-[13.34%] ">
                        <div className="relative pb-[71.12%]">
                            <KakaoMap />
                        </div>
                        <div className="flex justify-center  pt-[7.34%]">
                            <button
                                className="flex items-center justify-center gap-x-6pxr w-[180px] ss:w-[200px] xs:w-[240px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                                onClick={() => {
                                    setModalState("sketch-map");
                                }}
                            >
                                <MapIcon
                                    className="w-14pxr xs:w-18pxr h-14pxr xs:h-18pxr"
                                    width={16}
                                    height={16}
                                />
                                <span>약도 보기</span>
                            </button>
                        </div>
                        <div>{/* <NavButton /> */}</div>
                    </div>
                </div>
            </div>
            {/* 연락하기 모달 */}
            <ModalBack
                action={modalState === "phone"}
                closeHandle={setModalState}
            >
                <div
                    className={`flex flex-col justify-start items-center pt-[10%] xs:pt-[15%] max-w-[450px] w-full`}
                >
                    <div className="mb-[11.12%] flex flex-col justify-start items-center">
                        <p className="contents_text">CONACT</p>
                        <p className="contents_title">연락하기</p>
                    </div>
                    <div className="w-[90%] space-y-[20%] contents_text">
                        <Contact info={MAN_CONTACT_DATA} />
                        <Contact info={WOMAN_CONTACT_DATA} />
                    </div>
                </div>
            </ModalBack>
            {/* 인터뷰 모달 */}
            <ModalBack
                action={modalState === "interview"}
                closeHandle={setModalState}
            >
                <div
                    className={` w-full max-w-[450px] pb-[7.34%] pt-[10%] xs:pt-[15%]`}
                >
                    <div className="w-full pb-[11.12%] flex flex-col justify-start items-center">
                        <p className="contents_text">INTERVIEW</p>
                        <p className="contents_title">우리들의 인터뷰</p>
                    </div>
                    <div className=" mx-[4.45%] ">
                        <QuestionBox
                            title={" Q1. 배우자의 첫인상은 어땠나요 ?"}
                        >
                            🤵🏻 신랑 김진호
                            <br />
                            <br />
                            드디어 장가갑니다! 😊 먼저 인생에서 가장 큰 결심을
                            할 수 있게 해준 예비 신부에게 너무 고맙습니다.
                            <br />
                            <br />
                            가족이라는 단어를 함께 한다는 것은 정말 설레고
                            아름다운 일이지만 그만큼 책임감을 더 갖고
                            살아야겠다고 다짐했습니다.
                            <br />
                            <br />
                            <br />
                            👰🏻&zwj;♀️ 신부 이나은
                            <br />
                            <br />
                            오래된 연인에서 이제는 서로의 부부가 되기로 약속
                            했습니다!
                            <br />
                            <br />
                            아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                            옆을 든든하게 지켜주면서 큰 행복을 준,
                        </QuestionBox>
                        <QuestionBox
                            title={" Q1. 배우자의 첫인상은 어땠나요 ?"}
                        >
                            🤵🏻 신랑 김진호
                            <br />
                            <br />
                            드디어 장가갑니다! 😊 먼저 인생에서 가장 큰 결심을
                            할 수 있게 해준 예비 신부에게 너무 고맙습니다.
                            <br />
                            <br />
                            가족이라는 단어를 함께 한다는 것은 정말 설레고
                            아름다운 일이지만 그만큼 책임감을 더 갖고
                            살아야겠다고 다짐했습니다.
                            <br />
                            <br />
                            <br />
                            👰🏻&zwj;♀️ 신부 이나은
                            <br />
                            <br />
                            오래된 연인에서 이제는 서로의 부부가 되기로 약속
                            했습니다!
                            <br />
                            <br />
                            아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                            옆을 든든하게 지켜주면서 큰 행복을 준,
                        </QuestionBox>

                        <QuestionBox
                            title={" Q1. 배우자의 첫인상은 어땠나요 ?"}
                        >
                            🤵🏻 신랑 김진호
                            <br />
                            <br />
                            드디어 장가갑니다! 😊 먼저 인생에서 가장 큰 결심을
                            할 수 있게 해준 예비 신부에게 너무 고맙습니다.
                            <br />
                            <br />
                            가족이라는 단어를 함께 한다는 것은 정말 설레고
                            아름다운 일이지만 그만큼 책임감을 더 갖고
                            살아야겠다고 다짐했습니다.
                            <br />
                            <br />
                            <br />
                            👰🏻&zwj;♀️ 신부 이나은
                            <br />
                            <br />
                            오래된 연인에서 이제는 서로의 부부가 되기로 약속
                            했습니다!
                            <br />
                            <br />
                            아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                            옆을 든든하게 지켜주면서 큰 행복을 준,
                        </QuestionBox>
                        {!interviewMore && (
                            <div className="flex justify-center  pb-[7.34%]">
                                <button
                                    className="flex items-center justify-center gap-x-6pxr w-[180px] ss:w-[200px] xs:w-[240px] border border-[#e1e1e1] rounded-10pxr    py-4pxr xs:py-8pxr contents_text"
                                    onClick={() => {
                                        setInterviewMore(true);
                                    }}
                                >
                                    <span>더보기</span>
                                </button>
                            </div>
                        )}
                        {interviewMore && (
                            <QuestionBox
                                title={" Q1. 배우자의 첫인상은 어땠나요 ?"}
                            >
                                🤵🏻 신랑 김진호
                                <br />
                                <br />
                                드디어 장가갑니다! 😊 먼저 인생에서 가장 큰
                                결심을 할 수 있게 해준 예비 신부에게 너무
                                고맙습니다.
                                <br />
                                <br />
                                가족이라는 단어를 함께 한다는 것은 정말 설레고
                                아름다운 일이지만 그만큼 책임감을 더 갖고
                                살아야겠다고 다짐했습니다.
                                <br />
                                <br />
                                <br />
                                👰🏻&zwj;♀️ 신부 이나은
                                <br />
                                <br />
                                오래된 연인에서 이제는 서로의 부부가 되기로 약속
                                했습니다!
                                <br />
                                <br />
                                아직은 남자친구라는 말이 더 익숙하지만 그동안 제
                                옆을 든든하게 지켜주면서 큰 행복을 준,
                            </QuestionBox>
                        )}
                    </div>
                </div>
            </ModalBack>
            {/* 갤러리 모달 */}
            <ModalBack
                action={modalState === "gallery"}
                type={"gallery"}
                closeHandle={handleModalCloseClick}
            >
                <div className="flex  items-center w-full h-full">
                    <div
                        className={`flex justify-center items-center w-full max-w-[450px] mx-auto relative`}
                    >
                        {modalState === "gallery" && (
                            <SwiperSection
                                data={GALLERYIEMS}
                                activeIndex={activeGallery}
                            />
                        )}
                    </div>
                </div>
            </ModalBack>
            {/* 약도 모달*/}
            <ModalBack
                action={modalState === "sketch-map"}
                closeHandle={handleModalCloseClick}
                className={"justify-center"}
            >
                <div className="w-full max-w-[600px] self-center">
                    <Image
                        className={`w-full rounded-xl h-auto`}
                        src={
                            "https://res.cloudinary.com/dqetywuo0/image/upload/v1726323960/KakaoTalk_20240914_232501529_c99wil.jpg"
                        }
                        alt=""
                        width={600}
                        height={600}
                        layout="responsive"
                    />
                </div>
            </ModalBack>
        </Wrapper>
    );
}
