'use client'
import { aboutData } from "@/accents/content/about";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Card, CardDiv } from "@/components/card";

export default function Evolution() {
    let sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1218,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 426,
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
        <section className="py-10">
            <h1 className="text-center text-4xl mb-5">
                {aboutData.evolution.title}
            </h1>
            <Slider ref={sliderRef} {...settings}>
                {
                    aboutData.evolution.cards.map((val) => (
                        <div className="w-full flex items-center justify-center p-5">
                            <Card className=" shadow-card-s py-8 px-5 min-w-full">
                                <CardDiv>
                                    <h1 className="text-xl text-[--primary-color] font-semibold">
                                        {val.year}
                                    </h1>
                                </CardDiv>
                                <CardDiv className="items-center">
                                    <h2 className="text-[--highlite-color] font-semibold">
                                        {val.title}
                                    </h2>
                                </CardDiv>
                                <CardDiv>
                                    <p className="text-center text-[--text-var-color]">
                                        {val.detail}
                                    </p>
                                </CardDiv>
                            </Card>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}