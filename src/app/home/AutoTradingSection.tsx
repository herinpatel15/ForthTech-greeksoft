import Image from "next/image";

import hero1 from '../../accents/images/preview.png'
import { Card, CardDiv } from "@/components/card";
import { ClockIcon } from "@/components/svgs";

export default function AutoTradingSection() {
    return (
        <section
            className="bg-[--bg-var-color]"
        >
            <div
                className={`
                    max-w-screen-xl
                    mx-auto p-5 py-10
                    flex flex-col justify-center items-center
                `}
            >
                <h1 className="text-3xl font-semibold text-center">
                    Greeksoft Automated Trading Solutions
                </h1>
                <p className="text-center">
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
                        src={hero1}
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
                            <Card className="bg-[--bg-color] p-5 max-w-[280px] shadow-card-s">
                                <CardDiv className="items-start">
                                    <ClockIcon theme="#1a41b6" />
                                </CardDiv>
                                <CardDiv>
                                    <p className="text-lg text-center text-[--highlite-color] font-semibold">Fully Automated low latency high frequency order routing system.</p>
                                </CardDiv>
                            </Card>

                            <Card className="bg-[--bg-color] p-5 max-w-[280px] shadow-card-s">
                                <CardDiv className="items-start">
                                    <ClockIcon theme="#1a41b6" />
                                </CardDiv>
                                <CardDiv>
                                    <p className="text-lg text-center text-[--highlite-color] font-semibold">Fully Automated low latency high frequency order routing system.</p>
                                </CardDiv>
                            </Card>
                        </div>

                        <div
                            className={`
                                sm:flex-row
                                flex gap-5 flex-col
                            `}
                        >
                            <Card className="bg-[--bg-color] p-5 max-w-[280px] shadow-card-s">
                                <CardDiv className="items-start">
                                    <ClockIcon theme="#1a41b6" />
                                </CardDiv>
                                <CardDiv>
                                    <p className="text-lg text-center text-[--highlite-color] font-semibold">Fully Automated low latency high frequency order routing system.</p>
                                </CardDiv>
                            </Card>

                            <Card className="bg-[--bg-color] p-5 max-w-[280px] shadow-card-s">
                                <CardDiv className="items-start">
                                    <ClockIcon theme="#1a41b6" />
                                </CardDiv>
                                <CardDiv>
                                    <p className="text-lg text-center text-[--highlite-color] font-semibold">Fully Automated low latency high frequency order routing system.</p>
                                </CardDiv>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}