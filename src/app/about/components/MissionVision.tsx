import { aboutData } from "@/accents/content/about";
import { Card, CardDiv } from "@/components/card";
import { SectionDiv } from "@/components/section";
import Image from "next/image";

export default function MissinVision() {
    return (
        <section>
            <SectionDiv
                    className={`
                        lg:flex-row
                        flex gap-10 flex-col py-10 justify-between px-5 items-center
                    `}
                >
                    <Card className="max-w-full lg:w-[50%] sm:w-[80%] w-[990%]">
                        <CardDiv>
                            <Image
                                src={aboutData["mission&vision"].mission.img}
                                alt="loding"
                            />
                        </CardDiv>
                        <CardDiv className="items-start justify-start">
                        {
                            aboutData["mission&vision"].mission.detail.map((val) => (
                                <p className="my-2 text-left text-[--text-var-color]">{val}</p>
                            ))
                        }
                        </CardDiv>
                    </Card>

                    <Card className="max-w-full lg:w-[50%] sm:w-[80%] w-[990%]">
                        <CardDiv>
                            <Image
                                src={aboutData["mission&vision"].vision.img}
                                alt="loding"
                            />
                        </CardDiv>
                        <CardDiv>
                        {
                            aboutData["mission&vision"].vision.detail.map((val) => (
                                <p className="text-[--text-var-color]">{val}</p>
                            ))
                        }
                        </CardDiv>
                    </Card>

                    
                </SectionDiv>
        </section>
    )
}