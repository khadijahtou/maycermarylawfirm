import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/maycermarylogo.jpg";

function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/process", name: "Process" },
    { path: "/about", name: "About Us" },
    { path: "/team", name: "Team" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact Us" },
  ];

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MayCermary Law Firm logo"
              className="h-12 w-12 object-contain"
            />

            <h3 className="text-blue-950 text-[26px]  hidden md:block font-serif font-medium">
              MayCermary Law Firm
            </h3>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {links.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-1 transition ${
                      isActive
                        ? "text-blue-950 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-950"
                        : "text-gray-700 hover:text-blue-950"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-blue-950"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t shadow-sm"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {links.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-base font-medium transition ${
                        isActive
                          ? "text-blue-950"
                          : "text-gray-700 hover:text-blue-950"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* NAVBAR SPACER */}
      <div className="h-16" />
    </>
  );
}

export default Nav;
