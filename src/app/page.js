import Collections from "@/components/home/Collections";
import HomeBanner from "@/components/home/HomeBanner";
import OfferCTA from "@/components/OfferCTA";
import LatestBlogs from "@/components/home/LatestBlogs";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Collections />
      <WhyChooseUs />
      <LatestBlogs />
      <OfferCTA />
    </>
  );
}
