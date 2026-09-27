import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Practice from "../assets/practice.png";
import Banking from "../assets/banking.png";
import Constitutional from "../assets/constitutional.png";
import Arbitration from "../assets/arbitration.png";

const services = [
  {
    img: Practice,
    title: "General Practice",
    text: [
      "We engage in all aspects of Civil and Criminal litigations; prosecution, defense and brief watching.",
      "Searches for Banks including Company Search with CAC, Land Registries and other relevant agencies.",
      "Documentation, preparation, perusal, interpretation of several legal documents and Agreements.",
      "General Law practice and legal advice on Company & Commercial Law, Labour and Law of Industrial Relations, Insurance Law, Copyright, Trademarks and Patent Law, Marine Law, Petroleum & Gas Law.",
      "Land & Property Law, Registration of Interest in Land, transfer and change of ownership in land, Declaration of Title, Land documentation and Litigation.",
    ],
  },

  {
    img: Banking,
    title: "Banking/Commercial Law Practice",
    text: [
      "We engage in debt recovery services for Banks and other Financial Institutions, Governments [Federal, State & Local] and Authorities, Agencies and Organizations, Companies and Individuals. Institute Legal actions, hold discussions, and undertake negotiations and arrangement towards debt recovery [including reconstructing and rescheduling of debts].",

      "We engage in commercial and financial conveyance, preparation of varied miscellaneous banking and financial documents, including but not limited to Debentures, Deed of Mortgage, Loan Agreements, Equipment Leases, Bills of Sales, Guarantees, Bonds and pledges.",

      "Conduct comprehensive Legal Search and Enquiries for Banks and Organizations on diverse issues of interest at Lands Registries offices and Corporate Affairs Commission.",

      "We provide consultancy services and process compliance certificates from different government agencies i.e. CAC, CBN, PENCOM, FIRS, NAICOM, NDIC, ITF, SEC, NSITF, NOTAP, NEPZA and all related compliance certificates or approvals.",

      "Defend civil and criminal litigation against Banks and Commercial Institutions, Companies, Corporations and Organizations as may be instructed from time to time.",

      "Preparation, documentation and perfecting of conveyance and related documents including Leases, Sub-leases, Assignments, Power of Attorney, insurance bond, Deed of Surrender and/or Discharge and other varied documentations involved in land transactions.",

      "We engage in corporate practice and other allied or related Corporate and Commercial matters.",

      "Preparation and advice on investments and financial legal documentations, including but not limited to Joint Venture financial and Co-operation Agreements, Trust Deeds, Shareholders Agreements, Management and Technical Management Agreements.",

      "Incorporation of businesses (Limited Liability Companies, Partnerships and Trade names), winding up, liquidation, receivership, preparation and advice on documentations relating to Company securities and finances, and to so act as advisers.",

      "Offer advice on legal questions or issues arising from commercial transactions of Companies, Organizations, Partnerships and Individuals.",
    ],
  },
  {
    img: Arbitration,
    title: "Arbitration and Alternative Dispute Resolution",
    text: [
      "We make representation for clients on matters before Arbitration Panels and/or constitute Arbitration Panels for settlement of divergent claims of parties, entailing skill, tact and experience in painstaking negotiations.",
      "Restructuring of agreements and clarification of ambiguities on legal documents.",
      "ADR – Promotion and encouraging alternative dispute resolution amongst parties.",
    ],
  },
  {
    img: Constitutional,
    title: "Constitutional Law Practice",
    text: [
      "We handle and/or institute Election Petitions on behalf of candidates to an election and/or institutions involved in the conduct of Elections.",
    ],
  },
];

function Services() {
  const [expanded, setExpanded] = useState(null);

  const toggleService = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 px-4 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <div className="h-0.5 w-16 bg-blue-950"></div>

        <span className="text-blue-950 tracking-widest text-3xl font-bold">
          SERVICES
        </span>

        <div className="h-0.5 w-16 bg-blue-950"></div>
      </motion.div>

      <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
        What We Do
      </h3>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        {services.map((item, i) => {
          const isExpanded = expanded === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-fill transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-blue-950 text-left">
                    {item.title}
                  </h3>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleService(i)}
                    aria-label={
                      isExpanded
                        ? `Collapse ${item.title}`
                        : `Expand ${item.title}`
                    }
                    className="shrink-0 w-9 h-9 rounded-full border border-blue-950/20 flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300"
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                </div>

                {/* Expandable Text */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="text-gray-600 text-[15px] leading-relaxed text-left pt-4 space-y-3 list-disc list-inside">
                        {item.text.map((paragraph, index) => (
                          <li key={index}>{paragraph}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
