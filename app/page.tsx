import { TeamProvider } from "@/lib/team-context";
import ThemeRoot from "@/components/ThemeRoot";
import Splash from "@/components/Splash";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveProof from "@/components/LiveProof";
import Identification from "@/components/Identification";
import Mechanism from "@/components/Mechanism";
import ValueStack from "@/components/ValueStack";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Urgency from "@/components/Urgency";
import Guarantee from "@/components/Guarantee";
import TeamSelector from "@/components/TeamSelector";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <TeamProvider>
      <Splash />
      <ThemeRoot>
        <Nav />
        <Hero />
        <LiveProof />
        <Identification />
        <Mechanism />
        <ValueStack />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <Urgency />
        <Guarantee />
        <TeamSelector />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyCTA />
      </ThemeRoot>
    </TeamProvider>
  );
}
