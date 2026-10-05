import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Footer() {
  const services = [
    "General Legal Services",
    "Constitutional Law",
    "Arbitration and Alternative Dispute Resolution",
    "Banking/ Commercial Law",
  ];

  return (
    <footer className="bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 grid md:grid-cols-3 gap-14">
        {/* CONTACT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-slate-300 font-semibold tracking-wide text-[20px] md:text-[24px] mb-6">
            CONTACT
          </h3>

          <div className="space-y-6 text-sm">
            {/* ADDRESS */}
            <motion.a
              custom={1}
              variants={fadeUp}
              href="https://www.google.com/maps/search/?api=1&query=No.+C-22+Zaria+Road,+Zainab+House,+Behind+Jifatu+Stores,+Kano+State"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <MapPin
                className="text-slate-400 group-hover:text-slate-900 transition"
                size={32}
              />

              <span className="md:text-[16px] leading-relaxed group-hover:text-slate-600 transition">
                No. C-22 Zaria Road, Zainab House, Behind Jifatu Stores, Kano
                State.
              </span>
            </motion.a>

            {/* PHONE */}
            <motion.a
              custom={2}
              variants={fadeUp}
              href="tel:+2348021444503"
              className="flex gap-4 group"
            >
              <Phone
                className="text-slate-400 group-hover:text-slate-900 transition"
                size={32}
              />

              <span className="md:text-[16px] group-hover:text-slate-600 transition">
                +234 802 144 4503
              </span>
            </motion.a>

            {/* EMAIL */}
            <motion.a
              custom={3}
              variants={fadeUp}
              href="mailto:maycermarylawfirm@gmail.com"
              className="flex gap-4 group"
            >
              <Mail
                className="text-slate-400 group-hover:text-slate-900 transition"
                size={32}
              />

              <span className="md:text-[16px] group-hover:text-slate-600 transition">
                maycermarylawfirm@gmail.com
              </span>
            </motion.a>
          </div>

          {/* OFFICE HOURS */}
          <div className="mt-8">
            <h4 className="text-slate-300 text-[16px] md:text-[18px] font-medium mb-2">
              Office Hours
            </h4>

            <p className="text-sm md:text-[16px]">Mon – Fri: 8:00am – 5:00pm</p>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-slate-300 font-semibold tracking-wide mb-6 text-[20px] md:text-[24px]">
            QUICK LINKS
          </h3>

          <ul className="space-y-4 text-sm md:text-[16px]">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Our Team", path: "/team" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, i) => (
              <motion.li key={item.name} custom={i} variants={fadeUp}>
                <Link
                  to={item.path}
                  className="hover:text-slate-500 transition"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-slate-300 font-semibold tracking-wide mb-6 text-[20px] md:text-[24px]">
            SERVICES
          </h3>

          <ul className="space-y-4 text-sm md:text-[16px]">
            {services.map((item, i) => (
              <motion.li key={item} custom={i} variants={fadeUp}>
                <Link
                  to="/services"
                  className="hover:text-slate-500 transition"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* APPOINTMENT */}
          <Link
            to="/contact"
            className="inline-block mt-8 border border-slate-400 px-5 py-3 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
          >
            Request an Appointment
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-400">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Maycermary Law Firm. All rights
            reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-slate-500 transition"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-slate-500 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
