'use client'
import { data } from "@/accents/content/content";
import { Button } from "@/components/button";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React,{ useRef } from "react";
import reviweImg from "@/accents/images/14.png";

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
                    {data.home.section6.users.map((val, index) => (
                        <div key={index} className="w-full p-5">
                            <Image src={val} alt="loading" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex gap-5 flex-col items-center justify-center">
                <h1 className="text-4xl text-[--bg-color] text-center">{data.home.section6.title}</h1>
                <Button
                    label={data.home.section6.btn}
                    variant="outline"
                    className="hover:bg-[#00000019] text-[--bg-color]"
                />
            </div>
        </section>
    );
}
