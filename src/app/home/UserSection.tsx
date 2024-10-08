'use client'
import { homeData } from "@/accents/content/home";
import { Button } from "@/components/button";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React,{ useRef } from "react";

export default function UserSection() {
    let sliderRef = useRef<Slider | null>(null);
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <section className="bg-[--primary-color] py-10 flex flex-col gap-5">
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {homeData.usersSec.users.map((val, index) => (
                        <div key={index} className="w-full p-5">
                            <Image src={val} alt="loading" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex gap-5 flex-col items-center justify-center">
                <h1 className="text-4xl text-[--bg-color] text-center">{homeData.usersSec.title}</h1>
                <Button
                    label={homeData.usersSec.btn}
                    variant="outline"
                    className="hover:bg-[#00000019] text-[--bg-color]"
                />
            </div>
        </section>
    );
}
