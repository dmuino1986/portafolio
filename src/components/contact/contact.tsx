import React from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./contactForm";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="contact"
      className={`contact ${inView ? "visible" : ""}`}
    >
      <h2 className="slide-in-left-2s">Contact</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
