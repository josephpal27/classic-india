import AboutBanner from "@/components/about/AboutBanner";
import GetInTouchCTA from "@/components/about/GetInTouchCTA";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";

export const metadata = {
  title: "About Us - Classic India",
  description: "",
};

export default function About() {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <VisionMission />
      <GetInTouchCTA />
    </>
  );
}
