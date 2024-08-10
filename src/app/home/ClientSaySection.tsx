'use client'
import { data } from "@/accents/content/content";
import { SectionDiv } from "@/components/section";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardDiv } from "@/components/card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientSaySection() {

    let sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    
                }
            }
        ]
    };

    return (
        <section>
            <SectionDiv className="py-10">
                <h1 className="text-3xl font-semibold text-center text-[--highlite-color]">
                    {data.home.section5.title}
                </h1>
                <p className="text-center text-[--text-var-color] mt-5">
                    {data.home.section5.detail}
                </p>
                <Slider ref={sliderRef} {...settings}>
                    {
                        data.home.section5.cards.map((val) => (
                            <div className="w-full flex items-center justify-center sm:p-10 p-5">
                                <Card className=" shadow-card-s py-10 px-10 min-w-full">
                                    <CardDiv>
                                        <article className="text-center text-lg">
                                            {val.reviwe}
                                        </article>
                                    </CardDiv>
                                    <CardDiv className="items-center">
                                        <Image src={val.img} alt="loding..." width={100} />
                                    </CardDiv>
                                    <CardDiv>
                                        <p className="text-center">{val.name}</p>
                                        <p className="text-center">{val.organizationName}</p>
                                    </CardDiv>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
            </SectionDiv>
        </section>
    )
}