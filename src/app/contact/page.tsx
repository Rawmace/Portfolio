"use client";
import React from "react";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      value: "Connect with me",
      link: "https://www.linkedin.com/in/bipin-kalakheti/",
      delay: 0.2,
    },
    {
      platform: "Email",
      icon: <Mail className="w-8 h-8" />,
      value: "Send me an email",
      link: "mailto:bipinkalakheti7@gmail.com",
      delay: 0.3,
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      value: "Follow me",
      link: "https://www.instagram.com/beepin.7/",
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto mt-20">
        <motion.div
          className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm card-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-zinc-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact me
          </motion.h1>
          <motion.p
            className="text-zinc-300 text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            You can contact me via LinkedIn, Email or Instagram. I usually
            respond within a day.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact) => (
              <motion.a
                key={contact.platform}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-black/20 rounded-xl hover:bg-black/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contact.delay }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="mb-4 text-zinc-300 transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </motion.div>
                <h2 className="text-xl font-semibold mb-2 text-zinc-100 group-hover:text-[var(--accent-color)] dark:group-hover:text-[var(--accent-color)]">
                  {contact.platform}
                </h2>
                <p className="text-zinc-400 text-center group-hover:text-zinc-300 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
