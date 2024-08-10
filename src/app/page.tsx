import HeroSection from "./home/HeroSection";
import AutoTradingSection from "./home/AutoTradingSection";
import InfoSection from "./home/InfoSection";
import RetailTrading from "./home/RetailTradingSection";
import VideoSection from "./home/VideoSection";
import ClientSaySection from "./home/ClientSaySection";
import UserSection from "./home/UserSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AutoTradingSection />
      <InfoSection />
      <RetailTrading />
      <VideoSection />
      <ClientSaySection />
      <UserSection />
    </main>
  );
}

