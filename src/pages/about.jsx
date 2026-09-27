import React from "react";
import { motion } from "framer-motion";
import about from "../assets/aboutUs.png";

function About() {
  return (
    <section className="bg-white text-gray-700 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={about}
            alt="About us"
            className="object-cover h-full w-full"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          {/* Section Title */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="h-0.5 w-12 bg-blue-950"></div>
            <span className="text-blue-950 tracking-widest text-2xl md:text-3xl font-bold">
              ABOUT US
            </span>
            <div className="h-0.5 w-12 bg-blue-950"></div>
          </div>

          {/* Heading */}
          {/* <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Empowering youth through affordable tech education!
          </h3> */}

          {/* Paragraphs */}
          <p className="text-[16px] leading-relaxed">
            {" "}
            <span className="font-semibold text-[24px]">
              {" "}
              Maycermary & Associates Law Firm
            </span>{" "}
            (Legal Practitioners) is an Associateship established to provide
            first class quality legal services as in handling legal matters, and
            proffering legal analysis and advice, amenably and flexibility in
            servicing clients’ interest and demands. Commercial expedience and
            acumen in Commercial Law matters, and a highly effective [networking
            with other law firms around the country] in issues of legal
            representation. The law firm is not only sufficiently versatile to
            meet the complex requirement of our clients, but also able to
            provide Personal and Individual service to each client. Maycermary &
            Associates Law Firm (Legal Practitioners) is an Associateship
            established to provide first class quality legal services as in
            handling legal matters, and proffering legal analysis and advice,
            amenably and flexibility in servicing clients’ interest and demands.
            Commercial expedience and acumen in Commercial Law matters, and a
            highly effective [networking with other law firms around the
            country] in issues of legal representation. The law firm is not only
            sufficiently versatile to meet the complex requirement of our
            clients, but also able to provide Personal and Individual service to
            each client.
          </p>

          <p className="text-[16px] leading-relaxed">
            The law firm in currently engaged by reputable companies such as
            TGI, Chi Pharmaceuticals, Wacot Nig Ltd, Jaiz Bank Plc, Taj Bank
            Limited and a host of other companies.
          </p>

          <p className="text-[16px] leading-relaxed">
            Personal and long-standing relations with firms and colleagues
            throughout the country also enable us to support our clients
            successfully in legal matters and transactions. Within the wide
            spectrum of legal practice, the firm undertakes briefs and provides
            legal services in various areas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
