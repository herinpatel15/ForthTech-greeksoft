import { contactData } from "@/accents/content/contact";
import { Button } from "@/components/button";
import { SectionDiv } from "@/components/section";
import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <SectionDiv
                    className={`
                        lg:flex-row
                        flex lg:gap-10 gap-[5rem] flex-col py-[8rem] justify-between px-5 items-center
                    `}
                >
                    <div className="flex flex-col gap-8 lg:items-start lg:justify-start items-center">
                        <h1 className="text-5xl font-semibold text-[--highlite-color]">
                            {contactData.hero.title}
                        </h1>
                        <p className="text-[--text-var-color] lg:text-left text-center">{contactData.hero.detail}</p>
                        <Button label={contactData.hero.btn} />
                    </div>
                    <Image
                        src={contactData.hero.img}
                        alt="loding"
                    />
                </SectionDiv>
        </section>
    )
}