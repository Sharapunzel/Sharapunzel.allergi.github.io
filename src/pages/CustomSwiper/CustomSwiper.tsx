import React, {CSSProperties} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import CustomSwiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./CustomSwiper.css";

import { useNavigate} from "react-router-dom";

interface ICustomSwiper{

    withDynamicDots?:boolean;
    withClickableDots?:boolean;
    withPagination:boolean;
    withLoop:boolean;
    slidesPerView:number;
    spaceIncrement:number;
    spaceBetween:number;
    items:any[];
    style_swiper?:CSSProperties | any | undefined;
    style_swiper_slide?:CSSProperties | undefined;
}

export default function CustomSwiper(
    {
        withDynamicDots,
        withClickableDots,
        withPagination,
        withLoop,
        slidesPerView,
        spaceIncrement,
        spaceBetween,
        items,
        style_swiper,
        style_swiper_slide}:ICustomSwiper){

    let ListItems:any = [];

    const navigate = useNavigate()

    if(items)
        if(items.length!=0)
            ListItems = items.map((item)=>{
                return (
                    <>
                        <SwiperSlide style={style_swiper_slide?style_swiper_slide:{width:"auto",height:"auto"}}>
                            {item}
                        </SwiperSlide>)
                    </>
                )
            })

    return (<>
            {items && items.length!=0 &&
                <>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: slidesPerView,
                            },
                            100: {
                                slidesPerView: slidesPerView + spaceIncrement,
                            },
                            200: {
                                slidesPerView: slidesPerView + (spaceIncrement*2),
                            },
                            300: {
                                slidesPerView: slidesPerView + (spaceIncrement*3),
                            },
                            400: {
                                slidesPerView: slidesPerView + (spaceIncrement*4),
                            },
                            500: {
                                slidesPerView: slidesPerView + (spaceIncrement*5),
                            },
                            600: {
                                slidesPerView: slidesPerView + (spaceIncrement*6),
                            },
                            700: {
                                slidesPerView: slidesPerView + (spaceIncrement*7),
                            },
                            800: {
                                slidesPerView: slidesPerView + (spaceIncrement*8),
                            },
                            900: {
                                slidesPerView: slidesPerView + (spaceIncrement*9),
                            },
                            1000: {
                                slidesPerView: slidesPerView + (spaceIncrement*10),
                            },
                            1100: {
                                slidesPerView: slidesPerView + (spaceIncrement*11),
                            },
                            1200: {
                                slidesPerView: slidesPerView + (spaceIncrement*12),
                            },
                            1300: {
                                slidesPerView: slidesPerView + (spaceIncrement*13),
                            },
                            1400: {
                                slidesPerView: slidesPerView + (spaceIncrement*14),
                            },
                            1500: {
                                slidesPerView: slidesPerView + (spaceIncrement*15),
                            },
                            1600: {
                                slidesPerView: slidesPerView + (spaceIncrement*16),
                            },
                            1700: {
                                slidesPerView: slidesPerView + (spaceIncrement*17),
                            },
                            1800: {
                                slidesPerView: slidesPerView + (spaceIncrement*18),
                            },
                            1900: {
                                slidesPerView: slidesPerView + (spaceIncrement*19),
                            },
                            2000: {
                                slidesPerView: slidesPerView + (spaceIncrement*20),
                            },
                            2100: {
                                slidesPerView: slidesPerView + (spaceIncrement*21),
                            },
                            2200: {
                                slidesPerView: slidesPerView + (spaceIncrement*22),
                            },
                            2300: {
                                slidesPerView: slidesPerView + (spaceIncrement*23),
                            }
                        }}
                        loop={withLoop}
                        spaceBetween={spaceBetween}
                        freeMode={true}
                        pagination={{
                            dynamicBullets: withDynamicDots,
                            clickable: withClickableDots,
                        }}
                        style={style_swiper}
                    >
                        {ListItems}
                    </Swiper>
                </>
            }
        </>
    );
}