import Image from "next/image";
import contactImage from "@/public/images/contact.webp";

export default function Contact() {
  return (
    <section id="contact">
      <Image src={contactImage} alt="Contact" />
      <div className="px-8 py-20 text-xl lg:px-20 lg:text-3xl">
        <p className="mb-16">
          Svemirko je sve što ste od jednog pop benda tražili i dobili. Savršeno
          uravnotežen spoj osjećaja, vještine i kvalitete.
        </p>
        <p className="mb-2">Booking:</p>
        <a href="mailto:visemanjezauvijek@gmail.com">
          visemanjezauvijek@gmail.com
        </a>
      </div>
    </section>
  );
}
