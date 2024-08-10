import { aboutData } from "@/accents/content/about";
import { Button } from "@/components/button";

export default function Hiring() {
    return (
        <section className="py-10 flex flex-col items-center justify-center gap-5">
            <h1 className="text-center text-4xl mb-5">
                {aboutData.hiring.title}
            </h1>
            <p className="text-center text-[--text-var-color] lg:w-[50%] w-[90%]">
                {aboutData.hiring.detail}
            </p>
            <Button 
                label={aboutData.hiring.btn}
            />
        </section>
    )
}