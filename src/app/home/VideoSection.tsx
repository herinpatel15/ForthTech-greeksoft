import { homeData } from "@/accents/content/home";
import { Button } from "@/components/button";


export default function VideoSection() {
    return (
        <section className="flex items-center justify-center flex-col gap-8 bg-[--text-color] py-[10rem]">
            <h1 className="text-4xl text-[--bg-color] text-center">{homeData.video.title}</h1>
            <p className="text-[--text-var-color] text-center">{homeData.video.detail}</p>
            <Button className="rounded-full mt-5" label={homeData.video.svg} />
        </section>
    )
}