import AboutInto from "./components/AboutIntro";
import Evolution from "./components/Evolution";
import Hiring from "./components/Hiring";
import MissinVision from "./components/MissionVision";
import Overview from "./components/Overview";

export default function About() {
    return (
        <main className="overflow-x-hidden">
            <AboutInto />
            <Overview />
            <MissinVision />
            <Evolution />
            <Hiring />
        </main>
    )
}