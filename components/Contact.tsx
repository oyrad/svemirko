import Image from 'next/image';
import contactOne from '@/public/images/contact-1.webp';
import contactTwo from '@/public/images/contact-2.webp';
import contactThree from '@/public/images/contact-3.webp';

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
        <div className="px-8 py-20 text-xl lg:px-20 lg:text-3xl bg-black w-full">
          <p className="mb-2">Booking:</p>
          <a href="mailto:visemanjezauvijek@gmail.com">
            visemanjezauvijek@gmail.com
          </a>
        </div>
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
