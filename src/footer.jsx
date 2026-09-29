import React from "react";
import logo from "./assets/logo.jpeg";
import { Mail, MapPin, Phone } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <footer className="bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 grid md:grid-cols-2 gap-14">
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
            <motion.div custom={1} variants={fadeUp} className="flex gap-4">
              <MapPin className="text-slate-400" size={32} />
              <span className="md:text-[16px] leading-relaxed">
                No. C-22 Zaria Road, Zainab House, Beind Jifatu Stores, Kano
                State.
              </span>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} className="flex gap-4">
              <Phone className="text-slate-400" size={32} />
              <span className="md:text-[16px]">+234 802 144 4503</span>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="flex gap-4">
              <Mail className="text-slate-400" size={32} />
              <span className="md:text-[16px]">
                maycermarylawfirm@gmail.com
              </span>
            </motion.div>

            {/* SOCIALS */}
            {/* <motion.div
              custom={4}
              variants={fadeUp}
              className="flex gap-5 mt-6 text-slate-400"
            >
              <motion.a
                href="https://www.instagram.com/ideas_and_dataglobalacademy?igshid=MW84dmk0Y3dkYXdj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
              >
                <FaInstagram className="hover:text-white transition cursor-pointer text-xl" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/ideasanddata"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
              >
                <FaFacebook className="hover:text-white transition cursor-pointer text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/ideas-and-data-global-academy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
              >
                <FaLinkedin className="hover:text-white transition cursor-pointer text-xl" />
              </motion.a>
              <motion.a
                href="https://twitter.com/IDGA_NG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-white transition cursor-pointer text-xl" />
              </motion.a>
            </motion.div> */}
          </div>

          <div className="mt-8">
            <h4 className="text-slate-300 text-[16px] md:text-[18px] font-medium mb-2">
              Office Hours
            </h4>
            <p className="text-sm md:text-[16px]">Mon – Fri: 8:00am – 5:00pm</p>
          </div>
        </motion.div>

        {/* COMPANY
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold tracking-wide mb-6 text-[20px] md:text-[24px]">
            COMPANY
          </h3>

          <ul className="space-y-4 text-sm md:text-[16px]">
            {[
              "About Us",
              "Policy",
              "Terms & Conditions",
              "Career",
              "Blog",
              "Contact Us",
            ].map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={fadeUp}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

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
            {[
              "General Legal Services",
              "Constitutional Law",
              "Arbitration and Alternative Dispute Resolution",
              "Banking/ Commercial Law",
            ].map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={fadeUp}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
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
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
