import ContactBanner from "@/components/contact/ContactBanner";
import ContactMap from "@/components/contact/ContactMap";
import GetInTouch from "@/components/contact/GetInTouch";

export const metadata = {
  title: "Contact Us - Classic India",
  description: "",
};

export default function Contact() {
  return (
    <>
      <ContactBanner />
      <GetInTouch />
      <ContactMap />
    </>
  );
}
