import React from "react";
import { useInView } from "react-intersection-observer";

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
      <div className="container">
        <h2>Contact</h2>
        <p>
          Let's work together! Reach out to me at{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>.
        </p>
      </div>
    </section>
  );
};

export default Contact;
