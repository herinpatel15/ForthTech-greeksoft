import { Card, CardDiv } from "@/components/card";
import { ClockIcon } from "@/components/svgs";
import Image from "next/image";

import retailTrading from '../../accents/images/mobile_app_gif.gif'
import { SectionDiv } from "@/components/section";
import { data } from "@/accents/content/content";

export default function RetailTrading() {
    return (
        <section
            className="bg-[--bg-var-color]"
        >
            <SectionDiv className={`p-5 py-10 justify-center items-center`}>
                <h1 className="text-3xl font-semibold text-center">
                    {data.home.section3.title}
                </h1>
                <p className="text-center text-[--text-var-color] mt-5">
                    {data.home.section3.detail}
                </p>
                <div
                    className={`
                        w-full mt-10
                        lg:flex-row
                        flex-col
                        flex gap-10 items-center justify-center
                    `}
                >
                    <Image
                        src={data.home.section3.img}
                        alt="hero1"
                    />
                    <div
                        className={`
                            bg-[--bg-color] shadow-card-s rounded-xl p-5
                            flex flex-col gap-5 items-center justify-center
                        `}
                    >
                        <div
                            className={`
                                sm:flex-row
                                flex gap-5 flex-col
                            `}
                        >
                            {
                                data.home.section3.cards.g1.map((val) => (
                                    <Card className=" p-5 max-w-[280px] w-full h-full items-center justify-center">
                                        <CardDiv>
                                            {val.svg}
                                        </CardDiv>
                                        <CardDiv>
                                            <p className="text-lg text-center">
                                                {val.detail}
                                            </p>
                                        </CardDiv>
                                    </Card>
                                ))
                            }
                        </div>

                        <div
                            className={`
                                sm:flex-row
                                flex gap-5 flex-col
                            `}
                        >
                            {
                                data.home.section3.cards.g2.map((val) => (
                                    <Card className=" p-5 max-w-[280px] w-full h-full items-center justify-center">
                                        <CardDiv>
                                            {val.svg}
                                        </CardDiv>
                                        <CardDiv>
                                            <p className="text-lg text-center">
                                                {val.detail}
                                            </p>
                                        </CardDiv>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </SectionDiv>
        </section>
    )
}