'use client'
import { contactData } from "@/accents/content/contact";
import { Map } from "@/components/map";
import { SectionDiv } from "@/components/section";


export default function MainLocation() {
    return (
        <section>
            <SectionDiv
                className={`
                        lg:flex-row
                        flex lg:gap-10 gap-[5rem] flex-col py-[8rem] justify-between px-5 items-center
                    `}
            >
                <div className="flex flex-col gap-8 items-start lg:justify-start">
                    <h1 className="text-5xl font-semibold text-[--highlite-color]">
                        {contactData.mainOffice.title}
                    </h1>
                    <div>
                        <h1>{contactData.mainOffice.address.title}</h1>
                        <p className="text-[--text-var-color] text-left ">
                        {contactData.mainOffice.address.detail.map((val) => {
                            return <span>{val} <br/></span>;
                        })}
                        </p>
                    </div>
                    <div>
                        <h1>{contactData.mainOffice.contact.title}</h1>
                        <p className="text-[--text-var-color] text-left ">
                            {contactData.mainOffice.contact.c1}<br />{contactData.mainOffice.contact.c2}
                        </p>
                    </div>
                    <div>
                        <h1>{contactData.mainOffice.timing.title}</h1>
                        <p className="text-[--text-var-color] text-left ">
                        {contactData.mainOffice.timing.detail.map((val) => {
                            return <span>{val} <br/></span>;
                        })}
                        </p>
                    </div>
                    <p><span>{contactData.mainOffice.email.title}</span><span>{contactData.mainOffice.email.id}</span></p>
                </div>
                <div className="bg-black lg:w-[50%] sm:w-[80%] w-[100%] h-[30rem] rounded-xl">
                    <Map center={contactData.mainOffice.location.center} zoom={contactData.mainOffice.location.zoom} />
                </div>
            </SectionDiv>
        </section>
    )
}