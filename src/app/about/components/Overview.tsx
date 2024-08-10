import { aboutData } from "@/accents/content/about";
import { SectionDiv } from "@/components/section";
import Image from "next/image";

export default function Overview() {
    return (
        <section className="my-5">
            <SectionDiv
                    className={`
                        lg:flex-row
                        flex gap-10 flex-col py-10 justify-between px-5 items-center
                    `}
                >
                    <div className="flex flex-col gap-8 justify-center">
                        <h1 className="text-2xl font-semibold text-[--highlite-color]">
                            {aboutData.overview.title}
                        </h1>
                        {
                            aboutData.overview.detail.map((val) => (
                                <p className="text-[--text-var-color]">{val}</p>
                            ))
                        }
                    </div>

                    <Image
                        src={aboutData.overview.img}
                        alt="co-location Caas"
                    />
                </SectionDiv>
        </section>
    )
}