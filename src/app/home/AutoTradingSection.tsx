import Image from "next/image";

import { Card, CardDiv } from "@/components/card";
import { SectionDiv } from "@/components/section";
import { homeData } from "@/accents/content/home";

export default function AutoTradingSection() {
    return (
        <section className="bg-[--bg-var-color]">
            <SectionDiv className={` p-5 py-10 justify-center items-center`}>
                <h1 className="text-3xl font-semibold text-center">
                    Greeksoft Automated Trading Solutions
                </h1>
                <p className="text-center text-[--text-var-color] mt-5">
                    A solution to suffice all your trading needs
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
                        src={homeData.autoTrad.img}
                        alt="hero1"
                    />
                    <div
                        className={`
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
                                homeData.autoTrad.cards.g1.map((val) => (
                                    <Card className="bg-[--bg-color] p-5 max-w-[280px] w-full h-[200px] shadow-card-s">
                                        <CardDiv>
                                            {val.svg}
                                        </CardDiv>
                                        <CardDiv>
                                            <p className="text-lg text-center text-[--highlite-color] font-semibold">
                                                {val.title}
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
                                homeData.autoTrad.cards.g2.map((val) => (
                                    <Card className="bg-[--bg-color] p-5 max-w-[280px] w-full h-[200px] shadow-card-s">
                                        <CardDiv>
                                            {val.svg}
                                        </CardDiv>
                                        <CardDiv>
                                            <p className="text-lg text-center text-[--highlite-color] font-semibold">
                                                {val.title}
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