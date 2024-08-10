import { Button } from "@/components/button";
import { Card, CardDiv } from "@/components/card";
import { SectionDiv } from "@/components/section";

import { homeData } from "@/accents/content/home"

export default function HeroSection() {
    return (
        <section>
            <SectionDiv className="p-10 gap-5">
                <h1 className="text-4xl font-bold text-center mt-10">{homeData.hero.tagLine[0]}</h1>
                <p className="text-center text-lg">{homeData.hero.pera}</p>
                <Button label={homeData.hero.btn} className="mx-auto my-5" />
                <div
                    className={`
                        my-5 p-5 rounded-xl
                        flex 
                        md:justify-evenly md:items-start md:flex-wrap md:flex-row
                        justify-center items-center flex-col  
                        shadow-card-s
                    `}
                >
                    {
                        homeData.hero.cards.map((val) => (
                            <Card className="items-center justify-center">
                                <CardDiv>{val.svg}</CardDiv>
                                <CardDiv>
                                    <h2 className="text-xl font-semibold text-center">
                                        {val.title}
                                    </h2>
                                    <p className="text-center text-[--text-var-color]">
                                        {val.detail}
                                    </p>
                                </CardDiv>
                            </Card>
                        ))
                    }
                </div>
            </SectionDiv>
        </section>
    )
}