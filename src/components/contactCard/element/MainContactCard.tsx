'use client'
import Image from "next/image"
import bgImg from '@/accents/images/ahmdabad_.png'
import { Mubai } from "@/components/svgs"
import { useCallback, useRef } from "react"
import { Map } from "@/components/map"
import { OfficeInfo } from '@/accents/content/contact'


const ContactCard = ({ data, center, zoom }: {
    data: OfficeInfo, 
    center: {
        "lat": number,
        "lng": number,
    },
    zoom: number
}) => {

    const cardRef = useRef<HTMLDivElement | null>(null)
    const imgRef = useRef<HTMLImageElement | null>(null)
    const mapRef = useRef<HTMLDivElement | null>(null)
    const detailRef = useRef<HTMLDivElement | null>(null)

    const handaleMouseEnter = useCallback(() => {
        if (imgRef.current && mapRef.current && detailRef.current) {
            imgRef.current.style.display = 'none';
            mapRef.current.style.display = 'block';
            detailRef.current.style.display = 'none';
        }
    }, [imgRef, mapRef, detailRef])

    const handaleMouseLeave = useCallback(() => {
        if (imgRef.current && mapRef.current && detailRef.current) {
            imgRef.current.style.display = 'flex';
            mapRef.current.style.display = 'none';
            detailRef.current.style.display = 'flex';
        }
    }, [imgRef, mapRef, detailRef])

    return (
        <div onMouseEnter={handaleMouseEnter} onMouseLeave={handaleMouseLeave} ref={cardRef} className={`
            z-10 w-[26rem] rounded-xl relative h-[25rem] shadow-card-s transition
        `}>
            <div className={`
                z-10 absolute top-0 left-0 rounded-xl h-full flex flex-col w-full
            `}>
                <Image
                    src={data.img}
                    alt="Ahmedabad Background"
                    className="rounded-t-xl"
                    ref={imgRef}
                    style={{ display: 'block' }}
                />
                <div ref={mapRef} style={{ display: "none" }} className=" w-full h-[70%] rounded-t-xl">
                    <Map center={center} zoom={zoom} />
                </div>
            </div>
            <div className={`
                z-20 p-5 absolute w-full bottom-0 flex flex-col gap-3 items-center justify-center
            `}>
                <div className="bg-white rounded-full">
                    {data.svg}
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-center">{data.city}</h2>
                    <p className="text-[--text-var-color] text-center">{data.detail}</p>
                </div>
                <div ref={detailRef} style={{ display: "flex" }} className="flex flex-col gap-3 text-lg ">
                    <p className="text-[--text-var-color] text-center cxs:text-base text-sm">
                        <span>Contact No: </span>
                        <span className="ml-3 text-[--highlite-color]">{data.contact1}</span>
                    </p>
                    <p className="text-[--text-var-color] text-center cxs:text-base text-sm">
                        <span>Contact No: </span>
                        <span className="ml-3 text-[--highlite-color]">{data.contact2}</span>
                    </p>
                    <p className="text-[--text-var-color] text-center cxs:text-base text-sm">
                        <span>E-mail: </span>
                        <span className="ml-3 text-[--highlite-color]">{data.email}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export {
    ContactCard
}