import Image from "next/image";

import { SectionDiv } from "@/components/section";
import { homeData } from "@/accents/content/home";

export default function InfoSection() {
    return (
        <section>
            <SectionDiv className={`p-10 gap-10`}>
                <div
                    className={`
                        lg:flex-row
                        flex gap-10 flex-col
                    `}
                >
                    <Image
                        src={homeData.staticData.g1.img}
                        alt="co-location Caas"
                        className="lg:w-[40%] sm:w-[75%] w-[90%]"
                    />
                    <div className="flex flex-col gap-8 justify-center">
                        <h1 className="text-4xl font-semibold">
                            {homeData.staticData.g1.title}
                        </h1>
                        <ul className="list-disc ml-5 text-[--text-var-color]">
                            {homeData.staticData.g1.list.map((val, index) => (
                                <li key={index}>{val}</li>
                            ))}
                        </ul>
                        <article className="text-lg">
                            {homeData.staticData.g1.detail}
                        </article>
                    </div>
                </div>

                <div
                    className={`
                        lg:flex-row
                        flex gap-10 flex-col
                    `}
                >
                    <div className="flex flex-col gap-8 justify-center">
                        {
                            homeData.staticData.g2.main.map((val) => (
                                <div>
                                    <h1 className="text-4xl font-semibold">
                                        {val.title}
                                    </h1>
                                    <ul className="list-disc ml-5 mt-5 text-[--text-var-color]">
                                        {val.list.map((val, index) => (
                                            <li key={index}>{val}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <Image
                        src={homeData.staticData.g2.img}
                        alt="co-location Caas"
                        className="lg:w-[50%] sm:w-[75%] w-[90%]"
                    />
                </div>

            </SectionDiv>
        </section>
    )
}