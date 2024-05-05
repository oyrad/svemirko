import Image from "next/image";
import contact from "@/public/images/contact.webp";
import contactOne from "@/public/images/contact-1.webp";
import contactTwo from "@/public/images/contact-2.webp";
import contactThree from "@/public/images/contact-3.webp";

export default function Contact() {
  return (
    <section id="contact">
      <Image
        src={contactOne}
        alt="Contact"
        className="lg:hidden"
        placeholder="blur"
      />

      <div className="flex">
        <div className="px-8 py-20 text-xl lg:px-20 lg:text-3xl">
          <p className="mb-16 lg:w-2/3">
            Svemirko je sve što ste od jednog pop benda tražili i dobili.
            Savršeno uravnotežen spoj osjećaja, vještine i kvalitete.
          </p>
          <p className="mb-2">Booking:</p>
          <a href="mailto:visemanjezauvijek@gmail.com">
            visemanjezauvijek@gmail.com
          </a>
        </div>
        <Image
          src={contact}
          alt="Contact"
          className="hidden w-1/3 lg:block"
          placeholder="blur"
        />
      </div>
      <Image src={contactTwo} alt="Contact" className="lg:hidden" />
      <div className="hidden lg:flex">
        <Image
          src={contactOne}
          alt="Contact"
          className="w-1/3"
          placeholder="blur"
        />
        <Image
          src={contactTwo}
          alt="Contact"
          className="w-1/3"
          placeholder="blur"
        />
        <Image
          src={contactThree}
          alt="Contact"
          className="w-1/3"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
