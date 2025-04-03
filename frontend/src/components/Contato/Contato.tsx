"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ContactItem {
  icon: string;
  alt: string;
  label: string;
  value: string;
  href: string;
}

const Contato = () => {
  const contacts: ContactItem[] = [
    {
      icon: "/mail.svg",
      alt: "Ícone de e-mail",
      label: "E-mail",
      value: "nogbianca@outlook.com",
      href: "mailto:nogbianca@outlook.com",
    },
    {
      icon: "/phone.svg",
      alt: "Ícone de telefone",
      label: "Telefone",
      value: "(19) 99609-7990",
      href: "https://api.whatsapp.com/send?phone=5519996097990",
    },
    {
      icon: "/linkedin.svg",
      alt: "Ícone do LinkedIn",
      label: "LinkedIn",
      value: "@biancasilvanogueira",
      href: "https://www.linkedin.com/in/biancasilvanogueira/",
    },
    {
      icon: "/github.svg",
      alt: "Ícone do GitHub",
      label: "GitHub",
      value: "@biancasnogueira",
      href: "https://github.com/biancasnogueira",
    },
    {
      icon: "/instagram.svg",
      alt: "Ícone do Instagram",
      label: "Instagram",
      value: "@devbiancaa",
      href: "https://www.instagram.com/devbiancaa/",
    },
  ];

  return (
    <section
      id="contato"
      className="container mx-auto flex flex-col items-center justify-center py-8 px-4"
    >
      <motion.h2
        className="text-2xl font-bold mb-8 text-center "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Contatos
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-3xl justify-center items-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
        viewport={{ once: false }}
      >
        {contacts.map((contact, index) => (
          <ContactCard 
            key={index} 
            {...contact} 
            // Aplica col-span-2 apenas no último item para mobile
            className={index === contacts.length - 1 ? "col-span-2 md:col-span-1" : ""}
          />
        ))}
      </motion.div>
    </section>
  );
};

const ContactCard = ({ icon, alt, label, value, href, className }: ContactItem & { className?: string }) => {
  return (
    <motion.div
      className={`flex flex-col items-center text-center ${className}`}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2"
      >
        <div className="bg-[#212121] border-2 border-[#521797] rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:shadow-[#521797] transition-all duration-300">
          <Image 
            src={icon} 
            alt={alt} 
            width={24} 
            height={24} 
            className="h-6 w-6" 
          />
        </div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-300">{value}</p>
      </a>
    </motion.div>
  );
};

export default Contato;