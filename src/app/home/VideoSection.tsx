import { data } from "@/accents/content/content";
import { Button } from "@/components/button";


export default function VideoSection() {
    return (
        <section className="flex items-center justify-center flex-col gap-8 bg-[--text-color] py-[10rem]">
            <h1 className="text-4xl text-[--bg-color] text-center">Watch Our Promo Video</h1>
            <p className="text-[--text-var-color] text-center">Watch our promo video to get the basic information about our company and products.</p>
            <Button className="rounded-full mt-5" label={data.home.section4.svg} />
        </section>
    )
}