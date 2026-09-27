import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-blue-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Heading */}
          <p className="text-blue-200 tracking-[0.25em] text-sm font-semibold mb-4">
            GET IN TOUCH
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold">
            Need Legal Assistance?
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/60 mx-auto my-6" />

          {/* Description */}
          <p className="max-w-2xl mx-auto text-white/75 text-base md:text-lg leading-relaxed">
            We're ready to discuss your legal matter. Get in touch with
            Maycermary & Associates for professional legal guidance and support
            tailored to your needs.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mt-8 text-sm">
            <a
              href="tel:07036563404"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Phone size={18} />
              07036563404
            </a>

            <a
              href="tel:08066951339"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Phone size={18} />
              08066951339
            </a>

            <a
              href="mailto:Maycermarylawfirm@gmail.com"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Mail size={18} />
              Maycermarylawfirm@gmail.com
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-950 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition group"
            >
              Request an Appointment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;
