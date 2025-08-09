import { Metadata } from "next";
import Contact from "@components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us for inquiries, support, or more information about our services.",
};

const ContactUs = () => {
  return <Contact />;
};

export default ContactUs;
