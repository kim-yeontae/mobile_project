import { useState, useEffect } from "react";
import Image from "next/image";
import ModalBack from "@/components/ModalBack";
import SnowAnimation from "@/components/Snows";
import Contact from "@/components/Contact";
import QuestionBox from "@/components/QuestionBox";
import GalleryGrid from "@/components/GalleryGrid";
import SwiperSection from "@/components/SwiperSection";
import Countdown from "@/components/CountDown";
import KakaoMap from "@/components/KakaoMap";
import NavButton from "@/components/NavButton";
import Accordion from "@/components/Accordion";
import BgMusic from "@/components/BgMusic";
import Modal from "@/components/Modal";
import ShareButtonBox from "@/components/ShareButtonBox";
import { XMarkIcon } from "@heroicons/react/24/solid";
import tw, { styled } from "twin.macro";
import { supabase } from "@/lib/initSupabase";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/outline";
const Image_1 =
    "https://res.cloudinary.com/dqetywuo0/image/upload/v1726322692/image_1_ntrqlf.jpg";

const Wrapper = styled.div`
    ${tw`h-full overflow-x-hidden`}
    .contents_title {
        ${tw`text-16pxr ss:text-18pxr xs:text-20pxr`}
    }
    .contents_text {
        ${tw`text-14pxr xs:text-16pxr`}
    }
    .map_title {
        ${tw`text-14pxr xs:text-15pxr`}
    }
    .map_contents {
        ${tw`text-13pxr xs:text-14pxr`}
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
        ${tw`absolute top-1/2 -translate-y-1/2 right-8pxr z-10 cursor-pointer`}
    }
    .swiper-button-prev {
        ${tw`absolute top-1/2 -translate-y-1/2 left-8pxr z-10 cursor-pointer`}
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
            type: "신랑",
            name: "길성재",
            number: "010-4872-8824",
            account: "카카오뱅크",
            account_number: "3333216490741",
            kakao_qr_code: "FGlm2YKSt",
        },
        {
            type: "아버지",
            name: "길철수",
            number: "010-2642-2355",
            account: "농협",
            account_number: "204030-52-1394",
        },
        {
            type: "어머니",
            name: "강해자",
            number: "010-8897-1187",
            account: "농협",
            account_number: "204030-52-1394",
        },
    ],
};
const WOMAN_CONTACT_DATA = {
    type: "woman",
    data: [
        {
            type: "신부",
            name: "정수진",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "아버지",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
        {
            type: "어머니",
            name: "길성재",
            number: "010-4872-8824",
            account: "",
            account_number: "",
        },
    ],
};
const GALLERYIEMS = [
    { src: Image_1, span: 1 },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002361/JS100307_%EC%B5%9C%EC%A2%85_sgwrxt.jpg",
        span: 2,
    },
    { src: Image_1, span: 1 },
    { src: Image_1, span: 1 },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002331/JS108103_%EC%B5%9C%EC%A2%85_gh0pum.jpg",
        span: 2,
    },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002330/JS108895_%EC%B5%9C%EC%A2%85_eua5yn.jpg",
        span: 2,
    },
    { src: Image_1, span: 1 },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002331/JS108180_%EC%B5%9C%EC%A2%85_j2c8hl.jpg",
        span: 2,
    },
    { src: Image_1, span: 1 },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002331/JS109609_%EC%B5%9C%EC%A2%85_qxo9lu.jpg",
        span: 2,
    },
    {
        src: "https://res.cloudinary.com/dqetywuo0/image/upload/v1727002331/JS109223_%EC%B5%9C%EC%A2%85_wyasmy.jpg",
        span: 2,
    },
    { src: Image_1, span: 1 },
    // 추가 이미지들
];
export default function Home() {
    const [modalState, setModalState] = useState(null);
    const [isModal, setIsModal] = useState(null);
    const [interviewMore, setInterviewMore] = useState(false);
    const [activeGallery, setActiveGallery] = useState(null);
    const [guestName, setGuestName] = useState(null);
    const [guestPassword, setGuestPassword] = useState(null);
    const [guestText, setGuestText] = useState(null);
    const [visitList, setVisitList] = useState([]);
    useEffect(() => {
        fetchVisit();
    }, []);
    const handleGalleryItemClick = (index) => {
        setActiveGallery(index);
        setModalState("gallery");
    };
    const handleModalCloseClick = (state, type) => {
        setModalState(state);
        setActiveGallery(state);
    };
    const guestDataReset = () => {
        setGuestName(null);
        setGuestPassword(null);
        setGuestText(null);
    };
    const fetchVisit = async () => {
        const { data, error } = await supabase
            .from("visit")
            .select("name, id, contents,created_at");

        if (error) console.log("error", error);
        else {
            console.log(data);
            setVisitList(data);
        }
    };
    const addItem = async () => {
        const value = {
            name: guestName,
            contents: guestText,
            password: guestPassword,
        };
        console.log(value);
        const { error } = await supabase.from("visit").insert(value);
        if (error) console.log("error", error);
        fetchVisit();
    };
    const deleltItem = async (id) => {
        // 비밀번호 입력을 위한 confirm 대화상자
        const inputPassword = prompt("비밀번호를 입력하세요:");
        if (inputPassword === null) {
            return; // 함수 종료
        }
        if (inputPassword === null || inputPassword === "") {
            alert("비밀번호를 입력해야 합니다.");
            return;
        }

        // 비밀번호 확인 로직 (서버에 올바른 비밀번호인지 확인)
        const { data, error } = await supabase
            .from("visit") // 게시물이 저장된 테이블
            .select("password") // 비밀번호가 저장된 열
            .eq("id", id) // 게시물 ID로 검색
            .single(); // 하나의 레코드만 가져옴

        if (error || !data) {
            alert("게시물을 찾을 수 없습니다.");
            return;
        }

        // 비밀번호 확인
        if (data.password !== inputPassword) {
            alert("비밀번호가 올바르지 않습니다.");
            return;
        }

        // 비밀번호가 올바르면 게시물 삭제
        const { error: deleteError } = await supabase
            .from("visit")
            .delete()
            .eq("id", id); // 게시물 ID로 삭제

        if (deleteError) {
            alert("게시물 삭제 중 오류가 발생했습니다.");
            return;
        }

        alert("게시물이 성공적으로 삭제되었습니다.");
        fetchVisit();
    };
    const formatDate = (isoString) => {
        const date = new Date(isoString);

        // 연, 월, 일을 각각 가져오고, 두 자리 수로 포맷팅
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 1을 더함
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`; // yyyy-mm-dd 형식으로 반환
    };
    return (
        <>
            <div className="bg_wrap">
                <SnowAnimation />
                <BgMusic />
            </div>
            <Wrapper>
                <div className=" max-w-[450px] mx-auto pb-80pxr relative z-[2]">
                    <div className="mb-[21.34%] px-[6.5%]">
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
                                className=" w-full img_cover rounded-t-full"
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
                                2024년 11월 3일 일요일 오후 12시
                                <br />
                                대전 라비에벨웨딩홀
                            </p>
                        </div>
                    </div>
                    {/* 연락하기 섹션 */}
                    <div data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
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
                                    className={`w-full aspect-[3/2] object-cover rounded-xl`}
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
                                    <span className="font-semibold">
                                        길성재
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        {" "}
                                        길성재 &middot; 길성재
                                    </span>{" "}
                                    의 장녀{" "}
                                    <span className="font-semibold">
                                        정수진
                                    </span>
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
                    <div data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
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
                    <div data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
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
                    <div className="mb-[13.34%]" data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
                            <div className=" space-y-6pxr border-b ">
                                <div className="text-18pxr ss:text:20pxr xs:text-24pxr tracking-widest">
                                    2024.11.03
                                </div>
                                <div className="contents_title pb-30pxr">
                                    일요일 오후 12시
                                </div>
                            </div>
                        </div>
                        <div className="calender pb-[6.5%] mx-[10%] border-b">
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
                    <div data-aos="fade-up">
                        <div className="text-center py-[6.5%] px-[2%] ss:p-[6.5%]">
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
                        </div>
                        {/* 교통정보 */}
                        <div className="mb-[13.34%] px-[6.5%] space-y-[5.33%]">
                            <div className="space-y-12pxr pb-[5%] border-b border-dotted">
                                <div className="map_title">내비게이션</div>
                                <div className="map_contents">
                                    원하시는 앱을 선택하시면 길안내가
                                    시작됩니다.
                                </div>
                                <NavButton modalHandler={setIsModal} />
                            </div>
                            <div className="space-y-12pxr pb-[5%] border-b border-dotted">
                                <div className="map_title">대중교통</div>
                                <div className="map_contents flex flex-col gap-y-10pxr">
                                    <span>
                                        ● 대전역 (201번,202번) &rarr;
                                        동방고등학교 하차 (건너편)
                                    </span>
                                    <span>
                                        ● 대전역/역전시장 (급행1, 급행2002 ,
                                        20번) &rarr; 가수원육교 , 가수원시장
                                        하차(도보 600M) 하차 (건너편)
                                    </span>
                                    <span>
                                        ● 대전복합터미널 (201번) &rarr;
                                        동방고등학교 하차 (건너편)
                                    </span>
                                    <span>
                                        ● 유성고속터미널 (114번) &rarr;
                                        동방고등학교 하차 (건너편)
                                    </span>
                                    <span>
                                        ● 동방고등학교 경유 : 114번, 212번,
                                        43번, 46번, 2002번, 47-1번
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-12pxr pb-[5%] border-b border-dotted">
                                <div className="map_title">고속도로</div>
                                <div className="map_contents flex flex-col gap-y-10pxr">
                                    <span>
                                        ● 하행선 : 서울출발 &rarr; 경부고속도로
                                        &rarr; 유성분기점 &rarr;
                                        호남고속도로&rarr; 서대전분기점 &rarr;
                                        남부순환고속도로 &rarr; 서대전 IC &rarr;
                                        라비에벨웨딩홀
                                    </span>
                                    <span>
                                        ● 상행선 : 부산출발 &rarr; 경부고속도로
                                        &rarr; 비룡분기점 &rarr; 산내분기점
                                        &rarr; 남부순환고속도로 &rarr; 서대전IC
                                        &rarr; 라이에벨웨딩홀
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-12pxr pb-[5%] border-b border-dotted">
                                <div className="map_title">
                                    네비게이션 주소 : 대전광역시 서구 계백로
                                    1108
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 마음전하기 섹션 */}
                    <div className="mb-[13.34%]" data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
                            <div className=" space-y-10pxr ">
                                <div className="en_title tracking-widest">
                                    ACCONT
                                </div>
                                <div className="contents_title pb-30pxr">
                                    마음 전하실 곳
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="pb-[7.34%] px-[6.5%] space-y-10pxr">
                            <div className="space-y-8pxr text-center break-keep  contents_text pb-[10%]">
                                <p>
                                    참석이 어려워 직접 축하를 전하지 못하는
                                    분들을 위해 계좌번호를 기재하였습니다.
                                </p>
                                <p>넓은 마음으로 양해 부탁드리겠습니다.</p>
                            </div>
                            <div className="space-y-12pxr">
                                <Accordion data={MAN_CONTACT_DATA} />
                                <Accordion data={WOMAN_CONTACT_DATA} />
                            </div>
                        </div>
                    </div>
                    {/* 방명록 섹션 */}
                    <div className="mb-[13.34%]" data-aos="fade-up">
                        <div className="text-center p-[6.5%]">
                            <div className=" space-y-10pxr ">
                                <div className="en_title tracking-widest">
                                    GUESTBOOK
                                </div>
                                <div className="contents_title pb-30pxr">
                                    방명록
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="pb-[7.34%] px-[6.5%] space-y-10pxr">
                            <div className="space-y-8pxr">
                                {visitList.map((item, index) => {
                                    return (
                                        <div
                                            key={"guestbook" + index}
                                            className="bg-[rgba(117,81,125,.5)] px-16pxr py-14pxr rounded-8pxr map_contents"
                                        >
                                            <div className="flex items-center justify-between pb-4pxr">
                                                <span className="font-semibold">
                                                    {item.name}
                                                </span>
                                                <span
                                                    onClick={() => {
                                                        deleltItem(item.id);
                                                    }}
                                                >
                                                    <XMarkIcon
                                                        className="w-20pxr xs:w-20pxr h-24pxr xs:h-24pxr cursor-pointer"
                                                        width={32}
                                                        height={32}
                                                        onClick={() => {}}
                                                    />
                                                </span>
                                            </div>
                                            <div>{item.contents}</div>
                                            <div>
                                                {formatDate(item.created_at)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => {
                                        setModalState("guestbook");
                                    }}
                                    className=" bg-[rgba(117,81,125,.5)] flex gap-x-4pxr xs:gap-x-8pxr items-center justify-center px-12pxr py-6pxr rounded-6pxr text-12pxr xs:text-13pxr"
                                >
                                    작성하기
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 공유하기 섹션 */}
                    <div className="mb-[13.34%] px-[6.5%]" data-aos="fade-up">
                        <div className="relative  rounded-xl overflow-hidden">
                            <Image
                                className={`w-full aspect-[3/2] object-cover`}
                                src={Image_1}
                                alt=""
                                layout="responsive"
                                width={1859}
                                height={2789}
                            />
                            <p className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.4)] flex items-end justify-end pr-20pxr contents_text pb-16pxr">
                                같은 하늘 아래 <br />
                                여러분의 축복 속에서 <br />
                                새로운 출발를 시작합니다. <br />
                                누구보다 이쁜사랑 ,<br /> 행복한 인생을
                                살겠습니다.
                                <br />
                                감사합니다.
                            </p>
                        </div>
                        <div className="flex justify-center  pt-[7.34%]">
                            <button
                                className="flex items-center justify-center gap-x-6pxr w-full border border-[#e1e1e1] rounded-10pxr py-4pxr xs:py-8pxr contents_text"
                                onClick={() => {
                                    setIsModal("share");
                                }}
                            >
                                공유하기
                            </button>
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
                                    가족이라는 단어를 함께 한다는 것은 정말
                                    설레고 아름다운 일이지만 그만큼 책임감을 더
                                    갖고 살아야겠다고 다짐했습니다.
                                    <br />
                                    <br />
                                    <br />
                                    👰🏻&zwj;♀️ 신부 이나은
                                    <br />
                                    <br />
                                    오래된 연인에서 이제는 서로의 부부가 되기로
                                    약속 했습니다!
                                    <br />
                                    <br />
                                    아직은 남자친구라는 말이 더 익숙하지만
                                    그동안 제 옆을 든든하게 지켜주면서 큰 행복을
                                    준,
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
                {/* 방명록 작성 모달 */}
                <ModalBack
                    action={modalState === "guestbook"}
                    closeHandle={handleModalCloseClick}
                    guestDataReset={guestDataReset}
                >
                    <div
                        className={`flex flex-col justify-start items-center pt-[10%] xs:pt-[15%] max-w-[450px] w-full`}
                    >
                        <div className="w-full pb-[4%] mb-[8%] flex flex-col justify-start items-center border-b border-dotted">
                            <p className="contents_title">방명록 작성하기</p>
                        </div>
                        <div className="w-[90%] contents_text">
                            <div className="space-y-[5%]">
                                <div className="flex items-center ">
                                    <div className="w-72pxr">이름</div>
                                    <input
                                        value={guestName || ""}
                                        onChange={(e) => {
                                            setGuestName(e.target.value);
                                        }}
                                        className="border rounded-4pxr flex-1 text-[#1a1a1a] px-6pxr py-2pxr"
                                    />
                                </div>
                                <div className="flex items-center ">
                                    <div className="w-72pxr">비밀번호</div>
                                    <input
                                        value={guestPassword || ""}
                                        onChange={(e) => {
                                            setGuestPassword(e.target.value);
                                        }}
                                        type="password"
                                        className="border rounded-4pxr flex-1 text-[#1a1a1a] px-6pxr py-2pxr"
                                    />
                                </div>
                                <div className="flex">
                                    <div className="w-72pxr">내용</div>
                                    <textarea
                                        value={guestText || ""}
                                        onChange={(e) => {
                                            setGuestText(e.target.value);
                                        }}
                                        className="border rounded-4pxr flex-1 text-[#1a1a1a] px-6pxr py-4pxr"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    addItem();
                                    handleModalCloseClick(null);
                                    guestDataReset();
                                }}
                                className="flex w-full items-center justify-center gap-x-6pxr border border-[#e1e1e1] rounded-10pxr py-4pxr xs:py-8pxr contents_text mt-32pxr"
                            >
                                축하 글 남기기
                            </button>
                        </div>
                    </div>
                </ModalBack>

                {isModal === "navi" && (
                    <Modal
                        title={
                            "앱이 설치가 되어 있지 않거나 PC버전일 경우 실행이 되지 않을수 있습니다."
                        }
                        closeHandle={setIsModal}
                    />
                )}
                {isModal === "share" && (
                    <Modal closeHandle={setIsModal}>
                        <ShareButtonBox />
                    </Modal>
                )}
            </Wrapper>
        </>
    );
}
