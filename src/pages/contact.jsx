import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Navigation,
} from "lucide-react";

const offices = [
  {
    city: "Kano",
    address: "No. C22 Zaria Road, beside Jifatu Store, Kano",
    mapAddress: "No. C22 Zaria Road, beside Jifatu Store, Kano, Nigeria",
  },
  {
    city: "Abuja",
    address: "Flat 01, Plot 491 Adeb... Atanda Street, Mabushi, FCT, Abuja",
    mapAddress: "Mabushi, Abuja, Nigeria",
  },
  {
    city: "Lagos",
    address: "No. 19, Dipeolu Street, Off Awolowo Way, Lagos",
    mapAddress: "No. 19, Dipeolu Street, Off Awolowo Way, Lagos, Nigeria",
  },
  {
    city: "Minna",
    address: "No. A 26, Old Airport Quarters, Minna, Niger State",
    mapAddress: "No. A 26, Old Airport Quarters, Minna, Niger State, Nigeria",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Contact() {
  const form = useRef();

  const [selectedOffice, setSelectedOffice] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const office = offices[selectedOffice];

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      office.mapAddress,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        "service_au7maph",
        "template_lbmv1wv",
        form.current,
        {
          publicKey: "ejVzOALvmSNE6fKwJ",
        },
      );

      setSuccessMessage(
        "Thank you. Your appointment request has been sent successfully. A member of our team will contact you shortly.",
      );

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setErrorMessage(
        "We couldn't send your appointment request. Please try again or contact us directly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-slate-50">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-blue-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-blue-200 tracking-[0.3em] text-sm font-semibold mb-4">
              MAYCERMARY LAW FIRM
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold">Contact Us</h1>

            <div className="w-16 h-0.5 bg-white/70 mx-auto mt-6 mb-6" />

            <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
              Professional legal support when you need it. Get in touch with our
              team to discuss your legal matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
      ====================================================== */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* =================================================
              LEFT - CONTACT DETAILS
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gray-900 text-white rounded-2xl p-8 md:p-10"
          >
            <p className="text-blue-200 tracking-[0.2em] text-sm font-semibold mb-3">
              GET IN TOUCH
            </p>

            <h2 className="text-3xl font-semibold mb-8">We're Here to Help</h2>

            {/* PHONE */}
            <div className="flex gap-4 mb-6">
              <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-white/50 text-sm mb-1">Phone</p>

                <a
                  href="tel:07036563404"
                  className="block hover:text-blue-200 transition"
                >
                  07036563404
                </a>

                <a
                  href="tel:08066951339"
                  className="block hover:text-blue-200 transition"
                >
                  08066951339
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 mb-8">
              <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-white/50 text-sm mb-1">Email</p>

                <a
                  href="mailto:Maycermarylawfirm@gmail.com"
                  className="hover:text-blue-200 transition break-all"
                >
                  Maycermarylawfirm@gmail.com
                </a>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 mb-8" />

            {/* OFFICES */}
            <div>
              <p className="text-blue-200 tracking-[0.2em] text-xs font-semibold mb-5">
                OUR OFFICES
              </p>

              <div className="grid grid-cols-2 gap-3">
                {offices.map((item, index) => (
                  <button
                    key={item.city}
                    type="button"
                    onClick={() => setSelectedOffice(index)}
                    className={`text-left rounded-xl p-4 border transition-all duration-300 ${
                      selectedOffice === index
                        ? "bg-white text-blue-950 border-white"
                        : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} />

                      <span className="font-semibold">{item.city}</span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        selectedOffice === index
                          ? "text-gray-600"
                          : "text-white/60"
                      }`}
                    >
                      {item.address}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div className="flex gap-4 mt-8">
              <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                <Clock size={20} />
              </div>

              <div>
                <p className="text-white/50 text-sm mb-1">Office Hours</p>

                <p>Monday – Friday</p>
                <p className="text-white/60 text-sm">8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT - APPOINTMENT FORM
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10"
          >
            <p className="text-blue-950 tracking-[0.2em] text-sm font-semibold mb-3">
              LEGAL CONSULTATION
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Request an Appointment
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Tell us briefly about your legal matter and a member of our team
              will get in touch with you.
            </p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="08012345678"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition"
                  />
                </div>
              </div>

              {/* CASE DESCRIPTION */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Case Description
                </label>

                <textarea
                  name="case_description"
                  required
                  rows="6"
                  placeholder="Briefly describe your legal matter..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none resize-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition"
                />
              </div>

              {/* DISCLAIMER */}
              {/* DISCLAIMER */}
              <p className="text-xs text-gray-400 leading-relaxed">
                Please avoid including highly confidential or sensitive
                information in this initial enquiry.
              </p>

              {/* SUCCESS / ERROR MESSAGE */}
              {successMessage && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="text-sm text-green-700">{successMessage}</p>
                </div>
              )}

              {errorMessage && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-950 text-white py-3.5 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition-all duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Request an Appointment"}

                {!isSending && (
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ====================================================== */}
      <section className="pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-900 tracking-[0.25em] text-sm font-semibold mb-3">
              FIND US
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Office
            </h2>

            <p className="text-gray-500 mt-3">{office.address}</p>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-gray-200">
            <iframe
              title={`${office.city} office location`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=7.35%2C11.95%2C8.55%2C12.25&layer=mapnik`}
              className="w-full h-[400px] border-0"
              loading="lazy"
            />

            {/* Directions Button */}
            <button
              type="button"
              onClick={getDirections}
              className="absolute bottom-5 right-5 bg-blue-950 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 font-medium hover:bg-blue-900 transition"
            >
              <Navigation size={18} />
              Get Directions
            </button>
          </div>

          {/* Selected Office */}
          <motion.div
            key={office.city}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5"
          >
            <div className="flex gap-3">
              <MapPin className="text-blue-950 shrink-0" />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {office.city} Office
                </h3>

                <p className="text-sm text-gray-500 mt-1">{office.address}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={getDirections}
              className="text-blue-950 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              Get Directions
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Need Legal Assistance?
            </h2>

            <p className="text-white/70 mt-4 mb-8">
              We're ready to discuss your legal matter.
            </p>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-white text-blue-950 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
