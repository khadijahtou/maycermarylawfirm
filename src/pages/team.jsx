import React, { useState } from "react";
import { motion } from "framer-motion";

import amina from "../assets/amina.jpeg";
import aminu from "../assets/aminu.jpeg";
import maje from "../assets/maje.jpeg";
import maisamari from "../assets/maisamari.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

const teamMembers = [
  {
    img: maisamari,
    name: "Sani Maiyaki Maisamari ACarb",
    role: "Managing Partner",
    text: "Sani Maiyaki Maisamari graduated from the Faculty of Law, Ahmadu Bello University Zaria with LL.B and was called to the Nigerian Bar. He is currently undergoing his Master's degree (LLM) in Information and Communication Technology Law. He is the Legal Adviser to International Human Rights Commission (IHRC) Nigeria Committee and the Legal Adviser of Market Traders Association (MATAN) Kano Chapter. He is an Associate of the Nigerian Chartered Institute of Arbitrators, a Member of the NBA Section on Business Law (SBL), and a Member of the NBA Security Relations Committee. He has worked in different capacities as a corporate lawyer with specialty in litigation, property law, corporate law practice, commercial law and intellectual property, election petitions, among others. He has also attended several courses and workshops on capacity development.",
  },

  {
    img: maje,
    name: "Ibrahim Garba Muhammad",
    role: "Legal Associate",
    text: "Ibrahim Garba Muhammad graduated from the Faculty of Law, University of Maiduguri with LL.B and was called to the Nigerian Bar. After being called to the Nigerian Bar, he worked in different capacities as a corporate lawyer with specialty in corporate law practice, commercial law, intellectual property and litigation, among others. He attended several courses and workshops.",
  },

  {
    img: aminu,
    name: "Aminu Ado Shariff Esq",
    role: "Legal Associate",
    text: "Aminu Ado Sharif is a distinguished Nigerian Solicitor and Advocate, called to the Nigerian Bar in 2018 and an alumnus of Bayero University, Kano. He holds an LL.M. and is currently pursuing a Ph.D. His practice combines conventional common law, Islamic jurisprudence, and cross-border commercial advisory, with experience in high-stakes litigation, corporate and commercial law, arbitration, alternative dispute resolution, estate planning, Islamic law, Islamic banking and finance, and Sharia compliance and audit. Qualified to appear before both conventional and Sharia courts, Aminu is fluent in English and Arabic. He advises corporate, institutional, and private clients on complex, multi-jurisdictional matters, providing tailored and nuanced solutions.",
  },

  {
    img: amina,
    name: "Team Member",
    role: "Legal Associate",
    text: "Additional information about this team member can be added here.",
  },
];

function Team() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="bg-white text-gray-700 px-4 py-16 md:px-8">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            MEET THE TEAM
          </h3>

          <div className="w-16 h-0.5 bg-gray-900 mx-auto mt-4" />
        </motion.div>
      </motion.div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => {
          const isFlipped = flipped === i;

          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="h-[420px] [perspective:1200px]"
              onClick={() => setFlipped(isFlipped ? null : i)}
            >
              {/* Flip Card */}
              <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                }}
                whileHover={{
                  rotateY: 180,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* ================= FRONT ================= */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-gray-100"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-50"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

                  {/* Member information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="font-semibold text-xl">{member.name}</h4>

                    {/* <p className="text-white/80 text-sm mt-1">{member.role}</p> */}
                  </div>
                </div>

                {/* ================= BACK ================= */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white p-7"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="h-full flex flex-col">
                    {/* Role */}
                    <p className="text-blue-200 text-xs uppercase tracking-[0.2em] mb-2">
                      {member.role}
                    </p>

                    {/* Name */}
                    <h4 className="text-xl font-semibold mb-4">
                      {member.name}
                    </h4>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-white/50 mb-5" />

                    {/* Biography */}
                    <div className="flex-1 overflow-y-auto pr-2">
                      <p className="text-white/90 text-sm leading-7">
                        {member.text}
                      </p>
                    </div>

                    {/* Bottom hint */}
                    <p className="text-white/40 text-xs text-center mt-4">
                      Hover or tap to return
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Team;
