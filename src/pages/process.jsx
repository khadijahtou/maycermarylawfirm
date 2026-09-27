import React from "react";
import { motion } from "framer-motion";

function Process() {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Mission",
              text: "To provide strategic, timely and result-oriented legal services that protect our clients' business interests, ensure regulatory compliance, and uphold the highest standards of professional integrity.",
            },
            {
              title: "Vision",
              text: "To be a leading corporate law firm in Nigeria recognized for legal excellence, ethical leadership, and innovative business solutions that drive sustainable growth for our clients.",
            },
            {
              title: "Values",
              text: "We uphold honesty, confidentiality, diligence, and the highest professional standards, delivering innovative, client-focused and collaborative legal solutions that protect business interests and advance justice.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden bg-white/90 backdrop-blur-md p-8 rounded-2xl
                         shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                         border border-slate-100 cursor-pointer"
            >
              {/* Animated bottom overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-0 bg-blue-950
                transition-all duration-500 ease-in-out group-hover:h-full"
              />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-semibold text-slate-900 mb-4
                             transition-colors duration-500 group-hover:text-white"
                >
                  {item.title}
                </h3>

                <p
                  className="text-slate-600 leading-relaxed
                             transition-colors duration-500 group-hover:text-slate-200"
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
